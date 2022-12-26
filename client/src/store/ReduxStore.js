//Copied Pasted from same store 
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

//importing important packages, and thunk middleware for 
//asynchronous work
import thunk from "redux-thunk";
import { reducers } from "../reducers";

//Saving our data as we pass it in a parameter
function saveToLocalStorage(store) {
  try {
      const serializedStore = JSON.stringify(store);
      window.localStorage.setItem('store', serializedStore);
  } catch(e) {
      console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
      const serializedStore = window.localStorage.getItem('store');
      if(serializedStore === null) return undefined;
      return JSON.parse(serializedStore);
  } catch(e) {
      console.log(e);
      return undefined;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

//Creating redux store
const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;