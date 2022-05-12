import '../../../App.css';
import React from "react";

export default class TodoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.currentEvent.title,
      description: this.props.currentEvent.description,
    };
  }
  onTitleChange(e) {
    this.setState({ title: e.target.value })
  }
  onDescriptionChange(e) {
    this.setState({ description: e.target.value })
  }
  render() {
    return (
      <div className='todo-detail'>
        <div className='todo-detail-date'>
          <button onClick={() => {
            this.props.onApply()
          }}>Apply</button>
        </div>
        <div className='todo-detail-title'>
          <input type='text' className='form-control' placeholder='Title' value={this.state.title} onTitleChange={this.handleChange}/>
        </div>
        <div className='description'>
          <textarea className='form-control' placeholder='Description' value={this.state.description} onDescriptionChange={this.handleChange}/>
        </div>
      </div>
    )
  }
}
