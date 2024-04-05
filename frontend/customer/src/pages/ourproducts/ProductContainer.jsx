//import dependencies
import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import banner from '../../assets/ourproducts-imgs/banner.png';
import cakesPartitionHeader from '../../assets/ourproducts-imgs/cakes_partition_header.svg';
import bakedPartitionHeader from '../../assets/ourproducts-imgs/baked_partition_header.svg';

function Product (props){
    const [image, setImage] = useState(null);

    const imgPath = props.productImg;

    useEffect(() => {
        import(/* @vite-ignore */ imgPath)
            .then(imageModule => {
                setImage(imageModule.default);
            })
            .catch(error => {
                console.error('Error loading image: ', error);
            });
    }, [imgPath]);

    return (
        <div>
            <div className="product-snippets-container">
                <div className="product-snippet">
                    <div className="product-snippet-image-container cake">
                        <div className="product-image-inner-line"></div>
                        <img src={image} alt="Carrot Cake" className="product-snippet-image" />
                    </div>
                    <div className="product-snippet-details">
                        <h3 className="product-snippet-title">{props.productName}</h3>
                        <p className="product-snippet-price">starts at Php {props.productPrice}</p>
                    </div>
                    <Link to={`/ourproducts/${props.productId}`} id={"button_id" + props.productId} className="order-product-button">
                        order now
                    </Link>
                </div>
            </div>

            <div className="br-75"></div>
        </div>
        
    );
};

export default Product;