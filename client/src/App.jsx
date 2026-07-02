/**
 * App.jsx — Root component. Sets up routing and context providers.
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import Home     from './pages/Home';
import About    from './pages/About';
import Projects from './pages/Projects';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white dark:bg-surface-dark transition-colors duration-300">
          <Navbar />

          <main className="flex-1">
            <Routes>
              <Route path="/"         element={<Home />} />
              <Route path="/about"    element={<About />} />
              <Route path="/projects" element={<Projects />} />
              {/* Catch-all → redirect home */}
              <Route path="*"         element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
