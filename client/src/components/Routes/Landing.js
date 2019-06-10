import React from 'react'
import { Link } from 'react-router-dom'
import HeaderBar from '../HeaderBar'
import { Button } from 'semantic-ui-react'


const Landing = (props) => {

    return (
        <div>
        <HeaderBar/>
        <div className="landingContainer">
            
            <Link to="/challenge1">
                <Button primary >
                    ETL Engineering
                </Button>
            </Link>
            

            <Link to="/challenge2">
                <Button primary>Web Service Engineering</Button>
            </Link>

            <Link to="/challenge3">
                <Button primary >JS Engineering</Button>
            </Link>

            <Link to="/challenge4">
                <Button primary >UI/UX Design</Button>
            </Link>
        </div>
        </div>
    )
}

export default Landing