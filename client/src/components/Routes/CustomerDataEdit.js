import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import HeaderBar from '../HeaderBar'
import { getCurrentCustomer, editCustomer } from '../../actions/actions'
import moment from 'moment'
import { Button, Header, Icon, Form } from 'semantic-ui-react'

const CustomerDataEdit = (props) => {

    const CustomerId = props.match.params.id

    useEffect(() => {
        getCurrentCustomer(CustomerId)
    },[CustomerId])

    const customer = useSelector(appstate => appstate.currentCustomer)

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
        <div className="wrapper">
            <HeaderBar />

            <Header as='h2' textAlign='center'>
                <Icon name='address card'/>
                <Header.Content>Edit {customer.first_name + " " + customer.last_name}'s Data</Header.Content>
            </Header>

            <Form className="customerDataInputForm" onSubmit={handleSubmit}>
                <Form.Group widths="equal">

                    <Form.Input
                        fluid label='Email'
                        placeholder="john.doe@email.com"
                        margin="normal"
                        variant="outlined"
                        inputprops={{ 'aria-label': 'bare' }}
                        type="email"
                        name="email"
                        onChange= {e => changeEmail(e.target.value)}
                        value=  {email}
                    />


                    <Form.Input
                        fluid label='First Name'
                        type="text"
                        name="fname"
                        placeholder="John"
                        onChange= {e => changeFirstName(e.target.value)}
                        value=  {fname}
                    />

                    <Form.Input
                        fluid label="Last Name"
                        type="text"
                        name="fname"
                        className="forminput"
                        placeholder="Doe"
                        onChange= {e => changeLastName(e.target.value)}
                        value=  {lname}
                    />
                </Form.Group>

                <Form.Group widths="equal">
                    <Form.Input
                        fluid label="IP Address"
                        type="text"
                        name="ip"
                        className="forminput"
                        placeholder="12.13.14.15"
                        onChange= {e => changeIP(e.target.value)}
                        value=  {ip}
                    />

                    <Form.Input
                        fluid label="Latitude"
                        type="text"
                        name="lat"
                        className="forminput"
                        placeholder="55.667788"
                        onChange= {e => changeLat(e.target.value)}
                        value=  {lat}
                    />

                    <Form.Input
                        fluid label="Longitude"
                        type="text"
                        name="long"
                        className="forminput"
                        placeholder="55.667788"
                        onChange= {e => changeLong(e.target.value)}
                        value=  {long}
                    />
                    </Form.Group>

                    <Button primary type="submit" className="button">
                        Edit Data
                    </Button>
            </Form>

        </div>
    )
}

  
export default CustomerDataEdit