import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const logger = (store) => (next) => (action) => {
  console.log(`${action.type} Fired!`);
  next(action);
};


const middlewares = applyMiddleware(thunk, logger);
export default middlewares;
