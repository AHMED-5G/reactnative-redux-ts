import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import { rootReducer } from "../reducers";
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../reducers/userSlice";

export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
