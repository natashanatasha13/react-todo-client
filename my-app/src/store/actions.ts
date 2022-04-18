import {
  REGISTRATE,
  ADD_USER,
  GET_NEW_LOGIN,
  GET_NEW_PASSWORD,
  GET_LOGIN,
  GET_PASSWORD,
} from "./constants";
import { Dispatch } from "react";
export const addUser = (login?: string, password?: string) => {
  return { type: ADD_USER, login: login, password: password };
};
export const registrateUser = (login: string, password: string) => {
  return { type: REGISTRATE, login: login, password: password };
};
export const newLogin = (login: string) => {
  return { type: GET_NEW_LOGIN, login: login };
};
export const newPassword = (password: string) => {
  return { type: GET_NEW_PASSWORD, password: password };
};
export const getLogin = (login: any) => {
  return { type: GET_LOGIN, login: login };
};

export const getPassword = (password: string) => {
  return { type: GET_PASSWORD, password: password };
};
