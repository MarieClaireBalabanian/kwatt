import React from 'react'
import urlFor from '../imageUrl'

const GlobalImage = ({image, className}) => {
  console.log(className)
  return (
    image &&  (
        <img className={className} src={ urlFor(image).url() } alt="hi"/>
    )
  )
}

export default GlobalImage
