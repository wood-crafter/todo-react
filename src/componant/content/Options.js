import '../../App.css';
import React from "react";

export default class Option extends React.Component {
  render() {
    return (
      <div className="Option">
        <div className='visibility'>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id='username' />
            <label className="form-check-label" htmlFor="username">
              This is first checkbox
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" id='event' />
            <label className="form-check-label" htmlFor="event">
              Event
            </label>
          </div>
        </div>
      </div>
    )
  }
}
