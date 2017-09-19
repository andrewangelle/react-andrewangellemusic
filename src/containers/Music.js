import React, { Component } from 'react';
import HeadingText from '../components/HeadingText.js';
import Body from '../components/Body.js';
import Navigation from '../components/Navigation/Navigation.js';
import VideoPlayer from '../components/VideoPlayer.js';
import 'react-glide/lib/react-glide.css';
import '../styles/index.css'

export default class Music extends Component {
  render() {
    return (
      <div>
        <Navigation />

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
