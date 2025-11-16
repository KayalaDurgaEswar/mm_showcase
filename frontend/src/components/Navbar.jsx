import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="container">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <Link to="/"><strong>M&amp;M Interior Works</strong></Link>
        </div>
        <div className="nav-links">
          <Link to="/showroom">Showroom</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/book-call"><button className="btn">Book a Call</button></Link>
          <Link to="/admin/login" style={{marginLeft:8}}>Admin</Link>
        </div>
      </div>
    </nav>
  );
}
