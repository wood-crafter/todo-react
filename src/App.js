import './App.css';
import React from "react";
import Option from './Options';
import Month from './Month';
import Search from './Search';
import Calendar from './Calendar';
import Detail from './detail/Detail';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisYear: new Date().getFullYear(),
      thisMonth: new Date().getMonth(),
    };

    this.handlePreviousMonth = this.handlePreviousMonth.bind(this);
    this.handleNextMonth = this.handleNextMonth.bind(this);
  }

  handlePreviousMonth() {
    if(this.state.thisMonth === 0) return
    this.setState({ thisMonth: this.state.thisMonth - 1 })
  }

  handleNextMonth() {
    if(this.state.thisMonth === 11) return
    this.setState({ thisMonth: this.state.thisMonth + 1 })
  }

  render() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const weekdays = ["Mon", "Tue", "Wed", "Thus", "Fri", "Sat", "Sun"]
    const daysInMonth = new Date(this.state.thisYear, this.state.thisMonth + 1, 0).getDate();

    return (
      <div className="App">
        <div className='control'>
        <div className="btn-option"></div>
          <Month thisMonth={monthNames[this.state.thisMonth]} onPrevious={this.handlePreviousMonth} onNext={this.handleNextMonth} />
          <Search />
        </div>
        <div className='main-content'>
          <Option />
          <div className='content'>
            <Calendar weekdays={weekdays} daysInMonth={daysInMonth} class='calendar'/>
            <Detail class="detail"/>
          </div>
        </div>
      </div>
    )
  }
}
