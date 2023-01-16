import React from "react";
import classes from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={classes.content}>
            <img src="https://scalebranding.com/wp-content/uploads/2022/02/Lion-9.jpg" alt="logo" />
            <h1>Sabnet</h1>
        </div>
    )
}

export default Header