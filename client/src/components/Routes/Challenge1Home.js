import React, { useState } from 'react'
import { fileUpload } from '../../actions/actions'
import HeaderBar from '../HeaderBar'
import { Input, Button, Form, Header, Icon } from 'semantic-ui-react'



const Challenge1Home = () => {

    const [dataFile, changeDataFile] = useState({})
    const [mapFile, changeMapFile] = useState({})

    function handleSubmit (e) {
        e.preventDefault()
        
        fileUpload(dataFile, mapFile).then(resp => {
        }).catch(err => {
        })
    }

    return (

        <div className="wrapper">
            <HeaderBar/>
    
            <Header as='h2' textAlign='center'>
                <Icon name='file alternate'/>
                <Header.Content>Import Customer Data Sheets</Header.Content>
            </Header>
        
           
            <Form className="dataForm" onSubmit={handleSubmit}>
            <Form.Field>
                <Input
                    label=".csv file"
                    type="file"
                    name="datafile"
                    onChange= {e => changeDataFile(e.target.files[0])}>
                </Input>
            </Form.Field>
            <Form.Field>
                <Input
                    label=".map file"
                    type="file"
                    name="data"
                    onChange= {e => changeMapFile(e.target.files[0])}>
                </Input>
            </Form.Field>
            <Button primary id="Submit" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Challenge1Home