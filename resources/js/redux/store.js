import { 
  createStore
} from "redux";

import { app } from "./reducers/app_reducers";

export const store = createStore(app);