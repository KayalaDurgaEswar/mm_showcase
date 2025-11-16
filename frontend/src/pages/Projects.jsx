import React, { useState, useEffect } from 'react';
import API from '../api/api';
import { Link } from 'react-router-dom';

export default function Projects(){
  const [projects, setProjects] = useState([]);
  useEffect(()=>{ API.get('/projects').then(r=>setProjects(r.data)).catch(()=>{}); },[]);
  return (
    <div className="container" style={{padding:'28px 0'}}>
      <h2>Projects</h2>
      <div className="grid cols-3" style={{marginTop:12}}>
        {projects.map(p => (
          <div key={p._id} className="card">
            <h3>{p.title}</h3>
            <p style={{color:'#666'}}>{p.category} • {p.city}</p>
            {p.images && p.images[0] && <img src={`http://localhost:5000${p.images[0]}`} style={{width:'100%',borderRadius:6}} alt="" />}
            <Link to={`/projects/${p._id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
