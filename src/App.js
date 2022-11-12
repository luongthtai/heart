import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import "./App.module.scss"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
