import React, { useEffect, useState } from 'react';
import API from '../api/api';
import { Link } from 'react-router-dom';
import YouTubeSlider from '../components/YouTubeSlider';

export default function Home(){
  const [projects, setProjects] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(()=>{
    API.get('/projects').then(r => setProjects(r.data.slice(0,6))).catch(()=>{});
    API.get('/reviews').then(r => setReviews(r.data.slice(0,8))).catch(()=>{});
  },[]);

  const yt = reviews.filter(r => r.youtubeUrl).map(r=>r.youtubeUrl);

  return (
    <div>
      <section className="header-hero">
        <div className="container">
          <h1 className="hero-title">Premium Aluminum Interiors in Vizag</h1>
          <p className="hero-sub">Partitions, windows, modular kitchens and wardrobes — built to last. Trusted for 5+ years.</p>
          <div style={{display:'flex',gap:12}}>
            <Link to="/showroom"><button className="btn">Explore Showroom</button></Link>
            <Link to="/projects"><button className="btn" style={{background:'#6b7280'}}>View Projects</button></Link>
          </div>
        </div>
      </section>

      <section style={{padding:'28px 0'}} className="container">
        <h2>Recent Projects</h2>
        <div className="grid cols-3" style={{marginTop:12}}>
          {projects.map(p => (
            <div key={p._id} className="card">
              <h3>{p.title}</h3>
              <p className="hero-sub">{p.clientName} • {p.city}</p>
              {p.images && p.images[0] && <img src={`http://localhost:5000${p.images[0]}`} style={{width:'100%',borderRadius:6}} alt="" />}
              <Link to={`/projects/${p._id}`}>View</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{padding:'18px 0'}}>
        <h2>YouTube Reviews</h2>
        <YouTubeSlider videos={yt} />
      </section>
    </div>
  );
}
