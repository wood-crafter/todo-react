import '../../../App.css';
import TodoDetail from './Todo-detail';
import React from "react";

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEvent: this.props.currentEvent
    };
  }

  render() {
    const dailyTimeMilestone = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
      12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    const currentDayTodos = this.props.currentDayTodos
    const currentDayTodoKeys = Array.from(currentDayTodos.keys())
    const currentDayTimeMilestone = currentDayTodoKeys.map(e => new Date(e).getHours())

    return (
      <div className="Schedule">
        <div className='timer'>
          <div className='schedule-time'>
            <div>Time</div>
            {dailyTimeMilestone.map((time, index) => {
              const todoIndex = currentDayTimeMilestone.indexOf(index)

              if (todoIndex >= 0) {
                return (
                  <div key={time} className='time-milestone' onDoubleClick={() => {
                    this.props.onEventClicked(time, currentDayTodos.get(currentDayTodoKeys[todoIndex]))
                  }} >{time}</div>
                )
              }

              return (
                <div key={time} className='time-milestone' onDoubleClick={() => {
                  this.props.onEventClicked(time)
                }} >{time}</div>
              )
            })}
          </div>

          <div className='schedule-event'>
            <div>Event</div>
            {dailyTimeMilestone.map((time, index) => {
              const todoIndex = currentDayTimeMilestone.indexOf(index)
              if (todoIndex >= 0) {
                return (
                  <div key={time} className='time-milestone' onDoubleClick={() => {
                    this.props.onEventDoubleClicked(time, currentDayTodos.get(currentDayTodoKeys[todoIndex]))
                  }} >{currentDayTodos.get(currentDayTodoKeys[todoIndex]).title}</div>
                )
              }
              return (
                <div key={time} className='time-milestone' onDoubleClick={() => {
                  this.props.onEventDoubleClicked(time)
                }} >{time}</div>
              )
            })}
          </div>
        </div>

        <TodoDetail onApply={this.props.onApply} currentMileStone={this.props.currentMileStone} currentEvent={this.state.currentEvent} />
      </div>
    )
  }
}
