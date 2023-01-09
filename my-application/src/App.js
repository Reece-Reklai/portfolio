import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Project from './components/Project';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="/About" component={<About />}></Route>
      <Route path="/Project" component={<Project />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
