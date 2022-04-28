import '../../../App.css';
import React from "react";

export default class TodoDetail extends React.Component {
  render() {
    return (
      <div className='todo-detail'>
        <div className='todo-detail-title'>
          <input type='text' className='form-control' placeholder='Title' />
        </div>
        <div className='todo-detail-date'>
          <label for="Date">Date:</label>
          <input type="date" id="date" name="Date" className='form-control' />
        </div>
        <div className='description'>
          <textarea className='form-control' placeholder='Description' />
        </div>
      </div>
    )
  }
}
