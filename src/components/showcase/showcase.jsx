import React from 'react';
import './showcase.css'
import { useState } from 'react';
import Button from '@mui/material/Button';

const Showcase = (props) => {

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        currentImage + 1 > props.images.length - 1 ? setCurrentImage(0) : setCurrentImage(currentImage + 1)
    }

    return (
        <div className='showcase-container'>
            <Button className='close-button' variant="outlined" color="error" onClick={() => props.setPopup(false)}>
                Close
            </Button>
            <img className='showcase-slider' src={require(`../../assets/${props.images[currentImage]}`)} alt="" onClick={() => nextImage()}/>
        </div>
    );
}

export default Showcase;
