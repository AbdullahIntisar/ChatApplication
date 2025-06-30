import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res, next) => {
  try {
    const loggedInUserId = req.user_id;

    const allUsers = await User.find({
      _id: {
        $ne: loggedInUserId,
      },
    }).select("-password");

    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error in User Controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
