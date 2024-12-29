import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Section from "./components/section"; // Example component
import About from "./components/pages/about"; // Create this page
import Location from "./components/pages/location"; // Create this page
import Menu from "./components/pages/menu"; // Create this page

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
