import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopNavbar() {

    const toggleBtn = useRef();
    const container = useRef();
    const ul = useRef();
    const pages = [...document.querySelectorAll('.page')];
    const overlay = document.querySelector('.overlay');
    const links = [...document.querySelectorAll('.link')];

    let currentPageIndex = 0;

    const toggleClickHandler=  () => {
        toggleBtn.current.classList.toggle('active')
        container.current.classList.toggle('active');
        ul.current.classList.toggle('show');
    }

    const changePage = (i) => {
        overlay.style.animation = `slide 1s linear 1`;
        setTimeout(() => {
            pages[currentPageIndex].classList.remove('active');
            pages[i].classList.add('active');
            currentPageIndex = i;
        }, 500);
        setTimeout(() => {
            overlay.style.animation = null;
        }, 1000);
    }

    links.forEach((item, i) => {
        item.addEventListener('click', () => {
            changePage(i);
        })
    })
    return (
        <div className='navbar-container'>
            <nav className="navbar">
                <p className="brand neonText">GameGlider</p>
                <div onClick={toggleClickHandler} ref={toggleBtn} className="toggle-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            <ul ref={ul} className="nav-list">
                <li className="link">home</li>
                <li className="link">Tournament</li>
                <li className="link">News</li>
                <li className="link">project</li>
                <li className="link">about</li>
            </ul>

            <header ref={container} className="page-container">
                <span className="overlay"></span>
                <section className="page home active">
                    {/* <p className="title">home</p> */}
                </section>
                <section className="page project">
                    <p className="title">project</p>
                </section>
                <section className="page about">
                    <p className="title">about</p>
                </section>
            </header>
        </div>
    );
}

export default TopNavbar;