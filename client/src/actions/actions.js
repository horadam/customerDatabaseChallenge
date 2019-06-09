import store from '../store'
import axios from 'axios'

export function addCustomer(email, fname, lname, ip, lat, long, timeStamp) {
    return axios.post('/api/customers/new', {
        email, fname, lname, ip, lat, long, timeStamp
    })
}

export function editCustomer(email, fname, lname, ip, lat, long, timeStamp, id) {
    return axios.put('/api/customers/edit', {
        email, fname, lname, ip, lat, long, timeStamp, id
    })
}

export function removeCustomer(id) {
    return axios.delete(`/api/customers/remove?id=${id}`)
}

export function searchCustomer(customerSearched) {
    axios.get(`/api/customers/search?customerSearched=${customerSearched}`).then(resp => {
        store.dispatch({
            type: 'FOUND_CUSTOMERS',
            payload: resp.data.results
        })
    })
  }

  export function getCurrentCustomer(CustomerId) {
    axios.get(`/api/customers/current?Id=${CustomerId}`).then(resp => {
        store.dispatch({
            type: 'CURRENT_CUSTOMER',
            payload: resp.data.results[0]
        })
    })
  }

  //FILE UPLOAD
  export function fileUpload(file1, file2) {

    let formdata = new FormData()
        formdata.append('datafile', file1, 'datafile.csv')
        formdata.append('datafile', file2, 'mapfile.csv')

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    return axios.post('/api/files', formdata, config)
}
