import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../Actions/userActions";
import { ON_ERROR } from "../Actions/actionTypes";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: {} as UserModel,
  error: undefined,
};
interface LogInForm {
  email: string;
  password: string;
}
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ON_LOGIN: (state, action: PayloadAction<LogInForm>) => {
      const { email, password } = action.payload;
      // login process then:
      const user: UserModel = {
        firstName: "A",
        lastName: "B",
        subscription: "3 months",
        token: "22123231231",
      };
      state.user = user;
    },
    ON_LOGOUT: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ON_LOGIN, ON_LOGOUT } = userSlice.actions;

export default userSlice;
