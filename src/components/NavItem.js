import React, { Component } from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import "./NavItem.css"

class NavItem extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav">
            <Link to="/">
              <h3>SocialFit</h3>
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavItem
