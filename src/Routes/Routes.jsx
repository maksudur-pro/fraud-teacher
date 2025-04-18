import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Result from "../pages/Result";
import Report from "../pages/Report";
import Login from "../pages/Login";

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
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error 909</h1>,
  },
]);
