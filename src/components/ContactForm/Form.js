import React, { Component } from 'react';
import Input from './Input.js';
import TextArea from './TextArea.js'

export default class EmailForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      form: {}
    };
  }
  handleChange(event) {
    this.setState({
      form:{
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }
  render() {
    return (
      <div>
        <form
          onSubmit={
            event => {
              event.preventDefault();
              this.props.onEmailSubmit(this.state.form);
            }
          }
        >
          <Input
            name='name'
            placeholder='Name...'
            value={this.state.form.name}
            onChange={this.handleChange.bind(this)}
            type='text'
            size='1em'
          />
          <br />
          <Input
            name='email'
            placeholder='Email...'
            value={this.state.form.email}
            onChange={this.handleChange.bind(this)}
            type='email'
            size='1em'
          />
          <br />
          <Input
            name='subject'
            placeholder='Subject...'
            value={this.state.form.subject}
            onChange={this.handleChange.bind(this)}
            type='text'
            size='1em'
          />
          <br />
          <TextArea
            name='message'
            placeholder='Message...'
            value={this.state.form.message}
            onChange={this.handleChange.bind(this)}
            type='text'
            size='1em'
          />
          <br />
          <Input
            type='submit'
            value='submit'
            size='1em'
          />
        </form>
      </div>
    );
  }
}
