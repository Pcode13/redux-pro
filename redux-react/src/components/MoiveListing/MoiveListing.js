import React from 'react';
import { useSelector } from 'react-redux';
import { getAllmovies,getAllShows } from '../../feature/moives/movieSlice';
import MovieCard from '../MovieCard/MoiveCard';
const MovieListing = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    const movies =useSelector(getAllmovies);
    const shows = useSelector(getAllShows);
    console.log(movies,"Movie")
    let renderMovies,renderShows = "";



    renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );


    renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );


    return (
        <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">{renderMovies}</div>
        </div>
        <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
      </div>
    );
};

export default MovieListing;