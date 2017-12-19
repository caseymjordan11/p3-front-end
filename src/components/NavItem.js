import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

const NavItem = ({}) => {
  const navStyle = {
    margin: "20px",
    background: "rgb(143, 252, 118)",
    borderBottom: "3px solid black",
    width: "auto",
    height: "75px"
  }
  const ulStyle = {
    listStyleType: "none",
    margin: "0",
    padding: "0",
    overflow: "hidden"
  }
  const liStyle = {
    display: "block",
    float: "left",
    textAlign: "center",
    fontSize: "30px",
    padding: "8px",
    borderRight: "1px solid #bbb"
  }

  return (
    <div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <p>SocialFit</p>
          </li>
          <li style={liStyle}>
            <Link to="/home">Home</Link>
          </li>
          <li style={liStyle}>
            <Link to="/createEvent">CreateEvent</Link>
          </li>
        </ul>
      </nav>
      <Route path="/createEvent" />
    </div>
  )
}

export default NavItem
