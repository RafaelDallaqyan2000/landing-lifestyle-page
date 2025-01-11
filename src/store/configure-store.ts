import { configureStore, Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import thunk from "redux-thunk";
import authReducer from "./auth/auth-slice.ts";

const rootReducer = configureStore({
  reducer: authReducer,
  devTools: true,
});

export default configureStore({
  reducer: authReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});
