import React from "react";
import SearchBar from "./SearchBar";
import Conversations from "./Conversations";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <div>
      <SearchBar />
      <div className="divider px-3"></div>
      <Conversations />
      {/* <MessageContainer />*/}
      <Logout />
    </div>
  );
};

export default Sidebar;
