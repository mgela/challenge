import {applyMiddleware, createStore} from 'redux';
import { reducers } from '../reducers'
//RN debugger
import logger from 'redux-logger'



const store = createStore(reducers,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 applyMiddleware(logger)
);

export default store;
