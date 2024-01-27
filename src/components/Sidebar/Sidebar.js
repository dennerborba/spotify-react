import React from "react";
import './Sidebar.css'
import logoSpotify from '../../assets/icons/logo-spotify.png'

const Sidebar = () => {
    return (
        <div className="sidebar">
        <nav className="sidebar__navigation">
            <div className="logo">
                <a href="">
                    <img src={logoSpotify} alt="logo spotify"/>
                </a>
            </div>
            <ul>
                <li>
                    <a href="">
                        <span className="fa fa-home"></span>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className="fa fa-search"></span>
                        <span>Search</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div className="library">
            <div className="library__content">
                <button className="library__button">
                    <span className="fa fas fa-book"></span>
                    <span>Your Library</span>
                </button>
                <span className="fa fa-plus"></span>
            </div>
            <section className="section-playlist">
                <div className="section-playlist__content">
                    <span className="text title">Create your first playlist</span>
                    <span className="text subtitle">It's easy, we'll help you</span>
                    <button className="section-playlist__button">
                        <span>Create playlist</span>
                    </button>
                </div>
            </section>

            <section className="section-podcast">
                <div className="section-podcast__content">
                    <span className="text title">Let's find some podcasts to follow</span>
                    <span className="text subtitle">We'll keep you updated on new episodes</span>
                    <button className="section-podcast__button">
                        <span>Browse podcasts</span>
                    </button>
                </div>
            </section>

            <div className="cookies">
                <a href="">Cookies</a>
            </div>
            <div className="languages">
                <button className="languages__button">
                    <span className="fa fa-globe"></span>
                    <span>English</span>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Sidebar;