export const selectAllPokemon = state => {
    return Object.values(state.entities.pokemon);
};

export const getPokemon = (state, id) => {
    return state.entities.pokemon[id];
};

export const getPokemonItems = (state, id) => {
    let items = Object.values(state.entities.items);
    return items.filter(item => item.pokemon_id === id);
};
