import React from 'react'
import { Link } from 'react-router-dom'
import SearchCustomer from './SearchCustomer'


const Challenge2Home = (props) => {

    return (
        <div>
            <h1>Customer Database</h1>
            <Link to="/newCustomer">
                <button className='abutton'>New customer input</button>
            </Link>
            <SearchCustomer />
            {/* <Link to="/searchCustomer">
                <button className='abutton'>Search customer</button>
            </Link> */}
        </div>
    )
}

export default Challenge2Home