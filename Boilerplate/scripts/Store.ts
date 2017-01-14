import { createStore } from 'redux';
import personReducer from './reducers/PersonReducer';

const store = createStore(personReducer);

export default store;