import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonArr }) {
  const pokemonDisplay = pokemonArr.map((pokemon) => <PokemonCard pokemon={pokemon} />)
  
  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      {pokemonDisplay}
    </Card.Group>
  );
}

export default PokemonCollection;
