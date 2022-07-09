import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Movie from "../components/Movie";
import MovieContainer from "../components/MovieWrapper";

const Favourites = () => {
  const { favList } = useSelector((state) => state.movie);

  console.log(favList);
  return (
    <div className="px-3">
      <h1 className="text-bold text-center">Favourites</h1>
      {favList.length ? (
        <div className="grid px-2 pb-14 gap-1 mt-4 md:gap-x-3.5 md:gap-y-2 grid-cols-2 md:grid-cols-6">
          {favList.map((favFilm) => (
            <Movie movie={favFilm} />
          ))}
        </div>
      ) : (
        <p className="p-5 bg-red-400 rounded-xl text-white text-3xl text-center mt-10">
          You have not chosen films yet!!!
        </p>
      )}
    </div>
  );
};

export default Favourites;
