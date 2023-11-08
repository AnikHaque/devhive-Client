import React, { useState } from "react";
import LoginProviders from "../Components/LoginProviders/LoginProviders";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import app from "../Configs/Firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setUserData , setUserLoading } from "../features/api/loginSlice";
import { registerUser } from "../features/api/Auth/userActions";

const Register = () => {
  const [users, setUsers] = useState({});
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedImageName, setSelectedImageName] = useState("");
  const [user, setUSer] = useState(false);
  const [imgUploading, setImgUploading] = useState(false);
  const auth = getAuth(app);
  const handleImageChange = (e) => {
    setImgUploading(true);
    // disable submit button while uploading

    const image = e.target.files[0];

    setSelectedImageName(image.name);
    const formData = new FormData();
    formData.append("image", image);
    uploadImage(formData);
  };
  const uploadImage = (formData) => {
    // const apiKey = process.env.IMGBBAPI;
    fetch(
      `https://api.imgbb.com/1/upload?key=d1cfe20a3fbc8743b93b754fbabc2085&expiration=0`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.data.url;
        // Do something with the imageUrl, like save it to a database
        const newUsers = { ...users };
        newUsers.image = imageUrl;
        setUsers(newUsers);
        setImgUploading(false);
      })
      .catch((error) => console.error(error));
  };
  const submitLogin = (data) => {
    data.preventDefault();
    setLoading(true);
    const email = users.email;
    const password = users.password;
    const name = users.name;
    const image =
      users.image ||
      "https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png";
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        handleUpdate(name, image);
        if (handleUpdate) {
          const user = userCredential.user;
          console.log(user);
          // Set the login data in the store
          dispatch(setLoggedIn(true));
          dispatch(setUserData(user));
          const userData = {
            name: name,
            email: user?.email,
            uid: user?.uid,
            verified: user?.emailVerified,
            pic: image,
          };
          dispatch(registerUser(userData));
          dispatch(setUserLoading(false));
          navigate(from, { replace: true });

          return;
        }
        console.log("unsuccessful user update");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    //send data to firebase to create user

    //if user created then redirect to login page
  };
  const handleUpdate = (name, image) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        console.log("update profile success");
        return true;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //create a function to update profile
  const handleEventBlur = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newUsers = { ...users };
    newUsers[field] = value;
    setUsers(newUsers);
  };
  // const handleForgetPassword = () => {
  //   console.log("forget password");

  //   users?.email ? console.log(users?.email) : alert("email not found");
  // };
  if (isLoggedIn && localStorage.getItem("jwt")) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div>
      <section className="bg-gray-50 py-5 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <img src="https://i.ibb.co/FHqDjdX/IMG-20230404-110630-fotor-bg-remover-20230404111148.png" className="w-60 h-auto" alt="" />
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create a new account
              </h1>
              
              <form
                onSubmit={submitLogin}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onBlur={handleEventBlur}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Mr. Bean"
                    required=""
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="image"
                  >
                    Select an image:
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleImageChange}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onBlur={handleEventBlur}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onBlur={handleEventBlur}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        for="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  id="submitBtn"
                  type="submit"
                  // className="w-full btn text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  className={
                    imgUploading
                      ? "btn btn-disabled w-full rounded lg"
                      : "devhiveprimarybtn"
                  }
                >
                  {imgUploading ? "uploading.." : "Sign up"}
                </button>
                
              </form>
              <div className="divider">OR</div>
              <LoginProviders></LoginProviders>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already an user?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </Link>
                </p>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
