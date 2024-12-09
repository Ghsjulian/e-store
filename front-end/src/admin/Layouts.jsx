import { Outlet, Navigate, useLocation } from "react-router-dom";
import "../styles/layouts.css";
import "./styles/admin.css";
// Imported The Bootsrtrap Icons
import "../styles/vendor/bootstrap-icons/bootstrap-icons.css";
import "../styles/vendor/boxicons/css/boxicons.min.css";
import "../styles/vendor/remixicon/remixicon.css";

import Header from "./Header"
const AdminLayouts = () => {
    return (
        <>
            <Header/>
            <main className="page-layout">
            <Outlet />
            </main>
        </>
    );
};

export default AdminLayouts;
