import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../reducers/userSlice";
import { logger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);
export const store = configureStore({
  reducer: {
    userSlice: persistedReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk, logger],
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
