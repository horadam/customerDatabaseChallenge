import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './Routes/Landing'
import Challenge1Home from './Routes/Challenge1Home'
import Challenge2Home from './Routes/Challenge2Home'
import NewCustomer from './Routes/NewCustomer'
import SearchCustomer from './Routes/SearchCustomer'
import CustomerDataView from './Routes/CustomerDataView'
import CustomerDataEdit from './Routes/CustomerDataEdit'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/challenge1" exact component={Challenge1Home} />
            <Route path="/challenge2" exact component={Challenge2Home} />
            <Route path="/newCustomer" exact component={NewCustomer} />
            <Route path="/searchCustomer" exact component={SearchCustomer} />
            <Route path="/customer/:id" exact component={CustomerDataView} />
            <Route path="/customer/edit/:id" exact component={CustomerDataEdit} />
            
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
