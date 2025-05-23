import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Result from "../pages/Result";
import Report from "../pages/Report";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/report",
        element: <Report />,
      },
      // {
      //   path: "/allReport",
      //   element: <AllReports />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
