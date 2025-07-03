import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConverations } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConverations(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <div className="mt-2">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered rounded-full ml-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-circle bg-sky-500 text-white mr-2"
        >
          <IoSearchSharp className="w-4 h-4 outline-none mr-1" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
