import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
   
} from "react-router-dom";
import MyRoutes from "./Router";

const router = createBrowserRouter(MyRoutes);
const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
