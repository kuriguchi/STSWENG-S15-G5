import { useState } from 'react';

const WindowFrame = ({ imgSrc, altText, title, price }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="windowframe" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={imgSrc} alt={altText} className="windowframe-image" />
            {isHovered && (
                <div className="windowframe-hover-text">
                    <span className="hover-text-title">{title}</span>
                    <span className="hover-text-price">{price}</span>
                </div>
            )}
        </div>
    );
};

export default WindowFrame;
