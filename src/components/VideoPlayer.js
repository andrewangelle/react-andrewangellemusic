import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Glide from 'react-glide';
import 'react-glide/lib/react-glide.css';
import '../styles/index.css'

export default class VideoPlayer extends Component {
  render() {
    const width = '100%'
    return(
      <Flexbox
        flexDirection='column'
        minHeight='50vh'
        justifyContent='center'
        alignItems='center'
      >
        <Flexbox>
          <Glide width={width}>
            <iframe
              width="600"
              height="315"
              src="https://www.youtube.com/embed/UATT-mYsDlU"
              frameBorder="0"
              allowFullScreen
            >
            </iframe>
            <iframe
              width="600"
              height="315"
              src="https://www.youtube.com/embed/h3dpgKj9AjA"
              frameBorder="0"
              allowFullScreen
            >
            </iframe>
            <iframe
              width="600"
              height="315"
              src="https://www.youtube.com/embed/keJm114txg0"
              frameBorder="0"
              allowFullScreen
            >
            </iframe>
            <iframe
              width="600"
              height="315"
              src="https://www.youtube.com/embed/0a19fpcE9QM"
              frameBorder="0"
              allowFullScreen
            >
            </iframe>
            <iframe
              width="600"
              height="315"
              src="https://www.youtube.com/embed/uiDZ3JbsXSw"
              frameBorder="0"
              allowFullScreen
            >
            </iframe>
            <iframe
              width="600"
              height="315"
              src="https://www.youtube.com/embed/yZ0JciwdMew"
              frameBorder="0"
              allowFullScreen
            >
            </iframe>
            <iframe
              width="600"
              height="315"
              src="https://www.youtube.com/embed/0IbN63KnPrM"
              frameBorder="0"
              allowFullScreen
            >
            </iframe>
          </Glide>
        </Flexbox>
      </Flexbox>
    )
  }
}
