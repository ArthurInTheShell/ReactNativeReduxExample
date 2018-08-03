import reducer from './reducer';
import {createStore} from 'redux';
// This connects the reducer to the store
const Store = createStore(reducer);
export default Store;