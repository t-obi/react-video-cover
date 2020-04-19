import React, { Component } from 'react';
// import Cover from 'react-video-cover';
import Cover from '../../../dist';
import Page from '../components/Page'
import { withPrefix } from "gatsby"

const style = {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1,
};
class CoverExample extends Component {

  render() {
    const videoOptions = {
      src: withPrefix('/golden-gate.mp4'),
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true
    };

    return (
      <Page>
        <div style={style} >
          <Cover
            videoOptions={videoOptions}
            remeasureOnWindowResize
          />
        </div>
      </Page>
    );
  }
}

export default CoverExample;
