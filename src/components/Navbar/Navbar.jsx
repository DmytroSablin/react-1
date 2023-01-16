import React from "react";
import classes from "./Navbar.module.css"
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div className={classes.content}>
            <NavLink to="/profile" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Profile</NavLink>
            <NavLink to="/messages" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Messages</NavLink>
            <NavLink to="/news" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>News</NavLink>
            <NavLink to="/music" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Music</NavLink>
        </div>
    )
}

export default Navbar