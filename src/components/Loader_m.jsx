import React from "react";
import Popcorn from "../img/popcorn.png";

const Loader_m = () => {
  return (
    <div
      className="first-loader w-screen h-screen flex justify-center"
      style={{ alignItems: "center" }}
    >
      <div>
        <div className="flex justify-center pb-3">
          <img src={Popcorn} alt="" />
        </div>
        <p className="text-2xl text-bold" style={{ color: "#DDE3E8" }}>
          MovieDB
        </p>
      </div>
    </div>
  );
};

export default Loader_m;
