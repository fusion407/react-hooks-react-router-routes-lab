import React, { useState } from "react";
import { movies } from "../data";

function Movies() {
  const [movieList, setMovieList] = useState([...movies])

  const renderMovies = movieList.map((movie) => 
    <div>
      <h2>{movie.title}</h2>
      <h3>{movie.time}</h3>
      <ul>
        {movie.genres.map((genre) => 
          <li>
            {genre}
          </li>
        )}
      </ul>
    </div>
  )

  return(
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  );
}

export default Movies;
