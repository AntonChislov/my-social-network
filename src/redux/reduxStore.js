import { combineReducers, legacy_createStore } from 'redux';
import authReducer from './authReduser';
import dialogsReducer from './dialogsReducer';
import navBarReducer from './navBarReducer';
import profileReducer from './profileReducer';
import userReducer from './userReducer';

let reducers = combineReducers({
  postsPage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navBarReducer,
  usersPage: userReducer,
  auth: authReducer
})

let store = legacy_createStore(reducers)

window.store = store

export default store