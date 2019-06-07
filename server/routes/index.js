const express = require('express')
const router = express.Router()
const conn = require("../db")


router.post('/customers/new', (req, res, next) => {

  const sql = `
    INSERT INTO
      customers (email, first_name, last_name, ip, latitude, longitude, created_at)
    VALUES
      (?, ?, ?, ?, ?, ?, ?)
  `

  conn.query(sql, [req.body.email, req.body.fname, req.body.lname, req.body.ip, req.body.lat, req.body.long, req.body.timeStamp], (err, results, fields) => {
    console.log(err)
    res.json({
      message: 'customer added'
    })
  })
})

router.put('/customers/edit', (req, res, next) => {
  const sql =`
  UPDATE
    customers
  SET
    email = ?, first_name = ?, last_name = ?, ip = ?, longitude = ?, latitude = ?, updated_at = ?
  WHERE
    id = ?
  `

  conn.query(sql, [req.body.email, req.body.fname, req.body.lname, req.body.ip, req.body.lat, req.body.long, req.body.timeStamp, req.body.id], (err, results, fields) => {
      res.json({
      message: "customer data updated"
      })
  })
})

router.delete('/customers/remove', (req, res, next) => {
  const sql =`
  DELETE
  FROM
    customers
  WHERE
    id = ?
  `

  conn.query(sql, [req.query.id], (err, results, fields) => {
    console.log(results)
      res.json({
      message: "customer removed from database"
      })
  })
})


router.get('/customers/search', (req, res, next) => {
  const sql = `
        SELECT * 
        FROM 
          customers
        WHERE
          email LIKE '%${req.query.customerSearched}%'
          OR first_name LIKE '%${req.query.customerSearched}%'
          OR last_name LIKE '%${req.query.customerSearched}%'
    `
  if (req.query.customerSearched === '') {
    res.json({
      results: []
    })
  } else {

  conn.query(sql, [req.query.customerSearched],(err, results, fields) => {
    res.json({
      results
    })
  })
}
})

router.get('/customers/current', (req, res, next) => {
  const sql = `
    SELECT * 
    FROM 
      customers
    WHERE
      id = ?
    `

  conn.query(sql, [req.query.Id],(err, results, fields) => {
    console.log(results)
    res.json({
      results
    })
  })
})




module.exports = router
