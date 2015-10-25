'use strict';

import { combineReducers } from 'redux';
import { text } from './hearth-reducers';

const rootReducer = combineReducers({
  text,
});

export default rootReducer;
