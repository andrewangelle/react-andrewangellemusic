import React, { Component } from 'react';
import Glide from 'react-glide';
import Flexbox from 'flexbox-react';
import Navigation from '../components/Navigation/Navigation.js';
import 'react-glide/lib/react-glide.css';
import '../styles/index.css'

export default class Home extends Component {
  render() {
    const width = '100%';
    return (
      <div>
        <Flexbox
          flexDirection='column'
          minHeight='100vh'
          justifyContent='center'
          alignItems='center'
        >
          <Flexbox>
            <Navigation />
          </Flexbox>

            <Flexbox>
              <Glide width={width}>
                <img
                  src='https://photos-5.dropbox.com/t/2/AADjf08gJK-EcP9I96_oqiSZzPRdBpmx_MqWgKB5768inw/12/126072877/jpeg/32x32/1/_/1/2/seated-playing.jpg/EMfIjmEY6QkgBygH/Yk6cyStQPKeNdRVbOqthPa_3yLldBAuW6GJCfYSlGEg?size=32x32&size_mode=5'
                  width='100%'
                  alt='pic1'
                />
                <img
                  src='https://photos-6.dropbox.com/t/2/AACWiZs6_9iN68vGcpYQzS6S-p7a6MT7and-ZcBO4LsERg/12/126072877/jpeg/32x32/1/_/1/2/top-profile.jpg/EMfIjmEY6QkgBygH/ThOhHuLYiNUn2TFTB9H9UHqK_evO2eoUKIKzRLxNoK4?size=32x32&size_mode=5'
                  width='100%'
                  alt='pic2'
                />
                <img
                  src='https://photos-2.dropbox.com/t/2/AACXPWvVdddjARNmFA4I3cLGcU46oTP8OG1fjCb3XrTifQ/12/126072877/jpeg/32x32/1/_/1/2/soundboard.jpg/EMfIjmEY6QkgBygH/jTTcknTzoDdS45LexsWkObpi1jtaajk_gAIgYu8yZPA?size=32x32&size_mode=5'
                  width='100%'
                  alt='pic4'
                />
                <img
                  src='https://photos-2.dropbox.com/t/2/AABWmu6Kb3rZLfaygTtZ8u335VQP_Lu_ELn_NNcNkpoODA/12/126072877/jpeg/32x32/1/_/1/2/seated-posed.jpg/EMfIjmEY6QkgBygH/pizA8vjKzt6Y_HyE5WYD1f41k5EDqQrbazjVFkTo5T0?size=32x32&size_mode=5'
                  width='100%'
                  alt='pic5'
                />
              </Glide>
            </Flexbox>
        </Flexbox>
      </div>
    );
  }
}
