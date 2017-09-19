import React, { Component } from 'react';
import HeadingText from '../components/HeadingText.js';
import Body from '../components/Body.js';
import Navigation from '../components/Navigation/Navigation.js';

export default class Performances extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Body>
          <HeadingText>
            Performances
          </HeadingText>
        </Body>
      </div>
    );
  }
}
