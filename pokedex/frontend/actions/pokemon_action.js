import { fetchAllPokemon, fetchSinglePokemon } from "../util/api_util";

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";

export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon: pokemon
});

export const getAllPokemon = () => dispatch => {
    fetchAllPokemon().then(allPokemon => {
        dispatch(receiveAllPokemon(allPokemon));
    });
};

export const receiveSinglePokemon = payload => ({
    type: RECEIVE_SINGLE_POKEMON,
    payload: payload
});

export const getSinglePokemon = pokeId => dispatch => {
    fetchSinglePokemon(pokeId).then(payload => {
        dispatch(receiveSinglePokemon(payload));
    });
};

// {
//     pokemons: {
//         1: {

//         }
//     },
//     items: {
//         3: {
//             fire
//         }
//     }
// }
