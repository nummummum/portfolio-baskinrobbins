import { create } from 'domain';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './module/reducer';

const store = createStore(reducer, composeWithDevTools());

export default store;
