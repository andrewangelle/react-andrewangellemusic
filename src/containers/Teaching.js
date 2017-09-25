import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import HeadingText from '../components/HeadingText.js';
import Body from '../components/Body.js';
import Navigation from '../components/Navigation/Navigation.js';
import Content from '../components/Content.js';
import LogoContent from '../components/Logo/LogoContent';

export default class Teaching extends Component {
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
            Teaching
          </HeadingText>
          <Content>
            As an instructor, Andrew has well-established experience
                  in teaching a wide range of musical styles,
                  age groups, and proficiency levels.
                <br />
                <br />  In 2015, Andrew completed his Masters of Music
                  with an emphasis in Performance and was rewarded
                  a graduate teaching assistantship under the tutelage
                  of the American guitarist Dr. Nicholas Ciraldo
                  at the University of Southern Mississippi.
                <br />
                <br />Rates:
                <br />$120/month-includes weekly one hour lessons
                <br />or
                <br />$90/month-includes weekly 30 min lessons.
                <br />
                <br />**Single lessons are $35/hr or $25/half-hr
                <br />
                <br />Lessons are available remotely via Skype, or in person in the Austin metro area.
                <br />
                <br />Visit the Contact page for more info. References available upon request.
          </Content>
        </Body>
      </div>
    );
  }
}
