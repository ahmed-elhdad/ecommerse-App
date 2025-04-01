"use client";

import React, { MouseEventHandler, useEffect, useState } from 'react'
import "./Header.css"; 

// Import assets:
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import bar from "../images/icon-menu.svg";
import shop from "../images/icon-cart.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import deleteIcon from "../images/icon-delete.svg";
const Header = () => {
    const [realNumber, setRealNumber] = useState(0);
    let markUp = `
        <p>your cart is empty.<p/>
    `;
    const cart = `
        <h4 className="font-700">cart</h4>
        <hr>
        <div className="content">
            ${markUp}
        </div>
        `;
        let tru = `
        <img src={prudactImg.src} alt=""/>
        <p className="font-400">fall limited edition sneakers</p>
        <span className="price font-400"></span>
        <span className="order-number font-400"><span/>
        <span className="total"></span>
        <img src = ${deleteIcon.src} />
        <button>check out</button>
        `;
    const addToCartFunc = () => { 
        let num = document.querySelector(".count span");
        setRealNumber(Number(num?.textContent) || 0);
        const spanElement = document.querySelector("img+span");
        if (spanElement) {
            spanElement.textContent = realNumber.toString();
        }
        console.log(document.querySelector("img+span"));
        console.log(realNumber);
        
    }
    useEffect(() => {
        let btnAdd = document.querySelector(".add-to-cart") as HTMLButtonElement | null;
        if (btnAdd) {
            btnAdd.onclick = addToCartFunc;
        }

    })
    const cartFunc = () => {
        let num = document.querySelector(".count span");
        let cartDiv = document.createElement("div");
        cartDiv.classList.add("cart");
        cartDiv.classList.add("font-700");
        document.body.appendChild(cartDiv);
        cartDiv.innerHTML = cart;
        if (realNumber > 0) {
            markUp =  `
            <img src={prudactImg.src} alt=""/>
            <p className="font-400">fall limited edition sneakers</p>
            <span className="price font-400"></span>
            <span className="order-number font-400"><span/>
            <span className="total"></span>
            <img src = ${deleteIcon.src} />
            <button>check out</button>
            `;;
            console.log(markUp);
        }
    } 
    useEffect(() => {
    }
    , []);
    const showMenuBar = () => {
        let navBar = document.querySelector("nav.responsive");
        let toggle = document.querySelector(".toggle") ;
        if (toggle?.hasAttribute("id")) {
            if (toggle.id === "false") {
                toggle.id = "true";
            } else {
                toggle.id = "false";
            }   
            if (toggle.id === "true") {
                navBar?.classList.remove("d-none");
                document.querySelector(".will-cover")?.classList.add("cover");
                navBar?.classList.add("flex");
                console.log("true");
            }else{
                navBar?.classList.add("d-none");
                document.querySelector(".will-cover")?.classList.remove("cover");
                console.log("false");
            }
        }
    }

    const close = () => {
        document.querySelector("nav.responsive")?.classList.add("d-none");
        document.querySelector(".will-cover")?.classList.remove("cover");
    };
    return (
        <>
            <header  className='flex justify-between align-center font-400'>
                <div className="logo flex justify-between align-center">
                    <button className='toggle' onClick={showMenuBar} id = {"false"}>
                        <img src={bar.src} alt="" />
                    </button>
                    <img src={logo.src} className='logo' alt="" />
                </div>
                <nav className=''>
                    <ul className='flex justify-between'>
                        <li>
                            <a href="">Collections </a>
                        </li>
                        <li>
                            <a href="">men</a>
                        </li>
                        <li>
                            <a href="">woman</a>
                        </li>
                        <li>
                            <a href="">about</a>
                        </li>
                        <li>
                            <a href="">contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="flex align-center font-400" >
                    <button type='button' onClick={cartFunc} id='shop'>
                        <img src={shop.src} alt="" />
                        <span className='number flex justify-center items-center'>0</span>
                    </button>
                    <img src={avatar.src} alt="" />
                </div>
            </header>
            <hr />
            <nav className='responsive d-none flex flex-col'>
                <button onClick={close} type="button">
                    <FontAwesomeIcon className='Xmark' icon={faXmark}/>
                </button>
                <ul className='flex   justify-between flex-col font-700'>
                    <li>
                        <a href="">Collections </a>
                    </li>
                    <li>
                        <a href="">men</a>
                    </li>
                    <li>
                        <a href="">woman</a>
                    </li>
                    <li>
                        <a href="">about</a>
                    </li>
                    <li>
                        <a href="">contact</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Header;
