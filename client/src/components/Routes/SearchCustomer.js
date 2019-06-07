import React, { useState, useEffect } from 'react'
import { searchCustomer } from '../../actions/actions'
import {connect} from 'react-redux'
import  { Link } from 'react-router-dom'

const SearchCustomer = (props) => {

    const [customerSearched, setCustomer] = useState('')

    useEffect(() => {
        searchCustomer('')
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        searchCustomer(customerSearched)
        setCustomer('')
    }

    const customers = props.customersFound

    return (
        <div>
            <h1>Search Customer</h1>

            <form className="searchCustomer" onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              type="text"
              name="searchCustomer"
              id="searchCustomer"
              placeholder="Search a customer..."
              onChange={e => setCustomer(e.target.value)}
              value={customerSearched}
            />
            
            <button className='abutton3' type="submit">
                Search
            </button>
            
            </form>

            <div>
            {customers.map((customer, i) => (

                <Link to={"/customer/" + customer.id} key={`customer - `+ i}>
                    <p>
                        {customer.first_name + " " + customer.last_name + " - " + customer.email}
                    </p>  
                </Link>                      
                ))}
            </div>
        </div>
    )
}

function mapStateToProps(appState){
    return{
        customersFound: appState.customersFound
    }
}

export default connect(mapStateToProps)(SearchCustomer)