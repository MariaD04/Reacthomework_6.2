import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props);
      this.textRef = React.createRef();
    }
  
    render() {
      const { onSubmit: handleFormSubmit } = this.props;
      return (
        <form
          className='form'
          onSubmit={(event) => {
            event.preventDefault();
            handleFormSubmit({id: 0, content: this.textRef.current.value});
            this.textRef.current.value = "";
          }}
        >
          <div className='form-control'>
            <label className='form-label' htmlFor="text">New Note</label>
            <textarea className='form-textarea' type="text" id='text' name='text' ref={this.textRef} />
          </div>
          <button className='form-button' type='submit'></button>
        </form>
      )
    }
}
