import { Outlet, Navigate, useLocation } from "react-router-dom";
import "../styles/layouts.css";
import "../styles/login.css";
// Imported The Bootsrtrap Icons
import "../styles/vendor/bootstrap-icons/bootstrap-icons.css";
import "../styles/vendor/boxicons/css/boxicons.min.css";
import "../styles/vendor/remixicon/remixicon.css";

import Header from "./Header"
const Layouts = () => {
    return (
        <>
            <Header/>
             <main className="page-layout">
            <Outlet />
            </main>
        </>
    );
};

export default Layouts;
