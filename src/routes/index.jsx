import { createBrowserRouter } from "react-router-dom";

import WebLayout from "../components/layout/WebLayout";
import About from "../pages/website/About";
import Landing from "../pages/website/Landing";
import ShopMain from "../pages/components/Shop-main";
import CollectionsMain from "../pages/components/Collections-main";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <WebLayout />,
        children: [
          { index: true, element: <Landing/> },
          { element: <ShopMain/>, path:"/shop-main"},
          { element: <CollectionsMain/>, path: "/collections-main" },
        ],
      },
    ],
  },
  {
    path: "/",
    children: [
      {
        element: <WebLayout />,
        children: [
       
          // {index:true, element: <ShopMain/>},
          { element: <About />, path: "about" },
        ],
      },
    ],
  },
]);

export default router;
