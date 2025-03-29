"use client";

import React, { MouseEventHandler, useEffect } from 'react'
import "./Header.css"; 

// Import assets:
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import bar from "../images/icon-menu.svg";
import shop from "../images/icon-cart.svg";
const Header = () => {
    const cart = `
        <div>
            <h4>cart</h4>
            <hr>
            <div>
                <img src={prudactImg.src} alt=""/>
                <p>fall limited edition sneakers</p>
                <span className="price"></span>
                <span className="total"></span>
                <img src = {delete.src} />
            </div>
            <button>check out</button>
        </div>
    `;


    function showMenuBar() {
        useEffect(() => {
            let navBar = document.querySelector("nav.flex");
            let toggle = document.querySelector(".toggle") ;
            if (toggle?.hasAttribute("id")) {
                if (toggle.id === "false") {
                    toggle.id = "true";
                } else {
                    toggle.id = "false";
                }
                if (toggle.id === "false") {
                    navBar?.classList.add("d-none");
                    navBar?.classList.remove("flex");
                } else {
                    navBar?.classList.add("flex");
                    navBar?.classList.remove("d-none");
                }
            }
        });
    }

    return (
        <header  className='flex justify-between'>
            <img src={logo.src} alt="" />
            <nav className='flex justify-between'>
                <ul>
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
            <div></div>
            <button><img src={shop.src} alt="" /></button>
            <img src={avatar.src} alt="" />
            <button className='d-none toggle' id = {"false"}>
                <img src={bar.src} alt="" />
            </button>
        </header>
    )
}

export default Header;
