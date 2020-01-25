import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from 'redux';
import { loadState, saveState } from './localStorage.js';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer.js';

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  loadState(),
  devCompose(
    lazyReducerEnhancer(combineReducers),
    applyMiddleware(thunk)
  )
);

// store.addReducers({
//   rootReducer
// });

store.subscribe(() => {
  saveState(store.getState())
});


