import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(data => console.log(setPokemonData(data)))
  }, [])

  //SEARCH:
  const [search, setSearch] = useState("")
  function handleSearch(e){
    setSearch(e.target.value)
  }
  const pokemonList = pokemonData.filter((pokemon)=>{
    if(search === ""){
      return true
    }
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })

  //FORM:
  const [name, setName] = useState("");
  const [hp, setHp] = useState(0);
  const [frontImg, setFrontImg] = useState("");
  const [backImg, setBackImg] = useState("");
  function handleName(e){
    setName(e.target.value)
  }
  function handleHp(e){
    setHp(e.target.value)
  }
  function handleFrontImg(e){
    setFrontImg(e.target.value)
  }
  function handleBackImg(e){
    setBackImg(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    const newPokemon = {name: name, hp: hp, sprites:{front: frontImg, back: backImg}}
    const newPokemonList = [...pokemonData, newPokemon]

    fetch("http://localhost:3001/pokemon",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
    .then(res => res.json())
    .then(() => setPokemonData(newPokemonList))
  }



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        handleSubmit={handleSubmit} 
        handleName={handleName} 
        handleHp={handleHp} 
        handleFrontImg={handleFrontImg}
        handleBackImg={handleBackImg} 
        />
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemonData={pokemonList}/>
    </Container>
  );
}

export default PokemonPage;
