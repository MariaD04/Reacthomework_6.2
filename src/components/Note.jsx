import React, { Component } from 'react'

export default class Note extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div className='note'>
        <p className='note-text'>{this.props.content}</p>
        <a href="#" className='note-delete' onClick={() => this.props.onDeleteClick(this.props.id)}>✘</a>
      </div>
    )
  }
}
