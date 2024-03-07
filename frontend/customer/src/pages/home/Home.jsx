import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

//import css
import './Home.css';

// images
import img1 from '../../assets/carousel-imgs/img1.png';
import img2 from '../../assets/carousel-imgs/img2.jpg';
import img3 from '../../assets/carousel-imgs/img3.jpg';
import img4 from '../../assets/carousel-imgs/img4.jpg';

import middle_partition from '../../assets/middle_partition_header.svg';
import windowframeimg1 from '../../assets/featuredproducts-imgs/windowframeimg1.png';
import windowframeimg2 from '../../assets/featuredproducts-imgs/windowframeimg2.png';
import windowframeimg3 from '../../assets/featuredproducts-imgs/windowframeimg3.png';
import windowframeimg4 from '../../assets/featuredproducts-imgs/windowframeimg4.png';

import seemore_partition from '../../assets/see_more_partition_header.svg';
import seemoreimg1 from '../../assets/seemore-imgs/seemoreimg1.png';
import seemoreimg2 from '../../assets/seemore-imgs/seemoreimg2.png';

const ViewProdBtn = ({ to, children, handleClick }) => {
    return (
        <Link to={to}>
            <button onClick={handleClick} role="viewProdBtn" className="orange-rounded-button">
                <div className="inner-white-line">{children}</div>
            </button>
        </Link>
    );
};

ViewProdBtn.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
};

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <main>
            <div className="image-carousel-container">
                <ImageCarousel imageUrls={[img1, img2, img3, img4]} />
            </div>
            <p className="tagline">no mistake with mis&apos;cake</p>

            <img src={middle_partition} role="middle-partition" alt="middle-partition" className="partition-image" />

            <div className="featured-products-section">
                <div className="featured-products-left">
                    <div className="windowframe rounded">
                        <img src={windowframeimg1} alt="windowframeimg1" className="windowframe-image" />
                    </div>
                    <div className="windowframe">
                        <img src={windowframeimg2} alt="windowframeimg2" className="windowframe-image" />
                    </div>
                </div>
                <div className="featured-products-middle">
                    <div className="windowframe">
                        <img src={windowframeimg3} alt="windowframeimg3" className="windowframe-image" />
                    </div>
                    <div className="featured-products-text-section">
                        <p className="text-section-header-regular">TASTE ELEGANCE</p>
                        <div className="text-section-plain-text-area" id="plain-text-area1">
                            <p>
                                Indulge in the delightful flavors of our featured cakes and baked goods. From decadent
                                chocolate creations to delicate pastries, explore our selection that promises to
                                tantalize your taste buds and satisfy your cravings.
                            </p>
                        </div>

                        <ViewProdBtn to="/ourproducts">view our products</ViewProdBtn>
                    </div>
                </div>
                <div className="featured-products-right">
                    <div className="featured-products-text-section">
                        <p className="text-section-header-big">ENJOY</p>
                        <p className="text-section-header-big">THE TASTE OF</p>
                        <p className="text-section-header-big">SWEET HAPPINESS</p>
                        <p className="text-section-text-regular">Indulge yourself with great flavors</p>
                        <p className="text-section-text-regular">Explore delicious options.</p>
                        <p className="text-section-text-regular">Choose your best moments.</p>
                    </div>
                    <div className="windowframe" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img src={windowframeimg4} alt="windowframeimg4" className="windowframe-image" />
                        {isHovered && (
                            <div className="windowframe-hover-text">
                                <span className="hover-text-title">DOUBLE CHOCOLATE</span>
                                <span className="hover-text-title">CAKE</span>
                                <span className="hover-text-price">starts at Php 2000</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <img src={seemore_partition} alt="seemore_partition" className="partition-image" id="seemore_partition" />
            <div className="seemore-section">
                <img src={seemoreimg1} alt="seemoreimg1" className="seemore-image" id="seemoreimg1" />
                <img src={seemoreimg2} alt="seemoreimg2" className="seemore-image" id="seemoreimg2" />
                <p className="seemore-header">SEE WHAT OUR CUSTOMERS ARE SAYING ABOUT US</p>
                <div className="seemore-message" id="seemoremessage1">
                    <p className="seemore-message-body">
                        &quot;The cakes and pastries here are absolutely divine! Every bite feels like a little slice of
                        heaven.&quot;
                    </p>
                    <p className="seemore-message-author">- Sarah H.</p>
                </div>
                <div className="seemore-message" id="seemoremessage2">
                    <p className="seemore-message-body">
                        &quot;The service is exceptional, and the quality of the baked goods is unmatched. I highly
                        recommend trying their signature desserts!&quot;
                    </p>
                    <p className="seemore-message-author">- Emily S.</p>
                </div>
            </div>
        </main>
    );
};

export { ViewProdBtn, Home };
