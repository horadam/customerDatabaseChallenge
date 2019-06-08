import customers from '../customersChallenge3/customers.json'
import * as Fuse from 'fuse.js'
import store from '../store'



export function searchCustomer2(customerSearched) {

    var options = {
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

      var fuse = new Fuse(customers, options); // "list" is the item array
      var result = fuse.search(customerSearched);

      console.log(result)

      store.dispatch({
        type: 'FOUND_CUSTOMERS',
        payload: result
    })
  }