import React from 'react'
// import images:
import  prudactImg from "../images/image-product-1.jpg";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import image1 from "../images/image-product-1-thumbnail.jpg";
import image2 from "../images/image-product-2-thumbnail.jpg";
import image3 from "../images/image-product-3-thumbnail.jpg";
import image4 from "../images/image-product-4-thumbnail.jpg";
const Hero = () => {
    let price = 125.00;
    let realPrice = 250.00;
    let count = 0;
    return (
        <div>
            <div className="images">
                <img src={prudactImg.src} alt="" />
                <div className="small-images flex">
                    <img src={image1.src} alt="" />
                    <img src={image2.src} alt="" />
                    <img src={image3.src} alt="" />
                    <img src={image4.src} alt="" />
                </div>
            </div>
            <div className="description flex">
                <span>sneaker company</span>
                <h2>fall limited edition<br/>sneakers</h2>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. </p>
                <h4 className="price">${price}</h4>
                <span className="offer">50%</span>
                <span className="real-price">${realPrice}</span>
                <div className="control">
                    <button type="button"><img src={plus.src} alt="" />{count}<img src={minus.src} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Hero;