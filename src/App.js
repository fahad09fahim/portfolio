import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Page/Blogs";
import Home from "./Page/Home";
import Projects from "./Page/Projects";
import Service from "./Page/Service";
import Navbar from "./Page/Shared/Navbar";
import Goport from "./Page/Shared/SkillDetails/Goport";
import Mytools from "./Page/Shared/SkillDetails/Mytools";
import SportsFlash from "./Page/Shared/SkillDetails/SportsFlash";

function App() {
  return (
    <div className="px-0 py-0  lg:px-32 lg:py-16  ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/skill" element={<Service />}></Route>
        <Route path="/project" element={<Projects />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/mytools" element={<Mytools />}></Route>
        <Route path="/goport" element={<Goport />}></Route>
        <Route path="/sportsFlash" element={<SportsFlash />}></Route>
      </Routes>
    </div>
  );
}

export default App;
