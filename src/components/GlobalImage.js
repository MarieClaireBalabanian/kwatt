import urlFor from '../imageUrl'

const GlobalImage = ({image, className}) => {
  // const getImg = () => {
  //   const url = urlFor(image.image.asset).url();
  //   const clean = url.replace(process.env.REACT_APP_SANITY_MEDIA, process.env.REACT_APP_IMAGEKIT) + '?w=1024'
  //   return clean;
  // }

  return (
    image &&  (
      <img className={className} src={urlFor(image.asset).url()} alt={image.alt ? image.alt : ''} />
    )
  )
}

export default GlobalImage
