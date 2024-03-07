import { Link } from 'react-router-dom';

import './OurProducts.css';

import banner from '../../assets/ourproducts-imgs/banner.png';
import cakesPartitionHeader from '../../assets/ourproducts-imgs/cakes_partition_header.svg';
import bakedPartitionHeader from '../../assets/ourproducts-imgs/baked_partition_header.svg';

import sampleProductImg1 from '../../assets/ourproducts-imgs/sample_product1.png';
import sampleProductImg2 from '../../assets/ourproducts-imgs/sample_product2.png';

const OurProducts = () => {
    return (
        <main>
            <img src={banner} alt="Banner" className="product-page-banner" />
            <div className="cake-products-section">
                <img src={cakesPartitionHeader} alt="Cakes Partition Header" className="partition-header" />

                <div className="product-snippets-container">
                    <div className="product-snippet">
                        <div className="product-snippet-image-container cake">
                            <div className="product-image-inner-line"></div>
                            <img src={sampleProductImg1} alt="Carrot Cake" className="product-snippet-image" />
                        </div>
                        <div className="product-snippet-details">
                            <h3 className="product-snippet-title">CARROT CAKE</h3>
                            <p className="product-snippet-price">starts at Php 2000</p>
                        </div>
                        <Link to="/ourproducts/:id" className="order-product-button">
                            order now
                        </Link>
                    </div>

                    {/* Products Template */}
                </div>
            </div>

            <div className="baked-products-section">
                <img src={bakedPartitionHeader} alt="Baked Partition Header" className="partition-header" />

                <div className="product-snippets-container">
                    <div className="product-snippet">
                        <div className="product-snippet-image-container cake">
                            <div className="product-image-inner-line"></div>
                            <img src={sampleProductImg2} alt="Sourdough Bread" className="product-snippet-image" />
                        </div>
                        <div className="product-snippet-details">
                            <h3 className="product-snippet-title">SOURDOUGH BREAD</h3>
                            <p className="product-snippet-price">starts at Php 2000</p>
                        </div>
                        <Link className="order-product-button">order now</Link>
                    </div>

                    {/* Products Template */}
                </div>
            </div>
        </main>
    );
};

export default OurProducts;
