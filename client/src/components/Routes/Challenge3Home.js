import React, { useState, useEffect } from 'react'
import { searchCustomerJSON } from '../../actions/actions2'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Challenge3Home = (props) => {

    const [customerSearched, setCustomer] = useState('')
    const [lastSearch, setLastSearch] = useState('')

    useEffect(() => {
        searchCustomerJSON('')
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        searchCustomerJSON(customerSearched)
        setLastSearch(customerSearched)
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

            <p className = {lastSearch === '' ? "hidden" : "customerFound"}>
                Showing results for: {lastSearch}
            </p>

            <div>
            {customers.map((customer, i) => (

                <Link to={"/customer/view/" + customer.id} key={`customer - `+ i}>
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

export default connect(mapStateToProps)(Challenge3Home)