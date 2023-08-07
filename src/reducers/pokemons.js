
import { fromJS } from 'immutable';
import {SET_FAVORITE, SET_POKEMONS} from '../actions/types';


const initialState = fromJS({
    pokemons: [],
});


const pokemonsReducers = (state, action) => ({
    [SET_POKEMONS]: () => state.set('pokemons', fromJS(action.payload)),
    [SET_FAVORITE]: () => {
      const pokemonIndex = state
        .get('pokemons')
        .findIndex((pokemon) => pokemon.get('id') === action.payload.pokemonId);
  
      if (pokemonIndex !== -1) {
        return state.updateIn(['pokemons', pokemonIndex, 'favorite'], (favorite) => !favorite);
      }
  
      return state;
    },
  });
  
  export const reducerPokemons = (state = initialState, action) => pokemonsReducers(state, action)[action.type]?.() || state;
