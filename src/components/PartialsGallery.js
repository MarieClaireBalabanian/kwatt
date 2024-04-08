
import GlobalImage from './GlobalImage';

const PartialsGallery = (props) => {
    return (
        <div className={`flex-gallery ${props.className}`}>
            <div className="grid grid-2">

                {
                    props.block.images.map((image) => (
                       <figure className={!image.portrait ? 'full' : ''} key={image.asset._ref}>
                            <GlobalImage image={image} />
                       </figure>
                    ))
                }

            </div>
        </div>
    )
}

export default PartialsGallery
