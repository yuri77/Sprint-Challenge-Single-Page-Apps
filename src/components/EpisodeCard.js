import React from "react";
import { Card, Icon, Label } from "semantic-ui-react";

export default function LocationCard({ episode }) {
  // image={image}
  console.log("episode props: ", episode);
  const { name, air_date, characters } = episode;

  let count = characters.length;
  const extra = <Label>{`${count} characters`}</Label>;

  return (
    <Card
      header={name}
      meta={air_date}
      description={episode.episode}
      extra={extra}
    />
  );
}
