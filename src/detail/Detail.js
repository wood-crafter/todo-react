import '../App.css';
import React from "react";
import Schedule from './Schedule';
import TodoDetail from './TodoDetail';

export default class Detail extends React.Component {
  render() {
    return (
      <div className="Detail">
        <Schedule />
        <TodoDetail />
      </div>
    )
  }
}
