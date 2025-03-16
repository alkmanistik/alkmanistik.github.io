import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router";
import './index.css';

import DefaultPage from "./ui/pages/DefaultPage.tsx";
import HomePage from "./ui/pages/HomePage.tsx";
import WorksPage from "./ui/pages/WorksPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultPage/>,
        errorElement: <Navigate to="/home" replace />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />,
            },
            {
                path: '/works',
                element: <Navigate to="/works/aseprite" replace />,
            },
            {
                path: '/home',
                element: <HomePage/>,
            },
            {
                path: '/works/:typeWork',
                element: <WorksPage/>,
            },
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
