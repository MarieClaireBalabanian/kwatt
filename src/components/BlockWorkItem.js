
import { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import GlobalImage from './GlobalImage';
import styled from "styled-components";

const StyledProject = styled.li`
  padding: 30px;
  min-height: 200px;
  padding: 30px;
  overflow: hidden;
  margin-bottom: 10px;

  .background-cover {
    transition: 0.8s ease;
    filter: sepia(40%) brightness(45%);
  }

  .logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 50px;
    transition: 0.8s ease .5s;
    filter: grayscale(100%) brightness(0) invert(1)
    drop-shadow(0 0 0.7rem black);
  }

  .copy {
    position: relative;
    z-index: 3;
    height: 100%;
    padding-top: 70px;

    .copy-inner {
      opacity: 0;
      transform: scale(0.9);
      transition: transform 1s ease, opacity 1s ease;
    }
  }

    &.showing, &:focus-within {
      .copy-inner {
        opacity: 1;
        transform: scale(1);
      }
      .logo {
        transition: 0.4s ease;
        top: 30px;
        transform: translate(-50%, 0);
      }

      .background-cover {
        filter: sepia(40%) brightness(15%);
      }
    }
  }
`
const BlockWorkItem = ({ project }) => {
  const projectRef = useRef()

  function setIsShowing(val) {
    if (val) projectRef.current.classList.add('showing')
    else projectRef.current.classList.remove('showing')
  }

  return (
    <StyledProject ref={projectRef} className={`relative text-center text-white column-vertical-center`}
      onMouseEnter={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}>
      <div className="image-wrapper absolute-cover">
        <GlobalImage image={project.thumbnail?.thumbnail_image.image} className="background-cover z-1" />
        <GlobalImage image={project.thumbnail?.logo.image} className="logo z-2" />
      </div>

      <div className="copy z-2">
        <div className="copy-inner">
          <p className="paragraph mb-20">{project.thumbnail?.copy}</p>
          <div className="actions">
            <Link to={`/${project.slug.current}`} className="button">View More</Link>
          </div>
        </div>
      </div>
    </StyledProject>
  );
};

export default BlockWorkItem;