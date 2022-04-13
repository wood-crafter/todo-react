import './App.css';
import React from "react";

export default class Month extends React.Component {
  render() {
    return (
      <div className="Month">
        <button className='previous' onClick={this.props.onPrevious} >Previous</button>
        {this.props.thisMonth}
        <button className='next' onClick={this.props.onNext}>Next</button>
      </div>
    )
  }
}
