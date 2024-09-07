import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Educational from "./pages/Educational";
import PasswordGenerator from "./pages/PasswordGenerator";
import "./index.css";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<PasswordGenerator />} />
        <Route path="/educacional" element={<Educational />} />
      </Routes>
    </Router>
  );
}

export default App;
