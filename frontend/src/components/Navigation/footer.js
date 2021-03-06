import React from 'react';

// import styles from "./Navigation.module.css";

function Footer () {
    //things

    return (
        <div className="footer__wrapper">
            <div className="footer__description">
                Creator: Jacob Weller
            </div>
            <div className="footer__links">
                <a href='https://www.linkedin.com/in/jacob-weller-592795161/' className="footer__links--linkedin">
                    <i className="fab fa-github"></i>
                </a>
                <a href='https://github.com/WellerJay118' className="footer__links--github">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer;
