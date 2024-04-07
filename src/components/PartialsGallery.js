
import GlobalImage from './GlobalImage';

const PartialsGallery = (props) => {
    return (
        <div className={`flex-gallery ${props.className}`}>
            <ul className="grid grid-2">

                {
                    props.block.images.map((image) => (
                       <li className={!image.portrait ? 'full' : ''}>
                            <GlobalImage image={image} />
                       </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default PartialsGallery
