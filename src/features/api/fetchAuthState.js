import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../Configs/Firebase.config";
import { setLoggedIn, setUserData, setUserLoading } from "./loginSlice";

export const fetchAuthState = createAsyncThunk(
  "login/fetchAuthState",
  async (_, { dispatch }) => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(setUserLoading(false));
        dispatch(setLoggedIn(true));
        dispatch(setUserData(user));
      } else {
        dispatch(setUserLoading(false));
        dispatch(setLoggedIn(false));
        dispatch(setUserData(null));
      }
    });
  }
);
