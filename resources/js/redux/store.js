import { 
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";

import thunk from "redux-thunk";

import { app } from "./reducers/app_reducers";
import { user } from "./reducers/user_reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  app,
  user
});

export const store = createStore(
  reducers, 
  composeEnhancers(applyMiddleware(thunk))
);