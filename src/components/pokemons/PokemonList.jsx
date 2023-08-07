import React from 'react';
import PokemonCard from './PokemonCard';
import './style/sPokemonList.css';

const PokemonList = ({pokemons}) => {
  const joinAbilities = (abilitiesArray) => {
    const abilityNames = abilitiesArray.map((ability) => ability.ability.name);
    return abilityNames.join(', ');
  };

  return (
    <div className='PokemonList'>
        {pokemons.map((pokemon, index ) => {
            return(
                    
                <PokemonCard key={index}
                  name = {pokemon.name} 
                  img = {pokemon.sprites.front_default} 
                  ability = {joinAbilities(pokemon.abilities)}
                  id = {pokemon.id}
                  favorite={pokemon.favorite} ></PokemonCard>
                    
                ) 
                
        })
        }
    </div>
  )
};

PokemonList.defaultProps = {
    pokemons : Array(10).fill(''),
}

export default PokemonList;
