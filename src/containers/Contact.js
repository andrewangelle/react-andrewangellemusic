import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import HeadingText from '../components/HeadingText.js';
import Body from '../components/Body.js';
import Navigation from '../components/Navigation/Navigation.js';
import EmailForm from '../components/ContactForm/Form.js'
import LogoContent from '../components/Logo/LogoContent';

export default class Contact extends Component {
  onEmailSubmit(data) {
    fetch('http://localhost:8080/contact', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => {
      console.log('sent', response);
    });
  }
  render() {
    return (
      <div>
        <LogoContent />
        <Flexbox
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Flexbox>
            <Navigation />
          </Flexbox>
        </Flexbox>
        <Body>
          <HeadingText>
            Contact
          </HeadingText>
          <EmailForm onEmailSubmit={this.onEmailSubmit} />
        </Body>
      </div>
    );
  }
}
