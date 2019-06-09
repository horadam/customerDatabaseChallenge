import customers from '../customersChallenge3/customers.json'
import * as Fuse from 'fuse.js'
import store from '../store'



export function searchCustomerJSON(customerSearched) {

    const options = {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 0,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "first_name",
          "last_name",
          "email",
          "ip"
        ]
      };

      const fuse = new Fuse(customers, options);
      const result = fuse.search(customerSearched);

      store.dispatch({
        type: 'FOUND_CUSTOMERS',
        payload: result
    })
  }

  export function getCurrentCustomerJSON(customerSearched) {

    const customer = customers.filter(customer => customer.id === Number(customerSearched))[0]

      store.dispatch({
        type: 'CURRENT_CUSTOMER',
        payload: customer
    })
  }

