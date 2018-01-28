import * as type from '../constants/auth';

export function login(username, password) {
  return {
    type: type.LOGIN,
    username: username,
    password: password
  };
};

export const logout = () => {
  return {
    type: type.LOGOUT
  };
};