import React from "react";
import { Card, Icon, Label } from "semantic-ui-react";

export default function LocationCard({ location }) {
  // image={image}
  //console.log("location props: ", props.props);
  const { name, type, dimension, residents } = location;

  let count = residents.length;
  const extra = <Label>{`${count} residents`}</Label>;

  return (
    <Card header={name} meta={type} description={dimension} extra={extra} />
  );
}
