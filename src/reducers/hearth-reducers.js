import { combineBlock, splitBlock } from '../actions/hearth-actions';
import { COMBINE_BLOCK, SPLIT_BLOCK, CARRIAGE_RETURN } from '../constants/hearth-constants';

const initialState = '';

export function text(state = initialState, action) {
  const { type, payload } = action;
  switch ( type ) {
    case CARRIAGE_RETURN:
      console.log(payload.text[0]);
      return !!state.length ? state + ' ' + payload.text : state + payload.text;
    case COMBINE_BLOCK:
      return state;
    case SPLIT_BLOCK:
      return state;
    default:
      return state;
  }
}