import React, { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isOpen, SetMenu] = useState(false);
    const menuRef = useRef(null);
    const openMenu = () => {
        SetMenu(!isOpen);
        menuRef.current.classList.toggle("m-menu");
    };
    const closeMenu = () => {
        SetMenu(false);
        menuRef.current.classList.remove("m-menu");
    };
    return (
        <>
            <header>
                <div className="logo">E-Store</div>
                <div className="header-links">
                    <div className="search">
                        <input type="text" placeholder="Search..."/>
                        <i className="bi bi-search"></i>
                    </div>
                    <NavLink to="/">
                        <i className="bi bi-bell"></i>
                    </NavLink>
                    <NavLink to="/">
                        <i className="bi bi-cart"></i>
                    </NavLink>
                    <NavLink to="/">
                        <i className="bi bi-person-circle"></i>
                    </NavLink>
                </div>
                <button onClick={openMenu} className="m-btn">
                    <i className="bi bi-list"></i>
                </button>
            </header>
            <aside ref={menuRef} className="desk">
                <Sidebar />
            </aside>
            <div onClick={closeMenu} className={isOpen && "overly"}></div>
        </>
    );
};

export default Header;
