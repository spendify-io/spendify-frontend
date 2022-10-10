import { configureStore, createStore } from 'redux';

const reducerFunc = (state = { counter: 0 }, action) => {};

const store = createStore(reducerFunc);

export default store;
