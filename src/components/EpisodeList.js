import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function LocationsList() {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    const getLocations = () => {
      axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then(response => {
          console.log(
            "API Response for episodes package: ",
            response.data.results
          );
          setEpisodes(response.data.results);
        })
        .catch(error => {
          console.log("Episodes fetching is currently down", error);
        });
    };
    getLocations();
  }, []);

  return (
    <div className="episode-list grid-view">
      {episodes.map(episode => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
}
