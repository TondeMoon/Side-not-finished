import { createContext } from 'react';

function noop() {}

export const AuthContext = createContext({
  toekn: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
});
