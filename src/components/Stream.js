import DynamicComponent from "./DynamicComponent";

const Stream = ({ blocks }) => {
    return (
        <>
            { blocks.map((block) => (
                <DynamicComponent 
                    is={`Block${block._type}`} 
                    block={block} 
                    key={block._key}
                    className={`block-${block._type.toLowerCase()}`}
                    id={`${block._type.toLowerCase()}`}
                 />
            ))}
        </>
    )
}

export default Stream
