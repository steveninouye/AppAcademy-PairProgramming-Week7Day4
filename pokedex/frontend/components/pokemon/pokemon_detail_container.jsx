import { connect } from "react-redux";
import PokemonDetail from "./pokemon_detail";
import { getSinglePokemon } from "../../actions/pokemon_action";
import { getPokemon, getPokemonItems } from "../../reducers/selectors";

const mSTP = (state, ownProps) => {
    return {
        pokemon: getPokemon(state, ownProps.match.params.pokemonId),
        items: getPokemonItems(state, ownProps.match.params.pokemonId)
    };
};

const mDTP = dispatch => ({
    requestSinglePokemon: id => dispatch(getSinglePokemon(id))
});

export default connect(
    mSTP,
    mDTP
)(PokemonDetail);
