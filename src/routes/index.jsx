import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/website/Home";
import WebLayout from "../components/layout/WebLayout";
import About from "../pages/website/About";
import Landing from "../pages/website/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <WebLayout />,
        children: [
          { index: true, element: <Landing/> },
          { element: <About />, path: "about" },
        ],
      },
    ],
  },
]);

export default router;
