import React, { useEffect } from "react";

import MovieListing from "../MoiveListing/MoiveListing";

import { useDispatch } from "react-redux";
import {fetchAsyncMovies ,fetchAsyncShows} from "../../feature/moives/movieSlice";
const Home = () => {
    const dispatch =useDispatch()
    useEffect(() => {
      dispatch(fetchAsyncMovies())
      dispatch(fetchAsyncShows())
    },[dispatch])
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;