import React, { Component } from 'react';
import Input from './Input.js';
import TextArea from './TextArea.js'

//TODO: create a styled submit button

export default class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      form: {}
    };
  }
  onEmailSubmit(data) {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json')

    const options = {
      method: 'POST',
      headers: headers,
      mode: 'no-cors',
      body: JSON.stringify(data)
    }

    const request = new Request('http://localhost:8080/contact', options);

    fetch(request)
    .then(response => {
      console.log('sent', response);
    })
  }
  handleChange(event) {
    this.setState({
      form: {
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
              this.onEmailSubmit(this.state.form);
            }
          }
        >
          <Input
            name='name'
            placeholder='Name...'
            value={this.state.form.name}
            onChange={() => this.handleChange}
            type='text'
            size='1em'
          />
          <br />
          <Input
            name='email'
            placeholder='Email...'
            value={this.state.form.email}
            onChange={() => this.handleChange}
            type='email'
            size='1em'
          />
          <br />
          <Input
            name='subject'
            placeholder='Subject...'
            value={this.state.form.subject}
            onChange={() => this.handleChange}
            type='text'
            size='1em'
          />
          <br />
          <TextArea
            name='message'
            placeholder='Message...'
            value={this.state.form.message}
            onChange={() => this.handleChange}
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
