import { extractTime } from "../../../../backend/utils/extractTime";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  // Convert both IDs to strings for comparison
  const fromMe = String(message.senderId) === String(authUser._id);

  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const shakeClass = message.shouldShake ? "shake" : "";

  // Add debugging (remove this after fixing)
  console.log("Message senderId:", message.senderId, typeof message.senderId);
  console.log("AuthUser _id:", authUser._id, typeof authUser._id);
  console.log("fromMe:", fromMe);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Tailwind chat component" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${
          fromMe ? "bg-blue-500" : "bg-gray-500"
        } pb-2 ${shakeClass}`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
