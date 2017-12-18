import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'


const NavItem = ({ }) => {

  const navStyle = {
    margin: '20px',
    padding: '15px',
    background: 'rgb(0, 200, 30)',
    width: 'auto',
    height: '75px',
    display: 'flex',
    flexDirection: 'row'
  }


  return (
    <div>
      <nav style={navStyle}>
        <Link to="home">Logo</Link>
        <h1>SocialFit</h1>
        
      </nav>
    </div>
  )
}

export default NavItem
