import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/api';

export default function ProjectDetail(){
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(()=>{
    API.get(`/projects/${id}`).then(r=>setProject(r.data)).catch(()=>{});
  },[id]);

  if(!project) return <div className="container" style={{padding:28}}>Loading...</div>;

  return (
    <div className="container" style={{padding:'28px 0'}}>
      <h2>{project.title}</h2>
      <p style={{color:'#666'}}>{project.clientName} • {project.city} • {project.status}</p>
      {project.youtubeUrl && <div style={{margin:'12px 0'}}><iframe width="560" height="315" src={project.youtubeUrl} title="yt" frameBorder="0" allowFullScreen/></div>}
      <div className="grid cols-3" style={{marginTop:12}}>
        {project.images && project.images.map((img, i) => <img src={`http://localhost:5000${img}`} key={i} style={{width:'100%',borderRadius:6}} alt=""/> )}
      </div>
      <h3>Description</h3>
      <p>{project.description}</p>
    </div>
  );
}
