import './App.css';
import React from "react";
import Calendar from './Calendar';

export default class Month extends React.Component {
  render() {
    const weekdays = ["Mon", "Tue", "Wed", "Thus", "Fri", "Sat", "Sun"]
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
      <div className="Month">
        <button className='previous round' onClick={this.props.onPrevious} >{'<'}</button>
        <div className='month-name'>{monthNames[this.props.month]}</div>
        <button className='next round' onClick={this.props.onNext}>{'>'}</button>
        <Calendar weekdays={weekdays} daysInMonth={this.props.daysInMonth} class='calendar'/>
      </div>
    )
  }
}
