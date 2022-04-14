import './App.css';
import React from "react";

export default class Month extends React.Component {
  render() {
    return (
      <div className="Month">
        <button className='previous round' onClick={this.props.onPrevious} >&#8249;</button>
        <div className='month-name'>{this.props.thisMonth}</div>
        <button className='next round' onClick={this.props.onNext}>&#8250;</button>
      </div>
    )
  }
}
