import '../../../App.css';
import TodoDetail from './Todo-detail';
import React from "react";

export default class Schedule extends React.Component {
  render() {
    const dailyTimeMilestone = ['0 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM',
      '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM']
    const currentDayTodos = this.props.currentDayTodos
    console.info(currentDayTodos)
    const currentDayTodoKeys = Array.from(currentDayTodos.keys())
    const currentDayTimeMilestone = currentDayTodoKeys.map(e => new Date(e).getHours())

    return (
      <div className="Schedule">
        <div className='timer'>
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
            {dailyTimeMilestone.map((time, index) => {
              const todoIndex = currentDayTimeMilestone.indexOf(index)
              if(todoIndex >= 0) {
                return (
                  <div key={time} className='time-milestone' >{currentDayTodos.get(currentDayTodoKeys[todoIndex]).title}</div>
                )
              }
              return (
                <div key={time} className='time-milestone' >{time}</div>
              )
            })}
          </div>
        </div>

        <TodoDetail onAdd={() => {
          this.props.makeTodoDetailHandler()
        }}
          onUpdate={() => {
            this.props.makeTodoDetailHandler()
          }} />
      </div>
    )
  }
}
