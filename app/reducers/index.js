import { combineReducers } from 'redux';

import { DATA_AVAILABLE } from "../actions/";

let dataState = { data: [], loading: true };

//defualt given state if state received is undefine
const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            //the state is not modified
            return { ...state, data: action.data, loading: false };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    dataReducer
});

export default rootReducer;