import './App.css';
import React from "react";

export default class Calendar extends React.Component {
  render() {
    const weekdays = this.props.weekdays;
    const daysInMonth = Array.from(Array(this.props.daysInMonth).keys());
    return (
      <div className="Calendar">
        <div className="weekdays">
          {weekdays.map((weekday) => {
            return (
              <div className='weekday'>
                {weekday}
              </div>
            )
          })}
        </div>

        <div className='days-in-month'>
        {daysInMonth.map((dayInMonth) => {
            return (
              <div className='day-in-month'>
                {dayInMonth + 1}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
