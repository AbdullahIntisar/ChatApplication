import "./App.css";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <SignUp /> */}
      <Home />
    </div>
  );
}

export default App;
