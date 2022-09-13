import React, { useRef, useEffect } from 'react'
import './playerDashboard.css'
import { AiOutlineTeam, AiOutlineHome } from 'react-icons/ai'
import { IoGameControllerOutline } from 'react-icons/io5'
import { BsTrophy } from 'react-icons/bs'
import { RiTeamLine } from 'react-icons/ri'
import { BiMenu } from 'react-icons/bi'
const PlayerDashboard = () => {


    // const toggle = useRef(null);
    // const navbar = useRef(null);
    // const bodyy = useRef(null);

   

    const handleClick = () => {
        const toggle = document.getElementById("nav-toggle");
        const navbar = document.getElementById("navbar");
        const bodyy = document.getElementById("dashboard-container");
        if (toggle && navbar) {
            toggle.current.addEventListener("click", () => {
                navbar.current.classList.toggle("expander");
                bodyy.current.classList.toggle("body-pd");
            });
            console.log(toggle.current);
        }
    }



    /* == Active attribute == */
    const linkColor = document.querySelectorAll(".nav_link");
    function colorLink() {
        linkColor.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
    }
    linkColor.forEach((item) => item.addEventListener("click", colorLink));

    /* == Collapse Menu == */
    const linkCollapse = document.getElementsByClassName("collapse_link");
    for (let i = 0; i < linkCollapse.length; i++) {
        linkCollapse[i].addEventListener("click", function () {
            const collapseMenu = this.nextElementSibling;
            collapseMenu.classList.toggle("showCollapse");

            const rotate = collapseMenu.previousElemntSibling;
            rotate.classList.toggle("rotate");
        });
    }


    return (
        <div className='dashboard-container' id="dashboard-container">
            <div className="dashboard-inner-container" id="navbar">
                <nav className="nav">
                    <div>
                        <div className="nav_brand">
                            <BiMenu className='nav_icon' id="nav-toggle" onClick={handleClick} />
                            <a href="#" className="nav_logo">Dashboard</a>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <a href="#" className="nav_link active">
                                <AiOutlineHome className='nav_icon' />
                                <span className="nav_name">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav_link">
                                <AiOutlineTeam className='nav_icon' />
                                <span className="nav_name">Friends</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav_link">
                                <IoGameControllerOutline className='nav_icon' />
                                <span className="nav_name">Games</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav_link">
                                <BsTrophy className='nav_icon' />
                                <span className="nav_name">Tournaments</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav_link">
                                <RiTeamLine className='nav_icon' />
                                <span className="nav_name">Team</span>
                            </a>
                        </li>
                    </ul>
                    <a href="#" className="nav_link">
                        <AiOutlineTeam className='nav_icon' />
                        <span className="nav_name">Log Out</span>
                    </a>
                </nav>
            </div>
            <h1>Hello Prateek, Welcome!</h1>
        </div>
    )
}

export default PlayerDashboard