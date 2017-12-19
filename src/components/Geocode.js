import React, { Component } from "react"


class Geocode extends Component {
  constructor() {
    super()
    this.state = {
      address: "",
      latlng: []
    }
  }

  handleInput(e) {
  this.setState({
    searchSymbol: e.target.value
  })
}


render() {
  return(
    <div>
      <h2>Search:</h2>
      <form onSubmit={(e) => this.handleSubmit(e)}>
      <p>Search Stock</p>
      <p>
        <label>Text:</label>
        <textarea onChange={(e) => this.handleInput(e)}></textarea>
      </p>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

}


export default Geocode
