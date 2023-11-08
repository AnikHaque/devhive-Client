import axios from "axios";
import { registerSuccess } from "./userReducer";
// import { useLocation, useNavigate } from "react-router-dom";

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://devhiveserver.vercel.app/user",
      userData
    );
    localStorage.setItem("jwt", response.data.token);
    localStorage.setItem("user_id", response.data._id);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    localStorage.setItem("jwt", error.response.data.token);
    localStorage.setItem("user_id", error.response.data.userExists._id);
    console.log(error);
  }
};
