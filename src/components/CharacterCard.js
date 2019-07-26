import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function CharacterCard({ person }) {
  //console.log("CharCard's prop", person);
  const extra = (
    <a>
      <Icon name="user" />
      episodes
    </a>
  );

  return (
    <Card
      image={person.image}
      header={person.name}
      meta={person.species}
      description={`Location: ${person.location.name} \n Origin: ${
        person.origin.name
      }`}
      extra={extra}
    />
  );
}
