import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <footer className="sign_up">
                <div className="text-footer">
                    <p className="textPreview">Preview of Spotify</p>
                    <p className="textSignUp">Sign up to get unlimited songs and podcasts with occasional ads. No credit card
                        needed.</p>
                </div>
                <div>
                    <button className="signUp_button">Sign up for free</button>
                </div>
            </footer>
        </div>
    )
}

export default Footer;