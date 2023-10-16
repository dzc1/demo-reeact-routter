import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "../components/movies/MovieCard";
export const Movies = () => {
  const [movies, setMovies] = useState([]);

  // Version 2
  useEffect(() => {
    const api = "3da1dd30c1b3099b08e011c1507b568c";
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setMovies(json.results);
        console.log(json.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div>
        <h1>List of Movies fetched from an api</h1>
        {/* {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))} */}
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={
              movie.title.length > 20
                ? `${movie.title.slice(0, 20)}...`
                : movie.title
            }
            release_date={movie.release_date}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </>
  );
};
