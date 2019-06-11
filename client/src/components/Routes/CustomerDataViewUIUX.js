import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { getCurrentCustomerJSON } from '../../actions/actions2'
import HeaderBar from '../HeaderBar'
import { Icon, Table, Header, List } from 'semantic-ui-react'
import moment from 'moment'


const CustomerDataViewUIUX = (props) => {

    const CustomerId = props.match.params.id

    useEffect(() => {
        getCurrentCustomerJSON(CustomerId)
    },[CustomerId])

    const customer = useSelector(appstate => appstate.currentCustomer)

    return (
        <div className="wrapper">
            <HeaderBar />
            {/* <div className="customerProfileWrapper"> */}
                <div className="customerProfileCard">
                    <Header as='h2' icon textAlign='center'>
                        <Icon circular name='user'/>
                        <Header.Content>{customer.first_name + " " + customer.last_name}</Header.Content>
                    </Header>
                    <div>
                        <p><span>Email:</span> {customer.email}</p>
                        <p><span>Phone:</span> 123-123-1234</p>
                        <p><span>Phone (Mobile):</span> 123-123-9876</p>
                        <p><span>Since:</span> {moment(`${customer.created_at}`).format('MMMM YYYY')}</p>
                        <p><span>Location:</span> {customer.longitude}, {customer.latitude}</p>
                    </div>
                </div>
                <Header as='h3'>
                    <Header.Content>Interests</Header.Content>
                </Header>
                <List className="interestsList">
                    <List.Item icon='camera retro' content='Photography' />
                    <List.Item icon='cube' content='Speed Cubes' />
                    <List.Item icon='game' content='Fortnite'/>
                    <List.Item icon='film' content='Mother of Dragons' />
                </List>
                <Header as='h3'>
                    <Header.Content>Orders</Header.Content>
                </Header>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>789</Table.Cell>
                            <Table.Cell>{moment('2018-06-15T16:00:00Z').format('YYYY-MM-DD hh:mm')}</Table.Cell>
                            <Table.Cell>
                                <Icon name='barcode' />
                                Processing
                            </Table.Cell>
                            <Table.Cell>
                                <a href=""> <Icon name='eye'/> View </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>456</Table.Cell>
                            <Table.Cell>{moment('2018-06-10T15:55:00Z').format('YYYY-MM-DD hh:mm')}</Table.Cell>
                            <Table.Cell>
                                <Icon name='truck'/>
                                Shipped
                            </Table.Cell>
                            <Table.Cell>
                                <a href=""> <Icon name='eye'/> View </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row positive>
                            <Table.Cell>123</Table.Cell>
                            <Table.Cell>{moment('2018-06-01T16:00:00Z').format('YYYY-MM-DD hh:mm')}</Table.Cell>
                            <Table.Cell positive>
                            <Icon name='checkmark' />
                            Delivered 
                            </Table.Cell>
                            <Table.Cell>
                                <a href=""> <Icon name='eye'/> View </a>
                            </Table.Cell>
                        </Table.Row>
                    
                    </Table.Body>
                </Table>
            {/* </div> */}
        </div>
    )
}

export default CustomerDataViewUIUX