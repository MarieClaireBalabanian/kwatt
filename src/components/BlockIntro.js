import { PortableText } from '@portabletext/react'

const BlockIntro = ( props ) => {
  return (
    <section className={`bg-black text-white text-center ${props.className}`} id={props.id} tabIndex={props.tabIndex}>
      <div className="container">
        <PortableText className="h4" value={props.block.callout} /> 
      </div>
    </section>
  );
};

export default BlockIntro;