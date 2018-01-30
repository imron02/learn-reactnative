import * as types from '../constants/app';

const initialState = {
  root: undefined
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ROOT_CHANGED:
      return {
        ...state,
        root: action.root
      };
    default:
      return state;
  }
}
