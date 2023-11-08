import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api/apiSlice";
import loginReducer from "./api/loginSlice";
import userReducer from "./api/Auth/userReducer";
import chatSlice from "./chat/chatSlice";
export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    login: loginReducer,
    user: userReducer,
    chat: chatSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
