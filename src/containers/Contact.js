import React, { Component } from 'react';
import HeadingText from '../components/HeadingText.js';
import Body from '../components/Body.js';
import Navigation from '../components/Navigation/Navigation.js';
import Form from '../components/ContactForm/Form.js'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Body>
          <HeadingText>
            Contact
          </HeadingText>
          <Form  />
        </Body>
      </div>
    );
  }
}
