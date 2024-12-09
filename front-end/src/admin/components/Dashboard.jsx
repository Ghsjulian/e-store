import React from "react";

const Dashboard = () => {
    return (
        <section>
            <h4>Admin/Dashboard/</h4>
            <div className="dashboard-grid">
                <div className="row">
                    <i className="bi bi-people"></i>
                    <h5>Total Customers </h5>
                    <span>345 Peoples</span>
                </div>
                <div className="row">
                    <i className="bi bi-coin"></i>
                    <h5>Total Earnings </h5>
                    <span>345 Dollar</span>
                </div>
                <div className="row">
                    <i className="bi bi-journals"></i>
                    <h5>Total Products</h5>
                    <span>345 Items</span>
                </div>
                <div className="row">
                    <i className="bi bi-plus-circle-dotted"></i>
                    <h5>New Products</h5>
                    <span>345 Items</span>
                </div>
                <div className="row">
                    <i className="bi bi-diagram-3"></i>
                    <h5>Store Categories</h5>
                    <span>34 Types</span>
                </div>
                <div className="row">
                    <i className="bi bi-bag-check"></i>
                    <h5>New Orders </h5>
                    <span>345 Orders</span>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
