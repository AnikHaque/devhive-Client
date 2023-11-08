import React from "react";
import MessageSection from "./Components/MessageSection";
import LeftChatNav from "./Components/LeftChatNav";
import "./Chat.module.css";
import { useSelector } from "react-redux";

const Chat = () => {
  const selectedChat = useSelector((state) => state.chat.selectedChat);

  return (
    <div className="h-screen chatScroll grid grid-cols-12">
      <div
        className={
          selectedChat
            ? "hidden lg:block col-span-12 lg:col-span-4"
            : "block col-span-12 lg:col-span-4"
        }
      >
        {<LeftChatNav></LeftChatNav>}
      </div>
      <div
        className={
          selectedChat
            ? "block col-span-12 lg:col-span-8"
            : "hidden col-span-12 lg:col-span-8 lg:block"
        }
      >
        <MessageSection></MessageSection>
      </div>
    </div>
  );
};

export default Chat;
