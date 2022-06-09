import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import Navbar from "./Page/Shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
