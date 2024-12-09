import { Navigate } from "react-router-dom";

//import Users components and pages here...
import Layouts from "./layouts/Layouts";
import Login from "./components/Login";
import Signup from "./components/Signup";

//import Admin components and pages here...
import AdminLayouts from "./admin/Layouts";
import Dashboard from "./admin/components/Dashboard";
import AddProduct from "./admin/components/AddProduct";

const MyRoutes = [
    {
        path: "/admin",
        element: <AdminLayouts />,
        children: [
            { index: true, element: <Dashboard /> },
            { path:"/admin/add-priduct", element: <AddProduct /> },
        ]
    },
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                index: true,
                element: <h2>Home Page</h2>
            }
        ]
    },
    {
        path : "/login",
        element : <Login/>
    },
    {
        path : "/signup",
        element : <Signup/>
    },
];
export default MyRoutes;
