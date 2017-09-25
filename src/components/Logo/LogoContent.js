import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import LogoContainer from './LogoContainer';
import LogoText from './LogoText';

export default class LogoContent extends Component {
  render() {
    return (
      <LogoContainer content>
        <Flexbox>
          <LogoText>
            Andrew Angelle
          </LogoText>
        </Flexbox>
      </LogoContainer>
    )
  }
}
