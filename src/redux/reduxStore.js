import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import authReducer from './authReduser';
import dialogsReducer from './dialogsReducer';
import navBarReducer from './navBarReducer';
import profileReducer from './profileReducer';
import userReducer from './userReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReduser from './appReduser';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navBarReducer,
  usersPage: userReducer,
  auth: authReducer,
  form: formReducer,
  app: appReduser
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store