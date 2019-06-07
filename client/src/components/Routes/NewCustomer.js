import React, { useState } from 'react'
import { addCustomer } from '../../actions/actions'
import moment from 'moment'


const NewCustomer = (props) => {

    const [email, changeEmail] = useState('')
    const [fname, changeFirstName] = useState('')
    const [lname, changeLastName] = useState('')
    const [ip, changeIP] = useState('')
    const [lat, changeLat] = useState('')
    const [long, changeLong] = useState('')

    const now = moment().format('YYYY-MM-DD hh:mm:ss')

    function handleSubmit(e) {
        e.preventDefault()
        addCustomer(email, fname, lname, ip, lat, long, now)
        window.alert('customer added to database')
        props.history.goBack()
    }

    return (
        <div>
            <h1>New Customer Input</h1>

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
                    Add customer
                </button>
            </form>
            
        </div>
    )
}

export default NewCustomer