import React from "react";
import Navbar from "../blocks/navigations/Navbar";
import { Outlet } from "react-router-dom";

const WebLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default WebLayout;
