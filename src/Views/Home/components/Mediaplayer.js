import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './App.css';

class Mediaplayer extends Component {
  render() {
      const { url, width, height } = this.props;
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={ url }
            width={ width }
            height={ height }
            controls={true}
          />
        </div>
      )
    }
  }

export default Mediaplayer