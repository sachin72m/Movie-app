import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducers/index"

//logger middleware
const logger=({dispatch,getstate})=>(next)=>(action)=>{
    console.log(action.type);
    next(action);
}
//create store and export store
export const store=createStore(rootReducer,applyMiddleware(logger));