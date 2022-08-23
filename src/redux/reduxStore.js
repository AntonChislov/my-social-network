import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store