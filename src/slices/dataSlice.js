import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonsDetails } from "../api";
import { setLoading } from "./uiSlice";



const initialState = {
    pokemons : [],
}

export const fechPokemonsWithDetails = createAsyncThunk(
    "data/fetchPokemonsWithDetails",
    async (_, { dispatch }) => {
        dispatch(setLoading(true))
        const pokemonsRes = await getPokemons();
        const pokemonsDetailed = await Promise.all(
          pokemonsRes.map((pokemon) => getPokemonsDetails(pokemon))
        );
    
        // Llamamos a setPokemons utilizando dispatch para actualizar el estado
        dispatch(setPokemons(pokemonsDetailed));
        dispatch(setLoading(false));

      }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        setPokemons : (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const pokemonIndex = state
            .pokemons
            .findIndex((pokemon) => pokemon.id === action.payload.pokemonId);
    
            if (pokemonIndex !== -1) {
                const isFavorite = state.pokemons[pokemonIndex].favorite;
                state.pokemons[pokemonIndex].favorite = !isFavorite;
            }
        
        }
    },
});

export const {setFavorite, setPokemons} = dataSlice.actions;
console.log(dataSlice);
export default dataSlice.reducer;