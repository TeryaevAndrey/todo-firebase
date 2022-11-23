import { createContext } from "react";

export const AuthContext = createContext({
  token: undefined,
  isAuth: false,
});