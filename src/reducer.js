// Define a reducer
import {types} from './actions';
export const reducer = (state, action) => {
    switch (action.type) {
        case types.INCREMENT: {
            return { count: state.count + 1 }
        }
        case types.DECREMENT: {
            return { count: state.count - 1 }
        }
        default:
            return state
    }
}