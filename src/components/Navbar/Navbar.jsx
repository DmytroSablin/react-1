import React from "react";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

    let friends = props.state.friendsData.map(
        friend => <div className="friend">{friend.name}</div>
    )

    return (
        <div className="content">
            <NavLink to="/profile" >Profile</NavLink>
            <NavLink to="/dialogs" >Messages</NavLink>
            <NavLink to="/news" >News</NavLink>
            <NavLink to="/music" >Music</NavLink>
            <div className="friendstxt">
                Friends
            </div>
            <div className="friends">
                {friends}
            </div>
        </div>
    )
}

export default Navbar