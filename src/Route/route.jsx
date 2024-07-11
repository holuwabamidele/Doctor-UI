import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";

export const mainRoute = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
    ],
  },
]);
