import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../Configs/Firebase.config";
import { useDispatch } from "react-redux";
import { setLoggedIn, setUserData, setUserLoading } from "../../features/api/loginSlice";
import { registerUser } from "../../features/api/Auth/userActions";
import { useLocation, useNavigate } from "react-router-dom";

const LoginProviders = () => {
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const githubprovider = new GithubAuthProvider();
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result?.user;
        // ...

        // Set the login data in the store
        dispatch(setLoggedIn(true));
        dispatch(setUserData(user));
        const userData = {
          name: user?.displayName,
          email: user?.email,
          uid: user?.uid,
          verified: user?.emailVerified,
          pic: user?.photoURL,
        };
        dispatch(registerUser(userData));
        dispatch(setUserLoading(false));
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        console.log(errorMessage);
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const handleGithubLogin = () => {
    //create the necessaty code
    signInWithPopup(auth, githubprovider)
      .then((result) => {
        const user = result?.user;
        // ...
        dispatch(setLoggedIn(true));
        dispatch(setUserData(user));
        const userData = {
          name: user?.displayName,
          email: user?.email,
          uid: user?.uid,
          verified: user?.emailVerified,
          pic: user?.photoURL,
        };
        dispatch(registerUser(userData));
        dispatch(setUserLoading(false));
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        // ...
      });
  };
  return (
    <div className="flex flex-col gap-2">
      <button
        className="btn flex gap-5 w-full btn-outline text-primary"
        onClick={handleGoogleLogin}
      >
        <FaGoogle></FaGoogle>
        <span>Continue with Google</span>
      </button>
      <button
        className="btn w-full flex gap-5 btn-outline text-secondary"
        onClick={handleGithubLogin}
      >
        <FaGithub></FaGithub>
        <span>Continue with GitHub</span>
      </button>
    </div>
  );
};

export default LoginProviders;
