import React from 'react'
import { Link } from 'react-router-dom'

const Landing = (props) => {

    return (
        <div>
            <h1>Challenge Home</h1>
            <Link to="/challenge1">
                <button className='abutton'>Challenge 1</button>
            </Link>
            <Link to="/challenge2">
                <button className='abutton'>Challenge 2</button>
            </Link>
        </div>
    )
}

export default Landing