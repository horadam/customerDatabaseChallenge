import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCurrentCustomerJSON } from '../../actions/actions2'


const CustomerDataView = (props) => {

    const CustomerId = props.match.params.id

    useEffect(() => {
        getCurrentCustomerJSON(CustomerId)
    },[CustomerId])

    const customer = props.currentCustomer

    return (
        <div>
            <h1>
                {customer.first_name + " " + customer.last_name}
            </h1>
            <p>
                email: {customer.email}
            </p>
            <p>
                ip: {customer.ip}
            </p>
            <p>
                longitude: {customer.longitude}
            </p>
            <p>
                latitude: {customer.latitude}
            </p>
        </div>
    )
}





function mapStateToProps(appState) {
    return {
      currentCustomer: appState.currentCustomer
    }
  }
  
export default connect(mapStateToProps)(CustomerDataView)