import React from "react";

class PokemonDetail extends React.Component {
    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.match.params.pokemonId !==
            this.props.match.params.pokemonId
        ) {
            this.props.requestSinglePokemon(this.props.match.params.pokemonId);
        }
    }

    render() {
        if (this.props.pokemon) {
            let { items, pokemon } = this.props;
            return (
                <>
                    <img src={pokemon.image_url} />
                    <h1>{pokemon.name}</h1>
                </>
            );
        }
        return <h1> no pokemon yet </h1>;
    }
}

export default PokemonDetail;
