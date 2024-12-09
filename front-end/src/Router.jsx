import { Navigate } from "react-router-dom";

//import Users components and pages here...
import Layouts from "./layouts/Layouts";

//import Admin components and pages here...
import AdminLayouts from "./admin/Layouts";
import Dashboard from "./admin/components/Dashboard";

const MyRoutes = [
    {
        path: "/admin",
        element: <AdminLayouts />,
        children: [
            {   index:true,
                element: <Dashboard/>
            }
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
];
export default MyRoutes;
