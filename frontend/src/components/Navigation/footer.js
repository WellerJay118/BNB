import React from 'react';
import { NavLink } from 'react-router-dom';
// import styles from "./Navigation.module.css";

function Footer ({ isLoaded }) {
    //things

    return (
        <>
            <div>
                <NavLink to='https://www.linkedin.com/in/jacob-weller-592795161/'> LinkedIn</NavLink>
                <NavLink to='https://github.com/WellerJay118'> Github</NavLink>
            </div>
        </>
    )
}

export default Footer;
