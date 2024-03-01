import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './ImageCarousel.css';

// imgs
import selectedElipse from '../../assets/carousel-imgs/selected-elipse.svg';
import elipse from '../../assets/carousel-imgs/elipse.svg';

const ImageCarousel = ({ imageUrls }) => {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [imageIndex, imageUrls.length]);

    return (
        <div className="image-carousel">
            <div className="carousel-image-container">
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                    }}
                >
                    {imageUrls.map((url) => (
                        <img
                            key={url}
                            src={url}
                            className="carousel-image"
                            style={{
                                transform: `translateY(${-100 * imageIndex}%)`,
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="carousel-buttons">
                {imageUrls.map((_, index) => (
                    <button key={index} className="carousel-elipse-button" onClick={() => setImageIndex(index)}>
                        {index === imageIndex ? (
                            <img src={selectedElipse} alt="Selected Elipse" />
                        ) : (
                            <img src={elipse} alt="Elipse" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

ImageCarousel.propTypes = {
    imageUrls: PropTypes.array.isRequired,
};

export default ImageCarousel;
