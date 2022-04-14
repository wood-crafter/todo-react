import '../App.css';
import React from "react";

export default class Schedule extends React.Component {
  render() {
    return (
      <div className="Schedule">
        <div className='schedule-time'>Time</div>
        <div className='schedule-event'>Event</div>
        <div className='schedule-processing'>Processing</div>
        <div className='schedule-time'>Note</div>
      </div>
    )
  }
}
