import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAuthState } from "./features/api/fetchAuthState";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthState());
  }, [dispatch]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
