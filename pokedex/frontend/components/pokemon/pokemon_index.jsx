import React from "react";

class PokemonIndex extends React.Component {
    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        return (
            <ul>
                {this.props.pokemon.map(el => (
                    <li key={el.id}>
                        <img src={el.image_url} /> {el.name}
                    </li>
                ))}
            </ul>
        );
    }
}

export default PokemonIndex;
