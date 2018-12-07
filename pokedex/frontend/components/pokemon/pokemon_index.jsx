import React from "react";
import PokemonIndexItem from "./pokemon_index_item";

class PokemonIndex extends React.Component {
    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        const pokeItems = this.props.pokemon.map(el => (
            <PokemonIndexItem key={el.id} img={el.image_url} name={el.name} />
        ));

        return <ul>{pokeItems}</ul>;
    }
}

export default PokemonIndex;
