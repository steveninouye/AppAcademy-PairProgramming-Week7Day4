import { fetchAllPokemon } from "../util/api_util";
import { get } from "https";

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon: pokemon
});

export const getAllPokemon = () => dispatch => {
    fetchAllPokemon().then(allPokemon => {
        dispatch(receiveAllPokemon(allPokemon));
    });
};
