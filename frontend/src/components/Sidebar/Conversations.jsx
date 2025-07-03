import React from "react";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../../utils/emojis";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("Conversations", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading && <p className="text-gray-400">Loading conversations...</p>}
    </div>
  );
};

export default Conversations;
