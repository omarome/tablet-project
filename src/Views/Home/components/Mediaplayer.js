import React from 'react';
import ReactPlayer from 'react-player'
import './App.css';

function ResponsivePlayer() {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=g91cYBnkUJY&t=7s'
            width='40%'
            height='140%'
            controls={true}
          />
        </div>
      )
    }

    export default ResponsivePlayer