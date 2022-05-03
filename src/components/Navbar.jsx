import React from "react";
import { NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar (){
    return(
        <div className="Navbar">
            <NavLink className="letter" to="/">Home</NavLink>
            <NavLink className="letter" to= "/about">About</NavLink>
        </div>
    );
}
export default Navbar;