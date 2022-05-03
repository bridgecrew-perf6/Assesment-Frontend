import  { React, useState } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import "./ProductCard.css";


function ProductCard ({id, title, image}){
    const [countdown, setCountdown] = useState(true);
    const [button, setButton]=useState();
    const handlerCompleted = () => {
        setCountdown(false);
        setButton('Offer expired');
      };


    return(
        <div className="card">              
                <img className="imagecard" src={image} alt=""/>
                <p className="titleproduct">{title}</p>
                <Countdown  className="countdown" date={Date.now() + parseInt((Math.random() * (300000)), 10)} onComplete={handlerCompleted}/>
                <Link className={countdown ? 'link__active' : 'link__inactive'} to={`/ProductDetail/${id}`}>{button}</Link>
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