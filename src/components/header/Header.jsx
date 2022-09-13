import React, { Fragment, useState } from "react";
import Navbar from "./Navbar";
import "./header.css"
const Header = ({ data }) => {
    
    return(
        <header class="sticky top-0 z-50 custom-header-container">
            <Navbar/>
        </header>
        
    );
};

export default Header;
