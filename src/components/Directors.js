import React, { useState } from "react";
import { directors } from "../data";

function Directors() {
  const [directorList, setDirectorList] = useState([...directors])

  const renderDirectors = directorList.map((director) => 
    <div>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie) => 
          <li>
            {movie}
          </li>
        )}
      </ul>
    </div>
  )
  return(
    <>
      <h1>Directors Page</h1>
      {renderDirectors}
    </>
  );
}

export default Directors;
