import React, { useState, useEffect } from 'react'
import { searchCustomer } from '../../actions/actions'
import {connect} from 'react-redux'
import  { Link } from 'react-router-dom'
import { Input, Button, Header, Icon } from 'semantic-ui-react'


const SearchCustomer = (props) => {

    const [customerSearched, setCustomer] = useState('')
    const [lastSearch, setLastSearch] = useState('')

    useEffect(() => {
        searchCustomer('')
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        searchCustomer(customerSearched)
        setLastSearch(customerSearched)
        setCustomer('')
    }

    const customers = props.customersFound

    return (
        <div className="searchCustomer">

            <form onSubmit={handleSubmit}>
            <Input
              icon='users' 
              iconPosition='left' 
              placeholder='Search customers...'
              autoComplete="off"
              type="text"
              name="searchCustomer"
              id="searchCustomer"
              onChange={e => setCustomer(e.target.value)}
              value={customerSearched}
            />
            
            <Button primary
                id="searchButton"
                type="submit">
                    Search
            </Button>
            
            </form>

           < Header as='h5' textAlign='center' className = {lastSearch === '' ? "hidden" : "customerFound"}>
                <Icon name='search'/>
                <Header.Content> Showing results for: {lastSearch}</Header.Content>
            </Header>

            <div>
            {customers.map((customer, i) => (
                
                <Link className="usersFound" to={"/customer/" + customer.id} key={`customer - `+ i}>
                    <Icon name="user" />
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