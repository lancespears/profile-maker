import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import profileReducer from './reducer_profiles';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  profiles: profileReducer,
  form: formReducer
});

export default rootReducer;
