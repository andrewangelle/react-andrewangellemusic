import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import LogoContainer from './LogoContainer';
import LogoText from './LogoText';

export default class LogoHome extends Component {
  render() {
    return (
      <LogoContainer>
        <Flexbox>
          <LogoText>
            Andrew Angelle
          </LogoText>
        </Flexbox>

        <Flexbox>
          <LogoText subheader>
            Guitarist. Performer. Teacher
          </LogoText>
        </Flexbox>
      </LogoContainer>
    )
  }
}
