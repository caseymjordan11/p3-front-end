import React, {Component} from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import './NavItem.css'

class NavItem extends Component{
render(){
  return (
    <div>
      <nav>
        <div class="nav">
            <Link to="/home">Home</Link>
            <p>SocialFit</p>
            <Link to="/new-event">New Event</Link>
        </div>
      </nav>
      <Route path="/createEvent"/>
    </div>
  )
}
}

export default NavItem
