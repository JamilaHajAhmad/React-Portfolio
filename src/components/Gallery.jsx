import IMAGES from '../data/images';
import ImageShadow from 'react-image-shadow';

const Gallery = () => {
    return (
        <div className='gallery'>
            {
                IMAGES.map(IMAGE => <Image key={IMAGE.id} image={IMAGE} />)
            }
        </div>
    )
}

const Image = (props) => {
    const {name, src, description} = props.image;
    return (
        <div className='gallery-image'>
            <a href={src} target='_blank'><ImageShadow src={src} alt={name} /></a>
            <p>{description}</p>
        </div>
    )
}

export default Gallery;