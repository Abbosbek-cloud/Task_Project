import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import axios from "axios";
import { API_KEY, BASE_URL } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addToRated } from "../app/ratedSlice";
import MovieContainer from "../components/MovieWrapper";
import Loader_m from "../components/Loader_m";

const Movies = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.movie.ratedList);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = () => {
    axios({
      url: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
      method: "get",
    }).then((res) => {
      dispatch(addToRated({ movies: res.data.results }));
    });
  };

  return <MovieContainer loading={loading} data={data.movies} />;
};

export default Movies;
