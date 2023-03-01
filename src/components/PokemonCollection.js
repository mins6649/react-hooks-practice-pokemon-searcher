import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonData}) {

  const pokemonList = pokemonData.map((pokemon) => {
    return <PokemonCard 
    key={pokemon.id}
    name={pokemon.name}
    hp={pokemon.hp}
    frontImg={pokemon.sprites.front}
    backImg={pokemon.sprites.back} 
    />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
