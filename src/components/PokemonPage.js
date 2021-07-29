import React, {useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArr, setPokemonArr] = useState([])
  //const [searchVar, setSearchVar] = useState('')
  
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
     .then(r => r.json())
     .then(data => {
       setPokemonArr(data)
       //console.log("after fetch:", pokemonArr)
      })
  }, [])
  
  const searchFunction = (e) => {
    console.log("searchFunction fired!", e.target.value)
    if (e.target.value.length > 1) {
      const pokemonFilter = pokemonArr.filter((pokemon) => pokemon.name.toLowerCase().includes(e.target.value.toLowerCase()))
      console.log(pokemonFilter)
      return pokemonFilter
    } else {
      return pokemonArr
    }
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchFunction={searchFunction} //setSearchVar={setSearchVar} searchVar={searchVar} 
      />
      <br />
      <PokemonCollection pokemonArr={searchFunction()} />
    </Container>
  );
}

export default PokemonPage;
