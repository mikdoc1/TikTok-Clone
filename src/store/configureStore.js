import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { modalReducer } from '../reducers/modal';
import authReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            modal: modalReducer,
            auth: authReducer
        }), 
        composeEnhancers(applyMiddleware(thunk)));   
           
    return store;
};