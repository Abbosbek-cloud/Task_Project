import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY, BASE_URL } from "../api";
import { addToPopular } from "../app/ratedSlice";
import MovieContainer from "../components/MovieWrapper";

const Popular = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.movie.popularList);
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = () => {
    axios({
      url: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`,
      method: "get",
    }).then((res) => {
      dispatch(addToPopular({ movies: res.data.results }));
    });
  };

  console.log(data);
  console.log(loading);
  return <MovieContainer loading={loading} data={data.movies} />;
};

export default Popular;
