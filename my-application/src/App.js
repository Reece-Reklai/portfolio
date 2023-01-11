import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Project";
import DrawerAppBar from "./components/DrawerAppBar";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  let navigate = useNavigate();

  const navigationHandler = (current) => {
    if (current === "HOME" || current === "Home") {
      navigate("/");
    } else if (current === "ABOUT" || current === "About") {
      navigate("/about");
    } else if (current === "PROJECT" || current === "Project") {
      navigate("/project");
    }
  };

  return (
    <>
      <DrawerAppBar nav={navigationHandler}></DrawerAppBar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
