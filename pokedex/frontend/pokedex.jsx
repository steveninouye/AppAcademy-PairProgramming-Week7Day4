import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { getAllPokemon } from "./actions/pokemon_action";
import { selectAllPokemon } from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("root");
    let store = configureStore();

    window.store = store;
    window.getAllPokemon = getAllPokemon;
    window.selectAllPokemon = selectAllPokemon;

    ReactDOM.render(<h1>hello</h1>, root);
});
