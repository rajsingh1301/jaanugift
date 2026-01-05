import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Reasons from "./pages/Reasons";
import MusicToggle from "./components/MusicToggle";

/**
 * Main App Component
 * Sets up routing and includes global components like Music Toggle
 */
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50">
        {/* Background Music Toggle */}
        <MusicToggle />

        {/* Page Routes with smooth transitions */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/reasons" element={<Reasons />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
