import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import modalReducer from '../reducers/modal';
import authReducer from '../reducers/auth';
import uiReducer from '../reducers/ui';
import profileReducer from '../reducers/profile';
import trendingReducer from '../reducers/trending';
import sidebarReducer from '../reducers/sidebar';
import musicReducer from '../reducers/music';
import audioPlayerReducer from '../reducers/auidoPlayer';
import tagReducer from '../reducers/tag';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            modal: modalReducer,
            auth: authReducer,
            ui: uiReducer,
            profile: profileReducer,
            trending: trendingReducer,
            music: musicReducer,
            sidebar: sidebarReducer,
            audioPlayer: audioPlayerReducer,
            tag: tagReducer
        }), 
        composeEnhancers(applyMiddleware(thunk)));          
    return store;
};