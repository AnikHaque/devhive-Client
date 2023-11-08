import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChat } from "../features/chat/chatSlice";
import { useLocation, useNavigate } from "react-router-dom";

const useChat = (target) => {
  //   const auth = getAuth(app);
  //   const dispatch = useDispatch();
  const userId = target;
  const dispatch = useDispatch();
  let location = useLocation();
  const from = "/chat";
  const navigate = useNavigate();
  const selectedChat = useSelector((state) => state.chat.selectedChat);
  const handleChat = async (userId) => {
    const userData = localStorage.getItem("user_id");
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      };
      const { data } = await axios.post(
        `https://devhiveserver.vercel.app/chat/${userData}`,
        { userId },
        config
      );

      dispatch(setSelectedChat(data));

      console.log(data);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // nothing to do here
  }, []);

  return () => handleChat(userId);
};

export default useChat;
