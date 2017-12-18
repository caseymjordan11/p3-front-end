import React, {Component} from 'react'

export default class CreateEvent extends Component {

  handleSubmit(evt) {
    evt.preventDeafult()
  }

  render() {
    return (
      <div>
        <form onsubmit={this.handleSubmit}>
          <label>
            EventName:
            <input type="text" name="eventname" />
          </label>
          <br></br>
          <label>
            EventDescription:
            <input type="textarea" name="eventdescription" />
          </label>
          <br></br>
          <label>
            Start:
            <input type="text" name="startTime" />
          </label>
          <br></br>
          <label>
            End:
            <input type="text" name="endTime" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
