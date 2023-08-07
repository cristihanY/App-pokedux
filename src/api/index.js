
import axios from "axios";


export const getPokemons = () =>{
    const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

    return  axios
    .get(API_URL)
    .then(res => res.data.results)
    .catch((err) => console.log(err));
};

export const getPokemonsDetails = (pokemon) => {
        return axios.get(pokemon.url)
        .then(res => res.data)
        .catch((err) => console.log(err));
}

