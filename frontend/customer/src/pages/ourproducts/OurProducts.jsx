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
                    <ul id="productLists" className="product-snippets-container">
                        {products.map(product => (
                            <li key={product._id}>
                                <Product {... {productImg: product.img, productName: product.name, productPrice: product.price, productId: product._id}} />
                            </li>
                        ))}
                    </ul>
            </div>
        </main>
    );
};

export default OurProducts;
