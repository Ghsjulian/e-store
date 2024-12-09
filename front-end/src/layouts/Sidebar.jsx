import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <h3>Main Menu</h3>
            <div className="search">
                <input type="text" placeholder="Search..." />
                <i className="bi bi-search"></i>
            </div>
            <div className="side-links">
                <NavLink to="/">
                    <i className="bi bi-house"></i>
                    <span>Home</span>
                </NavLink>
                <NavLink to="/">
                    <i className="bi bi-person"></i>
                    <span>Profile</span>
                </NavLink>
                <NavLink to="/">
                    <i className="bi bi-shield"></i>
                    <span>Sign In</span>
                </NavLink>
                <NavLink to="/">
                    <i className="bi bi-shield-plus"></i>
                    <span>Sign Up</span>
                </NavLink>
                <NavLink to="/">
                    <i className="bi bi-bell"></i>
                    <span>Notifications</span>
                    <div className="noti-budget">5</div>
                </NavLink>
                <NavLink to="/">
                    <i className="bi bi-bag-check"></i>
                    <span>My Orders</span>
                    <div className="order-budget">3</div>
                </NavLink>
                <NavLink to="/">
                    <i className="bi bi-cart2"></i>
                    <span>Cart List</span>
                    <div className="cart-budget">7</div>
                </NavLink>
                <NavLink to="/">
                    <i className="bi bi-info-circle"></i>
                    <span>About US</span>
                </NavLink>
                <NavLink to="/">
                    <i className="bi bi-telephone-inbound"></i>
                    <span>Contact US</span>
                </NavLink>
                <NavLink to="/">
                    <i className="bi bi-reception-3"></i>
                    <span>Terms And Conditions</span>
                </NavLink>
                <NavLink to="/">
                    <i className="bi bi-gear"></i>
                    <span>Settings</span>
                </NavLink>
                <NavLink to="/">
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                </NavLink>
            </div>
        </>
    );
};

export default Sidebar;
