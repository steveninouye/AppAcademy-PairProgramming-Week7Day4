import React from "react";
import { connect } from "net";

const mSTP = (state, ownProps) => {
    item: state.entities.items;
};

const mDTP = dispatch => ({
    requestItems: () => dispatch(some_action())
});

export default connect(
    mSTP,
    mDTP
)(ItemDetail);
