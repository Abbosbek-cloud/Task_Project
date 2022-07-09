import React from "react";
import Loader_m from "./Loader_m";
import Movie from "./Movie";

const MovieContainer = ({ loading, data }) => {
  return (
    <div
      style={{
        height: "calc(100vh - 89px - 60px)",
        position: "absolute",
        top: "89px",
        overflowY: "auto",
      }}
      className="grid px-2 pb-10 gap-1 mt-4 md:gap-x-3.5 md:gap-y-2 grid-cols-2 md:grid-cols-6"
    >
      {loading ? (
        <Loader_m />
      ) : (
        data.map((item) => <Movie key={item.id} movie={item} />)
      )}
    </div>
  );
};

export default MovieContainer;
