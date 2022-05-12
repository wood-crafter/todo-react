import './App.css';
import React from "react";
import Option from './componant/content/Options';
import Month from './componant/navbar/Month';
import Search from './componant/navbar/Search';
import Schedule from './componant/content/detail/Schedule';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      day: null,
      todos: new Map().set(new Date(2022, 4, 26, 9, 0, 0, 0).getTime(), {
        title: 'This is first todo',
        description: 'This is description content',
      }),
      currentDayTodos: new Map(),
      currentMileStone: '',
      currentEvent: {
        title: '',
        description: '',
      },
    };

    this.handlePreviousMonth = this.handlePreviousMonth.bind(this);
    this.handleNextMonth = this.handleNextMonth.bind(this);
    this.makeTodoDetailHandler = this.makeTodoDetailHandler.bind(this)
    this.handleDayInMonthClicked = this.handleDayInMonthClicked.bind(this)
    this.handleEventDoubleClick = this.handleEventDoubleClick.bind(this)
  }

  handlePreviousMonth() {
    if (this.state.month === 0) return
    this.setState({ month: this.state.month - 1 })
  }

  handleNextMonth() {
    if (this.state.month === 11) return
    this.setState({ month: this.state.month + 1 })
  }

  makeTodoDetailHandler(time, title, date, description) {
    if (!time) {
      this.addTodoParamsRequireErrorPopup('time')
      return
    }
    if (!title) {
      this.addTodoParamsRequireErrorPopup('title')
      return
    }
    if (!date) {
      this.addTodoParamsRequireErrorPopup('date')
      return
    }
    // check existed time-todos
    const oldTodos = this.state.todos
    const todoDate = new Date(date)
    todoDate.setHours(todoDate.getHours())

    this.state.setState({
      todos: oldTodos.set(todoDate.getTime(), {
        title: title,
        description: description,
      })
    })
  }

  handleEventDoubleClick(milestone, currentEvent) {
    this.setState({
      currentMileStone: milestone,
      currentEvent: currentEvent
    })
  }

  handleDayInMonthClicked(date) {
    const currentDayTodos = this.state.todos
    currentDayTodos.forEach((_, key) => {
      if ((key > new Date(this.state.year, this.state.month, date, 23, 0, 0, 0).getTime())) {
        currentDayTodos.delete(key)
      }
      if ((key < new Date(this.state.year, this.state.month, date, 0, 0, 0, 0).getTime())) {
        currentDayTodos.delete(key)
      }
    })
    this.setState({
      currentDayTodos: currentDayTodos,
      day: date,
    })
  }

  addTodoParamsRequireErrorPopup(type) {
    console.info('No time input:', type)
  }

  render() {
    const daysInMonth = new Date(this.state.year, this.state.month + 1, 0).getDate();

    return (
      <div className="App">
        <div className='control'>
          <div className="btn-option"></div>
          <Month month={this.state.month} handleDayInMonthClick={this.handleDayInMonthClicked} onPrevious={this.handlePreviousMonth} onNext={this.handleNextMonth} daysInMonth={daysInMonth} todos={this.state.todos} />
          <Search />
        </div>
        <div className='main-content'>
          <Option />
          <div className='content'>
            <Schedule currentMileStone={this.state.currentMileStone} currentEvent={this.state.currentEvent} onEventDoubleClicked={this.handleEventDoubleClick} onApply={this.makeTodoDetailHandler} className="detail" currentDayTodos={this.state.currentDayTodos} month={this.state.month} year={this.state.year} date={this.state.date}/>
          </div>
        </div>
      </div>
    )
  }
}
