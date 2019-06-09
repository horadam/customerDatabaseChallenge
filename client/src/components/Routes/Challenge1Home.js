import React, { useState } from 'react'
import { fileUpload } from '../../actions/actions'
// import { Link } from 'react-router-dom'

const Challenge1Home = (props) => {

    const [dataFile, changeDataFile] = useState({})
    const [mapFile, changeMapFile] = useState({})



    function handleSubmit (e) {
        e.preventDefault()
        console.log(dataFile, mapFile)
        fileUpload(dataFile, mapFile).then(resp => {
            console.log('res', resp)
        }).catch(err => {
            console.log('err', err)
        })
  
    }

    return (
        <div>
            <h1>Import Customer Data Sheet</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="data" name="data">
                Select a data file:
            </label>
            <input 
                type="file"
                name="datafile"
                onChange= {e => changeDataFile(e.target.files[0])}>
            </input>
            <label htmlFor="data" name="map">
                Select a map file:
            </label>
            <input 
                type="file"
                name="data"
                onChange= {e => changeMapFile(e.target.files[0])}>
            </input>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Challenge1Home