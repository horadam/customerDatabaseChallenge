const express = require('express')
const fs = require('fs');
const multer = require('multer');
const csv = require('fast-csv');
const router = express.Router()
const conn = require("../db")
const upload = multer({ dest: 'tmp/csv/' });

router.post('/files', upload.array('datafile', 2), (req, res)  => {

    const fileRowsData = [];
    const fileRowsMap = [];
  

    //open uploaded file
    csv.fromPath(req.files[0].path)
      .on("data", function (data) {
        fileRowsData.push(data); // push each row
      })
      .on("end", function () {
        fs.unlinkSync(req.files[0].path)
        csv.fromPath(req.files[1].path)
        .on("data", function (data) {
            console.log('here')
            fileRowsMap.push(data); // push each row
        }) 
        .on("end", function () {
            fs.unlinkSync(req.files[1].path) // remove temp file
        //process "fileRows" and respond

        var fieldnames = fileRowsData.filter((item, i) => i === 0)

        var objdata = fileRowsData
          .filter((item, i) => i !== 0)
          .map((fields, i) => {
            let obj = {}

            fieldnames[0].forEach((field, j) => {
              var keypos = fileRowsMap[1].indexOf(field)
              obj[fileRowsMap[0][keypos]] = fields[j]
            })

            return obj
          })

          insertData(objdata)

          function insertData(data) {
            if (data.length > 0) {

                const sql = `
                    INSERT INTO customers (created_at, first_name, last_name, email, latitude, longitude, ip)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                `

                const val = data.shift()

                const values = [
                    val.created_at,
                    val.first_name,
                    val.last_name,
                    val.email,
                    val.latitude,
                    val.longitude,
                    val.ip
                ]
                
                conn.query(sql, values, (err, results, fields) => {
                    insertData(data)
                })
            } else {
                res.json({
                    message: 'finished'
                })
            }
          }
          

        })
      })
    
  });




  module.exports = router