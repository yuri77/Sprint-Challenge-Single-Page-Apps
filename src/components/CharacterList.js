import React, { useEffect, useState } from "react";
//import axios from "axios";

export default function CharacterList() {
  const [char, setChar] = useState([]);

  // useEffect(() => {
  //   const getCharacters = () => {
  //     axios
  //       .get("https://rickandmortyapi.com/api/character/")
  //       .then(response => {
  //         console.log("characters: ", response);
  //       })
  //       .catch(error => {
  //         console.log("Character fetching is currently down", error);
  //       });
  //   };
  //   getCharacters();
  // }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
