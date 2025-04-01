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
import XIcon from "../images/icon-close.svg";
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
    const [imageNumber, setImageNumber] = useState(0);
    const [imageSrc, setImageSrc] = useState(imageA1.src); 
    const images = [imageA1, imageA2, imageA3, imageA4];
    const markUp = ``;

    // HANDLE IMAGE CLICK:
    const imagesRef = useRef<NodeListOf<HTMLImageElement> | null>(null);

    const reamoveActive = () => {
        imagesRef.current?.forEach((img) => {
            img.classList.remove("active");
        });
    };

    const handleImageClick = (id:number) => {
        imagesRef.current?.forEach((img, i) => {
            reamoveActive();
            let imgActive = document.getElementById(`${img.id}`) as HTMLImageElement;
            if (i === id) {
                setImageSrc(images[i].src);
                setImageNumber(i + 1);
            }

        });
    };

    useEffect(() => {
        imagesRef.current = document.querySelectorAll(".small-images img");
    }, []);
    // Hendle slider image click(next and previos):
    const handleNextImage = (e:number) => {
        if (imageNumber < images.length) {
            setImageNumber(imageNumber + 1);
            setImageSrc(images[imageNumber].src);
        }else{
            setImageNumber(1);
        }
    }
    const handlePreviosImage = (e:any) => {
        if (imageNumber === 0) {
            e.preventDefault();

        }else {
            setImageNumber(imageNumber - 1);
            setImageSrc(images[imageNumber].src);
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


    // handle create image:
    const create = () => {
        let mainImg = document.querySelector(".main") as HTMLImageElement; 
        mainImg.src = imageSrc;
        let mainDiv = document.createElement("div");
        mainDiv.className = "top flex flex-col";
        document.querySelector(".will-cover")?.classList.add("cover");
        let closeIcon = document.createElement("button");
        closeIcon.className = "close-icon flex justify-center align-center";
        closeIcon.onclick = () => {
            mainDiv.remove();
            document.querySelector(".will-cover")?.classList.remove("cover");

        };
        mainDiv.appendChild(closeIcon);
        let imgClose = document.createElement("img");
        imgClose.src = `${XIcon.src}`;
        closeIcon.appendChild(imgClose);
        let imgDiv = document.createElement("div");
        imgDiv.className = "slider flex justify-center align-center";
        mainDiv.appendChild(imgDiv);
        let previosBtn = document.createElement("button");
        previosBtn.className = "previos flex justify-center align-center";  
        previosBtn.type = "button";
        imgDiv.appendChild(previosBtn);
        let imgPrevios = document.createElement("img");
        imgPrevios.src = `${previos.src}`;
        previosBtn.appendChild(imgPrevios);
        let img = document.createElement("img");
        img.src = `${imageSrc}`;
        img.className = "main";
        imgDiv.appendChild(img);
        document.querySelector("body")?.appendChild(mainDiv);
        let btnNext = document.createElement("button");
        imgDiv.appendChild(btnNext);
        btnNext.className = "next flex justify-center align-center";
        let imgNext = document.createElement("img");
        imgNext.src =`${nextImage.src}`;
        btnNext.appendChild(imgNext);
        let smallImages = document.createElement("div");
        smallImages.className = "small-images flex";        
        mainDiv.appendChild(smallImages);
        let img1 = document.createElement("img");
        img1.src = `${image1.src}`;
        img1.id = "0";
        img1.className = "active";
        img1.onclick = () => handleImageClick(0)
        smallImages.appendChild(img1);
        let img2 = document.createElement("img");
        img2.src = `${image2.src}`;
        img2.id = "1";
        img2.onclick = () => handleImageClick(1);
        smallImages.appendChild(img2);
        let img3 = document.createElement("img");
        img3.src = `${image3.src}`;
        img3.id = "2";
        img3.onclick = () => handleImageClick(2);
        smallImages.appendChild(img3);
        let img4 = document.createElement("img");
        img4.src = `${image4.src}`;
        img4.id = "3";
        img4.onclick = () => handleImageClick(3);
        smallImages.appendChild(img4);
    }
    return (
        <div className='hero flex justify-center align-center'>
            <div className="images flex flex-col">
                <div className="slider flex justify-center align-center">
                    <button onClick={handlePreviosImage} className='previos flex justify-center align-center' type='button'>
                        <img src={previos.src} alt="" />
                    </button>
                    <img className='main' onClick={create} src={imageSrc} alt="" />
                    <button onClick={handleNextImage} className='next justify-center align-center' type='button'>
                        <img src={nextImage.src} alt="" />
                    </button>
                </div>
                <div className="small-images flex">
                    <img id={0} onClick={() => handleImageClick(0)} className='active' src={image1.src} alt="" />
                    <img id={1} onClick={() => handleImageClick(1)} src={image2.src} alt="" />
                    <img id={2} onClick={() => handleImageClick(2)} src={image3.src} alt="" />
                    <img id={3} onClick={() => handleImageClick(3)} src={image4.src} alt="" />
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
                        <img src={plus.src} alt="" onClick={plusHandler}  />
                        <span>{count}</span>
                        <img src={minus.src} onClick={(e) => minusHandler(e)} alt="" />
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