import React from 'react'
import { Link } from 'react-router-dom'
import SearchCustomer from './SearchCustomer'
import HeaderBar from '../HeaderBar'
import { Button, Header, Icon } from 'semantic-ui-react'




const Challenge2Home = (props) => {

    return (
        <div class="wrapper">
            <HeaderBar />

            <Header as='h2' textAlign='center'>
                <Icon name='users'/>
                <Header.Content> Customer Database</Header.Content>
            </Header>
            
            <Link to="/newCustomer">
                <Button id="addCustomerButton" icon labelPosition='right'>
                    Add a New Customer Data
                    <Icon name='plus' />
                </Button>
            </Link>

            <SearchCustomer />
            {/* <Link to="/searchCustomer">
                <button className='abutton'>Search customer</button>
            </Link> */}
        </div>
    )
}

export default Challenge2Home