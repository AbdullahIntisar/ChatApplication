import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";
const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      //check if message belongs to the current selected chat
      const isFromCurrentChat =
        newMessage.senderId === selectedConversation?._id ||
        newMessage.receiverId === selectedConversation?._id;

      if (isFromCurrentChat) {
        newMessage.shouldShake = true;
        const sound = new Audio(notificationSound);
        sound.play();
        setMessages([...messages, newMessage]);
      }
    });
    return () => socket?.off("newMessage");
  }, [messages, socket, setMessages]);
};

export default useListenMessages;
