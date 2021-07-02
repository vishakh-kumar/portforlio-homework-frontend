import React from "react";
import { Link } from "react-router-dom";
const Footer = (props) => {
    return (
        <div className="footer">
            <p>
                <i className="far fa-copyright"></i> Vishakh Portfolio
                <a
                    target="_blank"
                    href="https://www.instagram.com/vishakh_kumar/"
                >
                    <i className="fab fa-instagram"></i>
                </a>
                <a target="_blank" href="https://www.github.com/vishakh-kumar">
                    <i className="fab fa-github"></i>
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/vishakh-kumar/"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
            </p>
        </div>
    );
};

export default Footer;
