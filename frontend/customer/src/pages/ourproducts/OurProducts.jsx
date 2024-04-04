import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './OurProducts.css';

import banner from '../../assets/ourproducts-imgs/banner.png';
import cakesPartitionHeader from '../../assets/ourproducts-imgs/cakes_partition_header.svg';
import bakedPartitionHeader from '../../assets/ourproducts-imgs/baked_partition_header.svg';

import sampleProductImg1 from '../../assets/ourproducts-imgs/sample_product1.png';
import sampleProductImg2 from '../../assets/ourproducts-imgs/sample_product2.png';

//import components
import Product from './ProductContainer';

const OurProducts = () => {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        const fetchProducts = () => {
            fetch(`http://localhost:4000/getAllProducts`)
                .then(response => {
                    if(!response.ok) {
                        throw new Error('Failed to get all products.');
                    }

                    return response.json();
                })
                .then((data) => {
                    setProducts(data);
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        fetchProducts();

    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <img src={banner} alt="Banner" className="product-page-banner" />
            <div className="cake-products-section">
                <img src={cakesPartitionHeader} alt="Cakes Partition Header" className="partition-header" />
                    <ul className="product-snippets-container">
                        {products.map(product => (
                            <li key={product._id}>
                                <Product {... {productImg: product.img, productName: product.name, productPrice: product.price, productId: product._id}} />
                            </li>
                        ))}
                    </ul>
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

                </div>
            </div>
            
        </main>
    );
};

export default OurProducts;
