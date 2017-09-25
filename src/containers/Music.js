import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import HeadingText from '../components/HeadingText.js';
import Body from '../components/Body.js';
import Navigation from '../components/Navigation/Navigation.js';
import VideoPlayer from '../components/VideoPlayer.js';
import LogoContent from '../components/Logo/LogoContent';
import 'react-glide/lib/react-glide.css';
import '../styles/index.css'

export default class Music extends Component {
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
            Music
          </HeadingText>
          <VideoPlayer />
        </Body>
      </div>
    );
  }
}
