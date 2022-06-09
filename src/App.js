import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import Projects from "./Page/Projects";
import Service from "./Page/Service";
import Navbar from "./Page/Shared/Navbar";

function App() {
  return (
    <div className="px-0 py-0  lg:px-32 lg:py-16  ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Projects />}></Route>
        <Route path="/skill" element={<Service />}></Route>
      </Routes>
    </div>
  );
}

export default App;
