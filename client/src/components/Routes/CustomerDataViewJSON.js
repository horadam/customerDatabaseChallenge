import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getCurrentCustomerJSON } from '../../actions/actions2'
import HeaderBar from '../HeaderBar'
import { Header, Icon } from 'semantic-ui-react'


const CustomerDataView = (props) => {

    const CustomerId = props.match.params.id

    useEffect(() => {
        getCurrentCustomerJSON(CustomerId)
    },[CustomerId])

    const customer = useSelector(appstate => appstate.currentCustomer)

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
        </div>
    )
}
  
export default CustomerDataView