import React, { useState } from "react";
import { actors } from "../data";

function Actors() {
  const [actorList, setActorList] = useState([...actors])

  const renderActors = actorList.map((actor) => 
    <>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie) => 
          <li>
            {movie}
          </li>
        )}
      </ul>
    </>
  )
  return(
    <div>
      <h1>Actors Page</h1>
      <div>
      {renderActors}
      </div>
    </div>
  );
}

export default Actors;
