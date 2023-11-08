import React from "react";
import useChat from "../../hooks/useChat";

const DeveloperChat = ({ developerId }) => {
  const startChat = useChat(developerId);
  const handleDeveloperChat = () => {
    startChat();
  };
  return (
    <div>
      <button
        className="btn btn-outline btn-primary"
        onClick={handleDeveloperChat}
      >
        Developer Chat
      </button>
    </div>
  );
};

export default DeveloperChat;
