import * as constants from '../constants/hearth-constants';

export function combineBlock(text) {
  return {
    type: constants.COMBINE_BLOCK,
    payload: {
      text: text
    }
  };
}

export function splitBlock(text) {
  return {
    type: constants.SPLIT_BLOCK,
    payload: {
      text: text
    }
  };
}
