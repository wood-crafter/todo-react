import './App.css';
import React from "react";

export default class Option extends React.Component {
  render() {
    return (
      <div className="Option">
        <div className='visibility'>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id='username' />
            <label class="form-check-label" for="username">
              This is first checkbox
            </label>
          </div>
        </div>
      </div>
    )
  }
}
