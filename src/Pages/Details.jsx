import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_KEY, BASE_URL, IMG_API } from "../api";
import { addToFav, setSelected } from "../app/ratedSlice";
import { StarFilled } from "@ant-design/icons";

const Details = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.movie);
  useEffect(() => {
    axios({
      url: `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US `,
      method: "get",
    }).then((res) => {
      dispatch(setSelected(res.data));
    });
  }, [movieId]);
  const [year] = selected.release_date.split("-").slice(0, 1);
  console.log(year);

  console.log(movieId);
  console.log(selected);
  return (
    <>
      {!selected ? (
        <p>Loading...</p>
      ) : (
        <div className="px-3 py-3 pb-14">
          <div className="img-wrapper flex justify-center">
            <img
              className="w-3/4"
              src={`${IMG_API}${selected.backdrop_path}`}
              alt=""
            />
          </div>
          <div className="w-3/4 mx-auto">
            <h1 className="text-4xl">{selected.title}</h1>
            <div className="flex justify-between py-3">
              <div>
                <p className="text-2xl text-bold text-gray-400">
                  {selected.original_title}
                </p>
              </div>
              <div
                className="flex cursor-pointer"
                onClick={() => dispatch(addToFav(selected))}
                style={{ alignItems: "center" }}
              >
                <StarFilled /> <p className="ml-2">{selected.vote_average}</p>
              </div>
            </div>
          </div>
          <div className="w-3/4 mx-auto flex justify-between">
            <p>{selected.tagline}</p>
            <p>{year}</p>
          </div>

          <div className="w-3/4 mx-auto">
            <p className="text-2xl">Overview</p>
            <p>{selected.overview}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
