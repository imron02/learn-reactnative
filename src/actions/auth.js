import * as type from '../constants/auth';

export function login(username, password) {
  return {
    type: type.LOGIN,
    username,
    password
  };
}

export const logout = () => ({
  type: type.LOGOUT
});
