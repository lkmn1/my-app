import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./movie.css";

const img_url = " https://image.tmdb.org/t/p/original/";

function Movie(props) {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.url);
      setMovie(request.data.results);
    }
    fetchData();
  }, [props.url]);

  console.log(movies);
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='row_poster'>
        {movies.map((movie) => {
          return (
            <div>
            <img
              src={`${img_url}${movie.poster_path}`}
              className='img_poster'
              alt={movie.name}
              key={movie.id}
            />
            <p className="movie_title">{movie.title}</p></div>
          );
        })}
      </div>
    </div>
  );
}

export default Movie;
