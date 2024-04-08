import { PortableText } from '@portabletext/react';
import styled from 'styled-components';

const StyledVideo = styled.div`

  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }

  .iframe-container {
    width: 100%; 
    height: 0;
    padding-top: 56.25%;
    position: relative;
    iframe {
      position: absolute;
      inset: 0 0 0 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

`

const PartialsVideo = (props) => {
  const vidClass = props.block.video.includes('youtube') ? 'youtube' : '';
  return (
    <StyledVideo className={`flex-video ${props.className}`}>
      <div className={`video-container ${vidClass}`}>
        <div class="iframe-container" dangerouslySetInnerHTML={{ __html: props.block.video }} />
      </div>
    </StyledVideo>
  )
}

export default PartialsVideo
