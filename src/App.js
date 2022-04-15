import './App.css';
import React from "react";
import Option from './Options';
import Month from './Month';
import Search from './Search';
import Detail from './detail/Detail';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
    };

    this.handlePreviousMonth = this.handlePreviousMonth.bind(this);
    this.handleNextMonth = this.handleNextMonth.bind(this);
  }

  handlePreviousMonth() {
    if(this.state.month === 0) return
    this.setState({ month: this.state.month - 1 })
  }

  handleNextMonth() {
    if(this.state.month === 11) return
    this.setState({ month: this.state.month + 1 })
  }

  render() {
    const daysInMonth = new Date(this.state.year, this.state.month + 1, 0).getDate();

    return (
      <div className="App">
        <div className='control'>
        <div className="btn-option"></div>
          <Month month={this.state.month} onPrevious={this.handlePreviousMonth} onNext={this.handleNextMonth} daysInMonth={daysInMonth} />
          <Search />
        </div>
        <div className='main-content'>
          <Option />
          <div className='content'>
            <Detail class="detail"/>
          </div>
        </div>
      </div>
    )
  }
}
