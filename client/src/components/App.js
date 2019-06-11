import React from 'react'
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './Routes/Landing'
import Challenge1Home from './Routes/Challenge1Home'
import Challenge2Home from './Routes/Challenge2Home'
import Challenge3Home from './Routes/Challenge3Home'
import Challenge4Home from './Routes/Challenge4Home'
import NewCustomer from './Routes/NewCustomer'
import CustomerDataView from './Routes/CustomerDataView'
import CustomerDataEdit from './Routes/CustomerDataEdit'
import CustomerDataViewJSON from './Routes/CustomerDataViewJSON'

import CustomerDataViewUIUX from './Routes/CustomerDataViewUIUX'

const App = () => {
  
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />
            
            <Route path="/challenge1" exact component={Challenge1Home} />

            <Route path="/challenge2" exact component={Challenge2Home} />
            <Route path="/newCustomer" exact component={NewCustomer} />
            <Route path="/customer/:id" exact component={CustomerDataView} />
            <Route path="/customer/edit/:id" exact component={CustomerDataEdit} />

            <Route path="/challenge3" exact component={Challenge3Home} />
            <Route path="/customer/view/:id" exact component={CustomerDataViewJSON} />

            <Route path="/challenge4" exact component={Challenge4Home} />
            <Route path="/customerUIUX/view/:id" exact component={CustomerDataViewUIUX} />

            
          </Switch>
        </Router>
      </Provider>
    )
}

export default App
