import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useThemeStyles } from "./themes/useThemeStyles";

const App: React.FC = () => {
  const styles = useThemeStyles() ?? {};

  console.log(styles);

  return (
    <Router>
      <Header />
      <main className={`main ${styles.main}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
