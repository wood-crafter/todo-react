import '../App.css';
import React from "react";

export default class Schedule extends React.Component {
  render() {
    const dailyTimeMilestone = ['0 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM',
      '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM']
    return (
      <div className="Schedule">
        <div className='schedule-time'>
          <div>Time</div>
          {dailyTimeMilestone.map((time) => {
            return (
              <div key={time} className='time-milestone' >{time}</div>
            )
          })}
        </div>

        <div className='schedule-event'>
          <div>Event</div>
          {dailyTimeMilestone.map((time) => {
            return (
              <div key={time} className='time-milestone' >{time}</div>
            )
          })}
        </div>
      </div>
    )
  }
}
