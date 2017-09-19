import React, { Component } from 'react';
import HeadingText from '../components/HeadingText.js';
import Body from '../components/Body.js';
import Content from '../components/Content.js';
import Navigation from '../components/Navigation/Navigation.js';

export default class About extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Body>
          <HeadingText>
            About
          </HeadingText>
          <Content>
            Andrew Angelle is a guitarist currently based in Austin, Tx formerly based in
            New Orleans, Louisiana. As a performer, he has received prizes in both solo and chamber divisions
            in national and regional competitions.
            As an artist with an eclectic past
            his musical influences and collaborations
            range widely from classical to popular music,
            and even include experiences in the folk music
            traditions of the Acadiana region in southern Louisiana.
            <br/><br/>
            Andrew's former teachers include Dr. Jeffrey George
            at the University of Louisiana at Lafayette,
            Brazilian guitarist Dr. Eduardo Minozzi Costa,
            and the American guitarist Dr. Matthew Palmer.
            Andrew has also appeared in masterclasses for
            such artists as Roland Dyens, David Tannenbaum,
            Adam Holzman, Andrew Zohn, and the Pacifica String Quartet
            among others
          </Content>
        </Body>
      </div>
    );
  }
}
