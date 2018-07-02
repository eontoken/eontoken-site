import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import reducers from '../reducers';

// const store = createStore(reducers, compose(applyMiddleware(promise), DevTools.instrument()));
const store = createStore(reducers, applyMiddleware(promise));

export default store;
