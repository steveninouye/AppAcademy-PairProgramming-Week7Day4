import { connect } from "react-redux";
import { getAllPokemon } from "../../actions/pokemon_action";
import { selectAllPokemon } from "../../reducers/selectors";
import PokemonIndex from "./pokemon_index";

const mSTP = state => ({
    pokemon: selectAllPokemon(state)
});

const mDTP = dispatch => ({
    requestAllPokemon: () => dispatch(getAllPokemon())
});

export default connect(
    mSTP,
    mDTP
)(PokemonIndex);
