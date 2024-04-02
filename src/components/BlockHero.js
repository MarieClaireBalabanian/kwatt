import GlobalImage from './GlobalImage'
const BlockHero = ( props ) => {
  return (
    <section className={props.className} id={props.id}>
        {/* <video playsinline loop muted autoplay className="absolute-cover">
            <source src="/0226.mp4" type="video/mp4" />
        </video> */}
    {/* <GlobalImage
      :gImage="block.image.image"
      size="desktop-medium"
      class="background-cover absolute-cover pseudo-after"
      isEager
    /> */}
   <GlobalImage image={props.block.image} />
    <div className="container text-center">
      <h1 className="heading">
        {/* <span className="h4">a</span> */}
        <span className="h1">{props.block.name}</span>
        <span className="h4">{props.block.job_title}</span>
      </h1>
    </div>
  </section>
  );
};

export default BlockHero;