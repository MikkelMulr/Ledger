import {combineReducers} from 'redux';
import {viewReducer} from './view.reducer';
import {verifyUserReducer} from './verifyUser.reducer';

const rootReducer = combineReducers({view: viewReducer, verified: verifyUserReducer});

export default rootReducer;