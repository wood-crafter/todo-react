import './App.css';
import React from "react";
import Option from './componant/content/Options';
import Month from './componant/navbar/Month';
import Search from './componant/navbar/Search';
import Detail from './detail/Detail';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      todos: new Map().set(new Date(2022, 4, 26, 9, 0, 0, 0).getTime(), {
        title: 'This is first todo',
        description: 'This is description content',
        processing: 10,
      }),
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
          <Month month={this.state.month} onPrevious={this.handlePreviousMonth} onNext={this.handleNextMonth} daysInMonth={daysInMonth} todos={this.state.todos}/>
          <Search />
        </div>
        <div className='main-content'>
          <Option />
          <div className='content'>
            <Detail className="detail"/>
          </div>
        </div>
      </div>
    )
  }
}
