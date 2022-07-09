import React from "react";
import { DesktopOutlined, UserOutlined, StarOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "red",
  };

  let activeClassName = "underline";
  return (
    <footer className="flex bg-white z-50 justify-between w-screen fixed bottom-0 px-12 py-3 shadow-xl shadow-black md:justify-center">
      <div className="flex-col justify-center md:mx-8 cursor-pointer">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="flex justify-center">
            <DesktopOutlined style={{ fontSize: "16px", color: "#051A37" }} />
          </div>
          <p className="font-bold text-xs">Movies</p>
        </NavLink>
      </div>
      <div className="flex-col justify-center md:mx-8 cursor-pointer">
        <NavLink
          to="/favourites"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="flex justify-center">
            <StarOutlined style={{ fontSize: "16px", color: "#051A37" }} />
          </div>
          <p className="font-bold text-xs">Favourites</p>
        </NavLink>
      </div>
      <div className="flex-col justify-center md:mx-8 cursor-pointer">
        <div className="flex justify-center">
          <UserOutlined style={{ fontSize: "16px", color: "#051A37" }} />
        </div>
        <p className="font-bold text-xs">Profile</p>
      </div>
    </footer>
  );
};

export default Footer;
