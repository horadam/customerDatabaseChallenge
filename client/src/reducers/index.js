const initialState = {
  customersFound: [],
  currentCustomer: {}

}

export default function (state = initialState, action) {
  switch(action.type) {

    case "FOUND_CUSTOMERS":
      return {...state, customersFound: action.payload}
    
    case "CURRENT_CUSTOMER":
      return {...state, currentCustomer: action.payload}

    default:
      return state
  }
}