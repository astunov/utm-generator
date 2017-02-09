import { combineReducers } from 'redux';
import presets from './reducer_presets';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  presets,
  form: formReducer
});

export default rootReducer;
