import React from "react";
import { Link } from "react-router-dom";

const PokemonIndexItem = props => {
    let link = `/pokemon/${props.key}`;
    return (
        <li>
            <Link to={link}>
                <img src={props.img} />
                {props.name}
            </Link>
        </li>
    );
};

export default PokemonIndexItem;
