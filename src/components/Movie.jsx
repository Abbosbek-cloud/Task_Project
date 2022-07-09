import React from "react";
import { StarFilled, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { IMG_API } from "../api";

const Movie = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-lg">
      <div className="img">
        <img
          className="rounded-t-lg"
          src={`${IMG_API}${movie.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="px-3 py-4 border-2 rounded-b-lg">
        <p className="text-bold text-sm mb-2 h-14">{movie.title}</p>
        <p className="text-bold text-sm mb-2 h-14">{movie.original_title}</p>
        <p className="text-xs text-gray-600 mb-2 text-justify">
          {movie.overview.slice(0, 25)}
        </p>
        <div className="flex justify-between">
          <div className="flex" style={{ alignItems: "center" }}>
            <StarFilled style={{ fontSize: "16px", color: "#8194A5" }} />{" "}
            <p style={{ fontSize: "16px" }} className="mx-2">
              {movie.vote_average}
            </p>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <RightOutlined style={{ fontSize: "16px", color: "#8194A5" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
