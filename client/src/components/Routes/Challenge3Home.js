import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { searchCustomerJSON } from '../../actions/actions2'
import { Link } from 'react-router-dom'
import { Input, Button, Header, Icon } from 'semantic-ui-react'
import HeaderBar from '../HeaderBar'


const Challenge3Home = () => {

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

    const customers = useSelector(appstate => appstate.customersFound)

    

    return (
        <div className="wrapper">
            <HeaderBar />

            <Header as='h2' textAlign='center'>
                <Icon name='users'/>
                <Header.Content>Customer Database</Header.Content>
            </Header>

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

                <Link className="usersFound" to={"/customer/view/" + customer.id} key={`customer - `+ i}>
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

export default Challenge3Home