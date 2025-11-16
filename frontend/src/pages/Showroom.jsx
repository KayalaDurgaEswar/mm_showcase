import React, { useEffect, useState } from 'react';
import API from '../api/api';

export default function Showroom(){
  const [products, setProducts] = useState([]);
  useEffect(()=>{ API.get('/products').then(r=>setProducts(r.data)).catch(()=>{}); },[]);
  return (
    <div className="container" style={{padding:'28px 0'}}>
      <h2>Showroom</h2>
      <div className="grid cols-3" style={{marginTop:12}}>
        {products.map(p => (
          <div key={p._id} className="card">
            <h3>{p.name}</h3>
            <p style={{color:'#666'}}>{p.type}</p>
            <p><strong>₹{p.pricePerSqft || '—'}/sqft</strong></p>
            {p.images && p.images[0] && <img src={`http://localhost:5000${p.images[0]}`} style={{width:'100%',borderRadius:6}} alt="" />}
          </div>
        ))}
      </div>
    </div>
  );
}
