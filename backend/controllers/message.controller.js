import Conversation from "../models/conversation.model.js";
import Messages from "../models/message.model.js";
import mongoose from "mongoose";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(receiverId)) {
      return res.status(400).json({ error: "Invalid receiver ID format" });
    }

    const receiverObjectId = new mongoose.Types.ObjectId(receiverId);

    // Find existing conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverObjectId] },
    });

    // Create new conversation
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverObjectId],
        messages: [],
      });
    }

    // Create new message
    const newMessage = new Messages({
      senderId,
      receiverId: receiverObjectId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // Save the message first
    //await newMessage.save();

    // Add message to conversation
    //await conversation.save();
    await Promise.all([newMessage.save(), conversation.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in send Message Controller:", error.message);
    console.log("Full error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id } = req.params;
    const senderId = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid receiver ID format" });
    }

    const receiverObjectId = new mongoose.Types.ObjectId(id);

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverObjectId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in get Message Controller:", error.message);
    console.log("Full error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
