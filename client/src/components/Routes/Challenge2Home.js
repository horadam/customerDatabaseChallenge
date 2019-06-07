import React from 'react'
import { Link } from 'react-router-dom'

const Challenge2Home = (props) => {

    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/newCustomer">
                <button className='abutton'>New customer input</button>
            </Link>
            <Link to="/searchCustomer">
                <button className='abutton'>Search customer</button>
            </Link>
        </div>
    )
}

export default Challenge2Home