import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

const NavItem = ({}) => {
  const navBarStyle = {
    position: "sticky",
    top: "0",
    zIndex: "5"
  }
  const navStyle = {
    margin: "20px",
    background: "rgb(151, 232, 143)",
    borderBottom: "3px solid black",
    width: "auto",
    height: "75px",
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
  const liRightStyle = {
    display: "block",
    textAlign: "center",
    fontSize: "30px",
    padding: "8px",
    float: "right",
    borderLeft: "1px solid #bbb"
  }
  const pStyle = {
    margin: "0",
  }

  return (
    <div style={navBarStyle}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <p style={pStyle}>SocialFit</p>
          </li>
          <li style={liStyle}>
            <Link to="/home">Home</Link>
          </li>
          <li style={liStyle}>
            <Link to="/new-event">New Event</Link>
          </li>
          <li style={liRightStyle}>
            <Link to="/join">Join Event</Link>
          </li>
        </ul>
      </nav>
      <Route path="/createEvent" />
    </div>
  )
}

export default NavItem
