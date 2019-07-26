import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const getLocations = () => {
      axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(response => {
          console.log(
            "API Response for locations package: ",
            response.data.results
          );
          setLocations(response.data.results);
        })
        .catch(error => {
          console.log("Locations fetching is currently down", error);
        });
    };
    getLocations();
  }, []);

  return (
    <div className="location-list grid-view">
      {locations.map(location => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
}
