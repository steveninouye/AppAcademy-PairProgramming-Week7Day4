import React from "react";

class PokemonDetail extends React.Component {
    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
    render() {
        debugger;
        if (this.props.pokemon) {
            let { items, pokemon } = this.props;
            return <p>{pokemon.name}</p>;
        } else {
            return <h1> no pokemon yet </h1>;
        }
    }
}

export default PokemonDetail;
