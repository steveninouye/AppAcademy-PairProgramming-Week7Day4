import {
    RECEIVE_ALL_POKEMON,
    RECEIVE_SINGLE_POKEMON
} from "../actions/pokemon_action";

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return Object.assign({}, state, action.pokemon);
        case RECEIVE_SINGLE_POKEMON:
            let pokemon = {
                [action.payload.pokemon.id]: action.payload.pokemon
            };
            return Object.assign({}, state, pokemon);
        default:
            return state;
    }
};

export default pokemonReducer;
