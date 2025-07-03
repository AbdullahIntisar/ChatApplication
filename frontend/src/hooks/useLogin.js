import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (username, password) => {
    setLoading(true);

    const success = handleInputErrors(username, password);
    if (!success) {
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      //local storage
      localStorage.setItem("chat-user", JSON.stringify(data));

      //context
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};
export default useLogin;
function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all empty field");

    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 chracters");

    return false;
  }

  return true;
}
