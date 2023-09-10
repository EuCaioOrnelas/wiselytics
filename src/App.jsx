import "./App.css";
import Login from "./pages/Login/Login";

// reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
