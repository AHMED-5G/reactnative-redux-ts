// import axios from "axios";
// import { Dispatch } from "react";
// import { ON_LOGIN } from "./actionTypes";

export interface UserModel {
  firstName: string;
  lastName: string;
  subscription: string;
  token: string;
}

// export interface LoginAction {
//   readonly type: "ON_LOGIN";
//   payload: UserModel;
// }

// export interface ErrorAction {
//   readonly type: "ON_ERROR";
//   payload: any;
// }

// export type UserAction = LoginAction | ErrorAction;
// export const onLogin = (email: string, password: string) => {
//   return async (dispatch: Dispatch<UserAction>) => {
//     dispatch({
//       type: ON_LOGIN,
//       payload: {
//         firstName: email,
//         lastName: password,
//         subscription: "string",
//         token: "string",
//       },
//     });
//   };
// };
