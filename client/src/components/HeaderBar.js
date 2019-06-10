import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'


const HeaderBar = (props) => {

  

    return (

      <div className="headerBar">
          <div id="headerText">g4 challenge</div>
          <img className='logo' src={logo} alt="" />
      </div>
    )
  
}

export default HeaderBar