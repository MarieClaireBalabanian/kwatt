import { PortableText } from '@portabletext/react'
import GlobalImage from './GlobalImage'

const BlockAbout = ( props ) => {
  console.log(props)
  return (
    <section className={`bg-black text-white text-center ${props.className}`} id={props.id} tabIndex={props.tabIndex}>
      <div className="container">
        <h2 className="h2">{props.block.title}</h2>
        <GlobalImage image={props.block.image.image} />
        <PortableText className="h4" value={props.block.copy} /> 
      </div>
  </section>
  );
};

export default BlockAbout;