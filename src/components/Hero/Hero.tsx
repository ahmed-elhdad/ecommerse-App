"use client";
import React, { useEffect, useRef, useState } from 'react';
import "./Hero.css";
// import images:
import prudactImg from "../images/image-product-1.jpg";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import nextImage from "../images/icon-next.svg";
import previos from "../images/icon-previous.svg";
import cart from "../images/icon-cart.svg";
import imageA1 from "../images/image-product-1-thumbnail.jpg";
import imageA2 from "../images/image-product-2-thumbnail.jpg";
import imageA3 from "../images/image-product-3-thumbnail.jpg";
import imageA4 from "../images/image-product-4-thumbnail.jpg";
import image1 from "../images/image-product-1-thumbnail.jpg";
import image2 from "../images/image-product-2-thumbnail.jpg";
import image3 from "../images/image-product-3-thumbnail.jpg";
import image4 from "../images/image-product-4-thumbnail.jpg";
const Hero = () => {

    const [count, setCount] = useState(0);
    const [imageNumber, setImageNumber] = useState(1);
    const [imageSrc, setImageSrc] = useState(imageA1.src); 
    const [active, setActive] = useState(1);
    const images = [imageA1, imageA2, imageA3, imageA4];
    let activeClass = "active";
    let e = document.querySelector("img.active");
    // Hendle image click:
    const handleNextImage = () => {
        if (imageNumber < images.length) {
            setImageNumber(imageNumber + 1);
            setActive(active + 1);
            setImageSrc(images[imageNumber].src);
        }else{
            setImageNumber(1);
            setActive(1);
        }
    }
    const handlePreviosImage = () => {
        if (imageNumber < images.length) {
            setImageNumber(imageNumber - 1);
            setActive(active - 1);
            setImageSrc(images[imageNumber].src);
        }else{
            setImageNumber(1);
            setActive(1);
        }
    }
    // handle number of orders:
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
                    <button onClick={handlePreviosImage} className='previos flex justify-center align-center' type='button'>
                        <img src={previos.src} alt="" />
                    </button>
                    <img src={imageSrc} alt="" />
                    <button onClick={handleNextImage} className='next justify-center align-center' type='button'>
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