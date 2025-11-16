import React, { useState } from 'react';
import API from '../../api/api';

export default function AdminLogin(){
  const [form, setForm] = useState({ email:'', password:'' });
  const [msg, setMsg] = useState('');

  const submit = async e => {
    e.preventDefault();
    try {
      const r = await API.post('/auth/login', form);
      localStorage.setItem('mm_token', r.data.token);
      setMsg('Logged in — token saved to localStorage');
    } catch (err) {
      setMsg('Login failed');
    }
  };

  return (
    <div className="container" style={{padding:'28px 0',maxWidth:600}}>
      <h2>Admin Login</h2>
      <form onSubmit={submit} className="form-row">
        <input placeholder="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} />
        <input placeholder="password" type="password" value={form.password} onChange={e=>setForm(f=>({...f,password:e.target.value}))} />
        <button className="btn">Login</button>
        <div>{msg}</div>
      </form>
    </div>
  );
}
