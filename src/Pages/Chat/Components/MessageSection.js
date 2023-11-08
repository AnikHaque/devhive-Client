import React, { useContext, useEffect } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  ConversationHeader,
  Button,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import { GiReturnArrow } from "react-icons/gi";

import axios from "axios";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChat } from "../../../features/chat/chatSlice";
import { getSenderFull, getSenderName } from "../../../Configs/chatLogics";
import LoadingAnimation from "../../../Components/LoadingAnimation";
import ProfileModal from "./ProfileModal";

const ENDPOINT = "https://devhiveserver.onrender.com";
var socket, selectedChatCompare;

const MessageSection = () => {
  const [typing, setTyping] = useState(false);
  const dispatch = useDispatch();
  const selectedChat = useSelector((state) => state.chat.selectedChat);
  const thisUserData = useSelector((state) => state.login.userData);

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState();
  const [isTyping, setIsTyping] = useState(false);
  // const toast = useToast();
  const [socketConnected, setSocketConnected] = useState(false);
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", localStorage.getItem("user_id"));
    socket.on("connected", () => {
      setSocketConnected(true);
    });
    socket.on("typing", () => {
      setTyping(true);
    });
    socket.on("stop typing", () => {
      setTyping(false);
    });
  }, []);
  const fetchMessages = async () => {
    if (!selectedChat) return;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_id")}`,
        },
      };
      setLoading(true);
      const { data } = await axios.get(
        `https://devhiveserver.vercel.app/message/${selectedChat._id}`,
        config
      );
      console.log(data);
      setLoading(false);
      socket.emit("join chat", selectedChat._id);
      const modifiedMsg = data?.map((message) => ({
        message: message?.content,
        sender: message?.sender?.name,
        direction:
          message?.sender?._id === localStorage.getItem("user_id")
            ? "outgoing"
            : "incoming",
      }));
      // const combineMsg = [...messages, ...modifiedMsg];
      // console.log(combineMsg);
      setMessages(modifiedMsg);
      console.log(...messages, modifiedMsg);
      // if the message is from the same user, then just include with previous message, else remove previous messages and set new messages
      // if (messages.length > 0) {
      //   if (messages[messages.length - 1].sender === modifiedMsg[0].sender) {
      //     setMessages([...messages, ...modifiedMsg]);
      //   } else {
      //     setMessages(modifiedMsg);
      //   }
      // } else {
      //   setMessages(modifiedMsg);
      // }

      // console.log(messages);
      // console.log(modifiedMsg);
      // console.log(modifiedMsg);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMessages();
    selectedChatCompare = selectedChat;
  }, [selectedChat]);
  useEffect(() => {
    const handleNewMessage = (newMessageReceived) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageReceived.chat._id
      ) {
        //give notification
      } else {
        const modifiedMsg = {
          message: newMessageReceived.content,
          sender: newMessageReceived.sender.name,
          direction:
            newMessageReceived.sender._id === localStorage.getItem("user_id")
              ? "outgoing"
              : "incoming",
        };
        setMessages((messages) => [...messages, modifiedMsg]);
      }
    };

    socket.on("message received", handleNewMessage);

    return () => {
      socket.off("message received", handleNewMessage);
    };
  }, [selectedChatCompare]);
  console.log(messages);

  const handleSend = async (messagesend) => {
    const newMessage = {
      message: messagesend,
      sender: thisUserData?.name,
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];
    //update our user state
    setMessages(newMessages);
    socket.emit("stop typing", selectedChat._id);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      };
      const { data } = await axios.post(
        "https://devhiveserver.vercel.app/message",
        {
          content: messagesend,
          chatId: selectedChat._id,
          sender: localStorage.getItem("user_id"),
        },
        config
      );
      socket.emit("new message", data);
      // console.log(data);
    } catch (error) {
      console.log(error);
      // toast({
      //   title: "Error Occurred!",
      //   description: "Failed to send the message.",
      //   status: "error",
      //   duration: 4000,
      //   isClosable: true,
      // });
    }
    //set a typing indicator
    // setTyping(true);

    //process message and post to the server
  };

  const typingHandler = () => {
    if (!socketConnected) return;
    if (!typing) {
      // setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // console.log(selectedChat?.chatName);
  return (
    <div
      className="absolute HeaderDrawer mt-0 lg: overflow-scroll lg:mt-6  md:px-8  bg-transparent "
      // style={{ position: "relative" }}
      style={{ height: `${height}px`, position: "relative" }}
    >
      <button
        onClick={() => dispatch(setSelectedChat(null))}
        className="absolute block lg:hidden btn btn-sm btn-primary z-10 top-4 left-10"
        direction="left"
      >
        <GiReturnArrow></GiReturnArrow>
      </button>
      {selectedChat && (
        <div
          className="absolute mr-20 h-9 overflow-clip text-2xl font-semibold font-mono text-blue-400  z-10 top-4 lg:left-10 left-24"
          direction="right"
        >
          {!selectedChat?.isGroupChat ? (
            <>
              {" "}
              {getSenderName(
                localStorage.getItem("user_id"),
                selectedChat?.users
              )}{" "}
            </>
          ) : (
            <> {selectedChat?.chatName} </>
          )}
        </div>
      )}

      {selectedChat?.isGroupChat === false && (
        <ProfileModal
          current={getSenderFull(
            localStorage.getItem("user_id"),
            selectedChat?.users
          )}
        ></ProfileModal>
      )}

      {!selectedChat ? (
        <div className="h-full flex items-center justify-center">
          <h1 className="text-3xl text-center">
            Please Select a Chat to continue.
          </h1>
        </div>
      ) : (
        <>
          <ConversationHeader
            displayname="dsf"
            className="h-16 "
          ></ConversationHeader>
          <MainContainer className="flex flex-col">
            {loading ? (
              <div h="lg" className="w-full m-6">
                {/* <SkeletonText
                mt="4"
                noOfLines={11}
                rounded="lg"
                spacing="4"
                skeletonHeight="8"
              /> */}
                <LoadingAnimation></LoadingAnimation>
              </div>
            ) : (
              <ChatContainer>
                <MessageList
                  className="mb-20"
                  // scrollBehavior="smooth"
                  typingIndicator={
                    typing ? (
                      <TypingIndicator
                      // content={
                      //   selectedChat &&
                      //   getSenderName(user, selectedChat?.users) + " is typing"
                      // }
                      />
                    ) : null
                  }
                >
                  {messages?.map((message, i) => {
                    return <Message key={i} model={message} />;
                  })}
                </MessageList>
                <MessageInput
                  onChange={typingHandler}
                  className="fixed bottom-20"
                  onSend={handleSend}
                  placeholder="Type message here"
                />
              </ChatContainer>
            )}
          </MainContainer>
        </>
      )}
    </div>
  );
};

export default MessageSection;
