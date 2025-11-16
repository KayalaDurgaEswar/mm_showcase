import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="container" style={{ padding: '28px 0' }}>
      <h2>Admin Dashboard</h2>
      <div className="admin-links" style={{ marginTop: 12 }}>
        <Link to="/admin/projects" className="btn">Manage Projects</Link>
        <Link to="/admin/faqs" className="btn">Manage FAQs</Link>
        <Link to="/admin/reviews" className="btn">Manage Reviews</Link>
        <Link to="/admin/slider" className="btn">Manage Home Slider</Link>
      </div>
    </div>
  );
}