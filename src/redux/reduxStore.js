import { combineReducers, legacy_createStore } from 'redux';
import dialogsReducer from './dialogsReducer';
import navBarReducer from './navBarReducer';
import profileReducer from './profileReducer';
import userReducer from './userReducer';

let reducers = combineReducers({
  postsPage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navBarReducer,
  usersPage: userReducer
})

let store = legacy_createStore(reducers)

window.store = store

export default store