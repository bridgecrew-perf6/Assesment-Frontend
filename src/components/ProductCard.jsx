import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./ProductCard.css";


function ProductCard ({id, title, image}){
    



    return(
        <div className="card">
            <Link to={`/ProductDetail/${id}`}>
                <img className="imagecard" src={image} alt=""/>
                <p className="titleproduct">{title}</p>
                 
            </Link>
        </div>
    );
}

ProductCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  };
  
  ProductCard.defaultProps = {
    image: '',
    title: '',
    id: 0,
  };

export default ProductCard;