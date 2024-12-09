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
                <NavLink to="/admin/dashboard">
                    <i className="bi bi-grid"></i>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="/admin/profile">
                    <i className="bi bi-person"></i>
                    <span>Profile</span>
                </NavLink>
                <NavLink to="/admin/notification">
                    <i className="bi bi-bell"></i>
                    <span>Notifications</span>
                    <div className="noti-budget">5</div>
                </NavLink>
                <NavLink to="/admin/orders">
                    <i className="bi bi-bag-check"></i>
                    <span>Orders</span>
                     <div className="order-budget">3</div>
                </NavLink>
                <NavLink to="/admin/categories">
                    <i className="bi bi-diagram-3"></i>
                    <span>Categories</span>
                </NavLink>
                <NavLink to="/admin/add-product">
                    <i className="bi bi-plus-circle-dotted"></i>
                    <span>Add Product</span>
                </NavLink>
                <NavLink to="/admin/all-product">
                    <i className="bi bi-journals"></i>
                    <span>All Products</span>
                </NavLink>
                <NavLink to="/admin/customer">
                    <i className="bi bi-people"></i>
                    <span>Customers</span>
                </NavLink>
                <NavLink to="/admin/settings">
                    <i className="bi bi-gear"></i>
                    <span>Settings</span>
                </NavLink>
                <NavLink to="/admin/sign-out">
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                </NavLink>
            </div>
        </>
    );
};

export default Sidebar;
