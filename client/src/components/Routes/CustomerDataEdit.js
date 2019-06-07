import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCurrentCustomer, editCustomer } from '../../actions/actions'
import moment from 'moment'

const CustomerDataEdit = (props) => {

    const CustomerId = props.match.params.id

    useEffect(() => {
        getCurrentCustomer(CustomerId)
    },[CustomerId])

    const customer = props.currentCustomer

    const [email, changeEmail] = useState(customer.email)
    const [fname, changeFirstName] = useState(customer.first_name)
    const [lname, changeLastName] = useState(customer.last_name)
    const [ip, changeIP] = useState(customer.ip)
    const [lat, changeLat] = useState(customer.longitude)
    const [long, changeLong] = useState(customer.latitude)

    const now = moment().format('YYYY-MM-DD hh:mm:ss')

    function handleSubmit(e) {
        e.preventDefault()
        editCustomer(email, fname, lname, ip, lat, long, now, CustomerId)
        props.history.goBack()
    }

   

    return (
        <div>
            <h1>Edit {customer.first_name + " " + customer.last_name}'s Data</h1>

            <form className="customerDataInputForm" onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email:
                </label>
                <input
                    type="email"
                    name="email"
                    className="formInput"
                    onChange= {e => changeEmail(e.target.value)}
                    value=  {email}
                />

                <label htmlFor="fname">
                    First Name:
                </label>
                <input
                    type="text"
                    name="fname"
                    className="formInput"
                    onChange= {e => changeFirstName(e.target.value)}
                    value=  {fname}
                />

                <label htmlFor="lname">
                    Last Name:
                </label>
                <input
                    type="text"
                    name="fname"
                    className="formInput"
                    onChange= {e => changeLastName(e.target.value)}
                    value=  {lname}
                />

                <label htmlFor="ip">
                    IP Adress:
                </label>
                <input
                    type="text"
                    name="ip"
                    className="formInput"
                    onChange= {e => changeIP(e.target.value)}
                    value=  {ip}
                />

                <label htmlFor="lat">
                    Latitude:
                </label>
                <input
                    type="text"
                    name="lat"
                    className="formInput"
                    onChange= {e => changeLat(e.target.value)}
                    value=  {lat}
                />

                <label htmlFor="lat">
                    Longitude:
                </label>
                <input
                    type="text"
                    name="long"
                    className="formInput"
                    onChange= {e => changeLong(e.target.value)}
                    value=  {long}
                />

                <button type="submit" className="button" >
                    Save changes
                </button>
            </form>

        </div>
    )
}





function mapStateToProps(appState) {
    return {
      currentCustomer: appState.currentCustomer
    }
  }
  
export default connect(mapStateToProps)(CustomerDataEdit)