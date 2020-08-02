import React, { useState, useEffect } from 'react';
import './stylesheets/App.css';
import PokedexUI from './PokedexUI';
const PokedexAPI = require('pokedex-promise-v2');

function App() {

  const pokemonList = ['pikachu', 'eevee', 'snorlax', 'chansey', 'greninja', 'mew', 'charizard']

  const [index, setIndex] = useState(0)
  const [pokeDetails, setPokeDetails] = useState(null)

  const flipShiny = () => {
    return Math.floor(Math.random() * Math.floor(2))
  }

  var P = new PokedexAPI();

  let getPokemonInfo = (pokemon) => {
    P.getPokemonSpeciesByName(pokemon) // with Promise
      .then(response => {

        let name = response.name

        let description = response.flavor_text_entries.filter(x => x.language.name === 'en')[0].flavor_text

        let genus = response.genera.filter(x => x.language.name === 'en')[0].genus

        P.getPokemonByName(pokemon)
          .then(response => {
            let height = response.height * 10
            let weight = response.weight / 10
            let sprite = flipShiny() === 0 ? response.sprites.front_default : response.sprites.front_shiny
            let details = { "name": name, "description": description, "genus": genus, "height": height, "weight": weight, "sprite": sprite }
            setPokeDetails(details)
          })
          .catch(error => {
            console.log('There was an ERROR: ', error);
          })

      })
      .catch(error => {
        console.log('There was an ERROR: ', error);
      });
  }

  useEffect(() => {
    getPokemonInfo(pokemonList[index])
  }, [index])

  let rightArrowClick = () => {
    index < pokemonList.length - 1 ? setIndex(index + 1) : setIndex(0)
  }

  let leftArrowClick = () => {
    index > 0 ? setIndex(index - 1) : setIndex(pokemonList.length - 1)
  }
  
  const getQueryString = (queries) => {
      return Object.keys(queries).reduce((result, key) => {
          return [...result, `${encodeURIComponent(key)}=${encodeURIComponent(queries[key])}`]
      }, []).join('&');
    };

  let getPokemonAudio = () => {
    let pokemon = pokeDetails.name
    let text = (pokeDetails.name + ' the ' + pokeDetails.genus + ' ' + pokeDetails.description).replace(/(\r\n|\n|\r)/gm, " ").toLowerCase().replace(',', '').replace('.', '')
    let queryString = getQueryString({"text": text, "pokemon" : pokemon})
    fetch('http://localhost:5002/api/tts?' + queryString)
    .then(
      data => data.json()
    )
    .then(
      (json) => {
        let voice = new Audio(json.url)
        voice.play()
      }
    )
  }

  return (
    <div className="App">
      <PokedexUI
        rightArrowClick={rightArrowClick}
        leftArrowClick={leftArrowClick}
        pokeDetails={pokeDetails}
        getPokemonAudio={getPokemonAudio}
      />
    </div>
  );
}

export default App;
