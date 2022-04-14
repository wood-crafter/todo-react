import './App.css';
import React from "react";

export default class Month extends React.Component {
  render() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
      <div className="Month">
        <button className='previous round' onClick={this.props.onPrevious} >{'<'}</button>
        <div className='month-name'>{monthNames[this.props.month]}</div>
        <button className='next round' onClick={this.props.onNext}>{'>'}</button>
      </div>
    )
  }
}
