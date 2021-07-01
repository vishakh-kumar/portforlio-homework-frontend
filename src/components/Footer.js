import React from "react";
import { Link } from "react-router-dom";
const Footer = (props) => {
    return (
        <div className="footer">
            <p>
                <i class="far fa-copyright"></i> Vishakh Portfolio
                <Link to="https://www.instagram.com/vishakh_kumar/">
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link to="https://www.github.com/vishakh-kumar">
                    <i class="fab fa-github"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/vishakh-kumar/">
                    <i class="fab fa-linkedin"></i>
                </Link>
            </p>
        </div>
    );
};

export default Footer;
