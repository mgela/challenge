import {applyMiddleware, createStore} from 'redux';
import { reducers } from '../reducers'
//RN debugger
import logger from 'redux-logger'
import thunk from 'redux-thunk';




const store = createStore(reducers,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 applyMiddleware(thunk, logger)
);

export default store;
