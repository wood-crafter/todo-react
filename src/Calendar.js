import './App.css';
import React from "react";

export default class Calendar extends React.Component {
  render() {
    const weekdays = this.props.weekdays;
    const daysInMonth = Array.from(Array(this.props.daysInMonth).keys());
    const gridArray = Array.from(Array(35).keys());
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
          {gridArray.map((dayInMonth) => {
            if (daysInMonth.includes(dayInMonth)) {
              return (
                <div className='day-in-month'>
                  {dayInMonth + 1}
                </div>
              )
            } else {
              return (
                <div className='day-in-month'>
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  }
}
