import * as types from '../constants/app';

export function appInitialized() {
  return async function (dispatch, getState) {
    dispatch(changeAppRoot('login'));
  };
}

export function changeAppRoot(root) {
  return { type: types.ROOT_CHANGED, root };
}

export function appDashboard() {
  return async function (dispatch, getState) {
    dispatch(changeAppRoot('dashboard'));
  };
}
