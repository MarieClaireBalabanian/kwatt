import React from 'react'
import urlFor from '../imageUrl'

const GlobalImage = (image) => {
  const asset = image?.image?.image?.asset
  return (
    asset &&  (
        <img src={ urlFor(asset).url() } alt="hi"/>
    )
  )
}

export default GlobalImage
