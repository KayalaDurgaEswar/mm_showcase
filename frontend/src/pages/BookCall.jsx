import React, { useState } from 'react';
import API from '../api/api';

export default function BookCall(){
  const [form, setForm] = useState({ name:'', phone:'', email:'', city:'', preferredDateTime:'', message:'' });
  const [ok, setOk] = useState(null);

  const submit = async e => {
    e.preventDefault();
    try {
      await API.post('/calls', form);
      setOk(true);
      setForm({ name:'', phone:'', email:'', city:'', preferredDateTime:'', message:'' });
    } catch (err) { setOk(false); }
  };

  return (
    <div className="container" style={{padding:'28px 0'}}>
      <h2>Book a Call</h2>
      <form onSubmit={submit} style={{maxWidth:600}}>
        <div className="form-row">
          <input placeholder="Name" required value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} />
          <input placeholder="Phone" required value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} />
          <input placeholder="Email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} />
          <input placeholder="City" value={form.city} onChange={e=>setForm(f=>({...f,city:e.target.value}))} />
          <input placeholder="Preferred date/time" value={form.preferredDateTime} onChange={e=>setForm(f=>({...f,preferredDateTime:e.target.value}))} />
          <textarea placeholder="Message" value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} />
          <button className="btn" type="submit">Request Call</button>
          {ok === true && <div style={{color:'green'}}>Request sent</div>}
          {ok === false && <div style={{color:'red'}}>Failed</div>}
        </div>
      </form>
    </div>
  );
}
