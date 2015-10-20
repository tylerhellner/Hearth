import { combineBlock, splitBlock } from '../actions/hearth-actions';
import { COMBINE_BLOCK, SPLIT_BLOCK } from '../constants/hearth-constants';

const initialState = [{block:'boo'}];

export function blocks(state = initialState, action) {
  const { type, payload } = action;
  switch ( type ) {
    case COMBINE_BLOCK:
      return state;
    case SPLIT_BLOCK:
      return state;
    default:
      return state;
  }
}
