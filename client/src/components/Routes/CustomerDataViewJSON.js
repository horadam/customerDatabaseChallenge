import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCurrentCustomerJSON } from '../../actions/actions2'
import HeaderBar from '../HeaderBar'
import { Button, Header, Icon } from 'semantic-ui-react'


const CustomerDataView = (props) => {

    const CustomerId = props.match.params.id

    useEffect(() => {
        getCurrentCustomerJSON(CustomerId)
    },[CustomerId])

    const customer = props.currentCustomer

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





function mapStateToProps(appState) {
    return {
      currentCustomer: appState.currentCustomer
    }
  }
  
export default connect(mapStateToProps)(CustomerDataView)