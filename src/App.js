import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import Navbar from "./Page/Shared/Navbar";

function App() {
  return (
    <div className="px-0 py-0  lg:px-32 lg:py-16  ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
