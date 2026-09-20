import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AnimatedBackground } from './components/visuals/AnimatedBackground';
import { LandingPage } from './pages/LandingPage';
import { LearnPage } from './pages/LearnPage';
import { WeekPage } from './pages/WeekPage';
import { TopicPage } from './pages/TopicPage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Animated Cybernetic Background */}
        <AnimatedBackground />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/week/:weekId" element={<WeekPage />} />
            <Route path="/topic/:topicId" element={<TopicPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
