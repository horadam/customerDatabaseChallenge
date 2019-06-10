import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getCurrentCustomer, removeCustomer } from '../../actions/actions'
import { Link } from 'react-router-dom'
import HeaderBar from '../HeaderBar'
import { Button, Header, Icon } from 'semantic-ui-react'


const CustomerDataView = (props) => {

    const CustomerId = props.match.params.id

    useEffect(() => {
        getCurrentCustomer(CustomerId)
    },[CustomerId])

    const customer = useSelector(appstate => appstate.currentCustomer)

    function handleDelete(e) {
        e.preventDefault()
        removeCustomer(CustomerId)
        window.alert('customer removed from database')
        props.history.goBack()
        }

    return (
        <div className="wrapper">
            <HeaderBar />

            <Header as='h2' textAlign='center'>
                <Icon circular name='address card'/>
                <Header.Content>{customer.first_name + " " + customer.last_name}</Header.Content>
            </Header>
        <div className="customerData">
            <p>
                <span> email: </span> {customer.email}
            </p>
            <p>
                <span> ip: </span> {customer.ip}
            </p>
            <p>
                <span> longitude: </span>{customer.longitude}
            </p>
            <p>
                <span> latitude: </span>{customer.latitude}
            </p>
        </div>
            <div id="customerViewButtons">
                <Link to= {"/customer/edit/" + customer.id}>
                    <Button primary className='abutton'>
                        Edit customer data
                    </Button>
                </Link>
                <Button primary onClick={handleDelete} className="button" >
                    Remove Customer
                </Button>
            </div>
        </div>
    )
}
  
export default CustomerDataView