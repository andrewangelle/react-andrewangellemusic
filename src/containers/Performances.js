import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import HeadingText from '../components/HeadingText.js';
import Body from '../components/Body.js';
import Content from '../components/Content.js';
import Navigation from '../components/Navigation/Navigation.js';
import LogoContent from '../components/Logo/LogoContent';

export default class Performances extends Component {
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
            Performances
          </HeadingText>

          <Content>
            Check back soon...
          </Content>
        </Body>
      </div>
    );
  }
}
