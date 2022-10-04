import { configureStore } from 'redux';

const reducerFunc = (state = { counter: 0 }, action) => {};

const store = configureStore(reducerFunc);

export default store;
