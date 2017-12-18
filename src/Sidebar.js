import React, { Component } from "react"
import { DatePicker } from "react-datepicker"

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = ({
      date: new Date
    })

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    console.log(value)
  }

  render() {
    return (
      <DatePicker
        inline
        selected={this.state.date}
        onChange {this.handleChange}
      />
    )
  }
}

export default Sidebar
