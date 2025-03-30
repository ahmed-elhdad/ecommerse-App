"use client";
import React, { useState } from 'react';
import "./Hero.css";
// import images:
import  prudactImg from "../images/image-product-1.jpg";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import nextImage from "../images/icon-next.svg";
import previos from "../images/icon-previous.svg";
import cart from "../images/icon-cart.svg";
import image1 from "../images/image-product-1-thumbnail.jpg";
import image2 from "../images/image-product-2-thumbnail.jpg";
import image3 from "../images/image-product-3-thumbnail.jpg";
import image4 from "../images/image-product-4-thumbnail.jpg";
const Hero = () => {

    const [count, setCount] = useState(0);
    const minusHandler = (e:any) => {
        if (count > 0) {
            setCount(count - 1);
        }else if (count  <= 0){
            e.preventDefault();
            setCount(0);
        }
    }
    const plusHandler = () => {
        setCount(count + 1);
    }
    return (
        <div className='hero flex justify-center align-center'>
            <div className="images flex flex-col">
                <div className="slider flex justify-center align-center">
                    <button className='previos flex justify-center align-center' type='button'>
                        <img src={previos.src} alt="" />
                    </button>
                    <img src={prudactImg.src} alt="" />
                    <button className='next justify-center align-center' type='button'>
                        <img src={nextImage.src} alt="" />
                    </button>
                </div>
                <div className="small-images flex">
                    <img className='active' src={image1.src} alt="" />
                    <img src={image2.src} alt="" />
                    <img src={image3.src} alt="" />
                    <img src={image4.src} alt="" />
                </div>
            </div>
            <div className="description flex flex-col">
                <span>sneaker company</span>
                <h2>fall limited edition<br/>sneakers</h2>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. </p>
                <h4 className="price">$125.00</h4>
                <span className="offer">50%</span>
                <span className="real-price">$250.00</span>
                <div className="control flex">
                    <button type="button" className='count font-700'>
                        <img src={plus.src} alt="" onClick={plusHandler}  />{count}<img src={minus.src} onClick={(e) => minusHandler(e)} alt="" />
                    </button>
                    <button type='button' className='add-to-cart'>
                        <img src={cart.src} alt="" />
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;