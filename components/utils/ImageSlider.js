import React, { useState } from 'react';

import { GrPrevious, GrNext } from 'react-icons/gr';
import { SliderContainer } from './UIComponents';

export default function ImageSlider({ data }) {
    const ImagesData = data;

    const [currentImage, setCurrentImage] = useState(0);
    const length = ImagesData.length;

    if (!Array.isArray(ImagesData) || length < 1) {
        return null;
    }

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
    }

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
    }

    return (
        <SliderContainer>
            <GrPrevious id="left-arrow" onClick={prevSlide} />
            {ImagesData.map((image, index) => {
                return (
                    <>
                        { index === currentImage && (<img key={index} src={image.formats.large.url} alt={image.alternativeText} />)}
                    </>)
            })}
            <GrNext id="right-arrow" onClick={nextSlide} />
        </SliderContainer>
    )
}
