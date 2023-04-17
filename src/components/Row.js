import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ isLargeRow, title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow">{"<"}</span>
        </div>
      </div>
      <div id={id} className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            loading="lazy"
            alt={movie.name}
          />
        ))}
      </div>
      <div className="slider__arrow-rigt">
        <span className="arrow">{">"}</span>
      </div>
    </section>
  );
};

export default Row;
