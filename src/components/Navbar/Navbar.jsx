import React from "react";
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div className="content">
            <NavLink to="/profile" >Profile</NavLink>
            <NavLink to="/dialogs" >Messages</NavLink>
            <NavLink to="/news" >News</NavLink>
            <NavLink to="/music" >Music</NavLink>
        </div>
    )
}

export default Navbar