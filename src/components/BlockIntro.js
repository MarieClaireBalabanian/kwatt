import { PortableText } from '@portabletext/react'

const BlockIntro = ( props ) => {
  return (
    <section className={props.className} id={props.id}>
      <div className="container text-center">
        <PortableText value={props.block.callout} /> 
      </div>
  </section>
  );
};

export default BlockIntro;