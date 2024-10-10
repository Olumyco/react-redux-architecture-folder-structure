import { combineReducers } from 'redux';
import busReducers from './modules/bus/reducers/busReducers';
import authReducers from './modules/auth/reducers/authReducers';

export default combineReducers({
  busReducers,
  authReducers
});