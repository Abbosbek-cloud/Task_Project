import React from "react";
import { StarOutlined, SlidersOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dropDown } from "../app/ratedSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isDropdown } = useSelector((state) => state.movie);
  const { favList } = useSelector((state) => state.movie);

  return (
    <>
      <nav className="flex shadow-black shadow-sm justify-between px-4 py-2">
        <div>
          <span
            className="font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            MovieDB
          </span>
        </div>
        <div className="flex justify-between">
          <div
            onClick={() => navigate("/favourites")}
            className="hover:text-red-600 hover:cursor-pointer mx-2"
          >
            <StarOutlined style={{ fontSize: "16px", color: "#051A37" }} />{" "}
            <span className="bg-red-800 text-white mr-1 mb-2 text-xs p-1 rounded-lg">
              {favList.length}
            </span>
          </div>
          <div
            className="hover:text-red-600 hover:cursor-pointer"
            onClick={() => dispatch(dropDown())}
          >
            <SlidersOutlined style={{ fontSize: "16px", color: "#051A37" }} />
          </div>
        </div>
      </nav>

      <div
        className={`${
          isDropdown ? "block" : "hidden"
        } absolute right-3 bg-slate-600 z-50`}
      >
        <ul>
          <li
            onClick={() => {
              navigate("/popular");
              dispatch(dropDown());
            }}
            className="hover:bg-slate-300 cursor-pointer p-1"
          >
            Popularity
          </li>
          <li
            onClick={() => {
              navigate("/");
              dispatch(dropDown());
            }}
            className="hover:bg-slate-300 cursor-pointer p-1"
          >
            By Rate
          </li>
          <li
            onClick={() => {
              navigate("/favourites");
              dispatch(dropDown());
            }}
            className="hover:bg-slate-300 cursor-pointer p-1"
          >
            Favourites
          </li>
        </ul>
      </div>
      <div className="px-3">
        <h1 className="text-2xl">Hello verycreatives</h1>
        <p className="text-sm px-2 text-gray-400 ">Check these movies out</p>
      </div>
    </>
  );
};

export default Navbar;
