import React from 'react';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex',justifyContent:'space-between',gap:16,flexWrap:'wrap'}}>
        <div style={{maxWidth:480}}>
          <h3>M&amp;M Interior Works</h3>
          <p>Crafting beautiful and functional interiors with precision aluminum works in Vizag.</p>
          <p>123 Steel Road, Gajuwaka, Visakhapatnam, AP, 530026</p>
          <p>Email: contact@mminterior.com | Phone: +91 12345 67890</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul style={{listStyle:'none',padding:0,margin:0}}>
            <li><a href="/">About Us</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/showroom">Showroom</a></li>
            <li><a href="/book-call">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
