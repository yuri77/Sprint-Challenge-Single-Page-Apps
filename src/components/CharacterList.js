import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          setChar(response.data.results);
          console.log("API Response for char package: ", response.data.results);
        })
        .catch(error => {
          console.log("Character fetching is currently down", error);
        });
    };
    getCharacters();
  }, []);

  return (
    <section className="character-list grid-view">
      {char.map(person => (
        <CharacterCard key={person.id} person={person} />
      ))}
      ;
    </section>
  );
}
