import React from 'react'
import { Link } from 'react-router-dom'

const Landing = (props) => {

    return (
        <div>
            <h1>Challenge Home</h1>
            
            <Link to="/challenge1">
                <button className='abutton'>Challenge 1 - ETL Engineering Challenge</button>
            </Link>

            <Link to="/challenge2">
                <button className='abutton'>Challenge 2 - Web Service Engineering Challenge</button>
            </Link>

            <Link to="/challenge3">
                <button className='abutton'>Challenge 3 - JS Engineering Challenge</button>
            </Link>

            <Link to="/challenge4">
                <button className='abutton'>Challenge 4 - UI/UX Design Challenge</button>
            </Link>
        </div>
    )
}

export default Landing