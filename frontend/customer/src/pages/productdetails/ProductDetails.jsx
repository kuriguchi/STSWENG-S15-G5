import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import './ProductDetails.css';

// images
import img1 from '../../assets/productdetails-imgs/productimg1.png';
import img2 from '../../assets/productdetails-imgs/productimg2.png';
import img3 from '../../assets/productdetails-imgs/productimg3.png';
import img4 from '../../assets/productdetails-imgs/productimg4.png';
import img5 from '../../assets/productdetails-imgs/productimg5.png';
import img6 from '../../assets/productdetails-imgs/productimg6.png';
import elipses from '../../assets/productdetails-imgs/elipses.svg';

const ProductDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const productID = location.pathname
        .split('/')
        .filter((x) => x)
        .pop();

    const to = `/ourproducts/${productID}`;

    const handleOrder = () => {
        navigate(`/order/${productID}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log(productID);
    return (
        <main>
            <div className="breadcrumbs-container">
                <div className="breadcrumbs">
                    <span>
                        <Link to="/ourproducts">Our Products</Link> / <Link to={to}>Carrot Cake</Link>
                    </span>
                </div>
            </div>
            <div className="product-details-name">CARROT CAKE</div>

            <div className="product-details-section">
                <div className="product-details-left-panel">
                    <div className="product-images-section">
                        <div className="product-thumbnails-container">
                            <div className="product-thumbnail-wrapper">
                                <img src={img1} alt="product image 1" className="product-thumbnail" />
                            </div>
                            <div className="product-thumbnail-wrapper">
                                <img src={img2} alt="product image 2" className="product-thumbnail" />
                            </div>
                            <div className="product-thumbnail-wrapper">
                                <img src={img3} alt="product image 3" className="product-thumbnail" />
                            </div>
                            <div className="product-thumbnail-wrapper">
                                <img src={img4} alt="product image 4" className="product-thumbnail" />
                            </div>
                            <div className="product-thumbnail-wrapper">
                                <img src={img5} alt="product image 5" className="product-thumbnail" />
                            </div>
                        </div>
                        <div className="main-product-image-container">
                            {/* image carousel to fix */}
                            <div className="main-product-image-wrapper">
                                <img src={img6} alt="main product" className="main-product-image" />
                            </div>
                            <img src={elipses} alt="elipses" className="elipses" />
                        </div>
                    </div>
                    <div className="orange-bar"></div>
                </div>

                <div className="product-details-right-panel">
                    <div className="product-details detail-container">
                        <h3>Pastry Description</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu lorem quis velit accumsan
                            venenatis vel eu nisl. Nunc fermentum sodales quam, in sodales dolor pulvinar eu. Mauris
                            efficitur, metus vel imperdiet gravida, justo nisi interdum metus, vitae varius risus tellus
                            id justo. Donec in ex semper, vulputate erat non, cursus nisl. Fusce sodales vulputate
                            egestas. Nam iaculis leo nisl, eget mollis mauris malesuada at. Duis lorem neque, maximus
                            eget tempor finibus, ultrices non eros.
                        </p>
                    </div>
                    <div className="product-details detail-container">
                        <h3>Ingredients</h3>
                        <p>
                            Nulla bibendum velit justo, at. Fusce sodales vulputate egestas. Nam iaculis leo nisl, eget
                            mollis mauris malesuada at. Duis lorem neque, maximus eget
                        </p>
                    </div>
                    <div className="product-details detail-container">
                        <h3>Pricing</h3>
                        <p>
                            <span className="price-size">
                                <span>
                                    <b className="price-slice-size">A Slice</b> (4 inches)
                                </span>
                                <b>750.00 Php</b>
                            </span>
                            <span className="price-size">
                                <span>
                                    <b>Whole Cake</b> (12 inches)
                                </span>
                                <b>3000.00 Php</b>
                            </span>
                            <span className="price-size">
                                <span>
                                    <b>Custom Size</b> (per inch)
                                </span>
                                <b>200.00 Php</b>
                            </span>
                        </p>
                    </div>
                    <div className="product-details button-container">
                        <button type="button" className="orange-button">
                            Add to Cart
                        </button>
                        <button type="button" className="orange-button" onClick={handleOrder} >
                            Order now
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetails;
