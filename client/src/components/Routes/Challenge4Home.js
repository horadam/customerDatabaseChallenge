import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchCustomerJSON } from '../../actions/actions2'
import HeaderBar from '../HeaderBar'
import { Table, Button, Menu, Icon, Header, Input } from 'semantic-ui-react'


const Challenge4Home = () => {

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

            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                    
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {customers.map((customer, i) => (
                        <Table.Row>
                            <Table.Cell>{customer.first_name}
                            </Table.Cell>
                            <Table.Cell>{customer.last_name}</Table.Cell>
                            <Table.Cell>{customer.email}</Table.Cell>
                            <Table.Cell>
                            <Link to={"/customerUIUX/view/" + customer.id} key={`customer - `+ i}>
                                <Icon name='eye' />
                                View 
                            </Link> 
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

                <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='4'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                            <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                            <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table>
            
    

        </div>
    )
   
  }

export default Challenge4Home