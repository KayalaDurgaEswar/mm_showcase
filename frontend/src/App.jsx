import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Showroom from './pages/Showroom';
import FAQ from './pages/FAQ';
import Reviews from './pages/Reviews';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminLogin from './pages/Admin/AdminLogin';
import Navbar from './components/ModernNavbar';
import Footer from './components/ModernFooter';

function App() {
  return (
    <Router>
      <div className="bg-light-bg text-brand min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/showroom" element={<Showroom />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
