import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyRoutes from "./Router";
import { AuthProvider } from "./context/useAuth";

const router = createBrowserRouter(MyRoutes);
const App = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
};

export default App;
