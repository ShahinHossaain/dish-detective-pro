import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";
import Main from "./Layouts/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Blogs from "./components/Blogs/Blogs";
import ChefDetails from "./components/ChefDetails/ChefDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import PrivatetRouter from "./PrivateRouter/PrivatetRouter";
import AboutUs from "./components/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://dish-detective-server-shahinhossaain.vercel.app/"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivatetRouter>
            <ChefDetails></ChefDetails>
          </PrivatetRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://dish-detective-server-shahinhossaain.vercel.app/${params.id}`
          ),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
