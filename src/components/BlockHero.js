// import GlobalImage from './GlobalImage';
import styled from "styled-components";

const StyledHero = styled.section`
  min-height: 100vh;
  position: relative;

  h1 {
    margin: .2em 0;
  }
`

const BlockHero = ( props ) => {
  return (
    <StyledHero className={`column-vertical-center ${props.className}`} id={props.id} tabIndex={props.tabIndex}>
      {/* <GlobalImage image={props?.block?.image} className="background-cover" /> */}
      <div className="container text-center z-2">
        <h1 className="h1">{props.block.name}</h1>
        <h2 className="h4">{props.block.job_title}</h2>
      </div>
    </StyledHero>
  );
};

export default BlockHero;