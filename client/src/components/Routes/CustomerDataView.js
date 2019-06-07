import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCurrentCustomer, removeCustomer } from '../../actions/actions'
import { Link } from 'react-router-dom'

const CustomerDataView = (props) => {

    const CustomerId = props.match.params.id

    useEffect(() => {
        getCurrentCustomer(CustomerId)
    },[CustomerId])

    const customer = props.currentCustomer

    function handleDelete(e) {
        e.preventDefault()
        removeCustomer(CustomerId)
        window.alert('customer removed from database')
        props.history.goBack()
        }

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
            <Link to= {"/customer/edit/" + customer.id}>
                <button className='abutton'>Edit customer data</button>
            </Link>
            <button onClick={handleDelete} className="button" >
                Remove Customer
            </button>
        </div>
    )
}





function mapStateToProps(appState) {
    return {
      currentCustomer: appState.currentCustomer
    }
  }
  
export default connect(mapStateToProps)(CustomerDataView)