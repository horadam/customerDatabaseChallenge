import React, { useState } from 'react'
import HeaderBar from '../HeaderBar'
import { addCustomer } from '../../actions/actions'
import moment from 'moment'
import { Button, Header, Icon, Form } from 'semantic-ui-react'

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
        <div class="wrapper">
            <HeaderBar />

            <Header as='h2' textAlign='center'>
                <Icon name='user'/>
                <Header.Content>New Customer Data Input</Header.Content>
            </Header>

            <Form className="formContainer" onSubmit={handleSubmit}>
                
            <Form.Group widths="equal">

                <Form.Input
                    fluid label='Email'
                    placeholder="john.doe@email.com"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ 'aria-label': 'bare' }}
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

                <Button type="submit" className="button" color="primary" >
                    Add Customer
                </Button>
            </Form>
            
        </div>
    )
}

export default NewCustomer