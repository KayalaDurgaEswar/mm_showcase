import React from 'react';
import { Link } from 'react-router-dom';

export default function ModernNavbar() {
  return (
    <nav className="bg-light-bg shadow-neumorphic py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-manrope text-brand">
          M&M Interior Works
        </Link>
        <div className="flex space-x-6">
          <Link to="/projects" className="hover:underline text-brand">
            Projects
          </Link>
          <Link to="/showroom" className="hover:underline text-brand">
            Showroom
          </Link>
          <Link to="/faq" className="hover:underline text-brand">
            FAQ
          </Link>
          <Link to="/reviews" className="hover:underline text-brand">
            Reviews
          </Link>
          <Link to="/admin" className="hover:underline text-brand">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}