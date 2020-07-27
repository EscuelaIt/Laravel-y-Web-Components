import { 
  createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";

import { app } from "./reducers/app_reducers";
import { user } from "./reducers/user_reducers";

const reducers = combineReducers({
  app,
  user
});

export const store = createStore(reducers, applyMiddleware(thunk) );