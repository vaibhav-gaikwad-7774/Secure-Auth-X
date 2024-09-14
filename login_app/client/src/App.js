import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import all components
import Username from "./components/Username";
import Reset from "./components/Reset";
import Register from "./components/Register";
import Recovery from "./components/Recovery";
import Profile from "./components/Profile";
import Password from "./components/Password";
import PageNotFound from "./components/PageNotFound";

// Define Routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <Username />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/reset',
        element: <Reset />
    },
    {
        path: '/recovery',
        element: <Recovery />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/password',
        element: <Password />
    },
    {
        path: '*',
        element: <PageNotFound />
    },
]);

export default function App() {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
}
