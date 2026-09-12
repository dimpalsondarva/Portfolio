import { useState } from 'react';
import { NAV_LINKS } from '../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Primary">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          DS<span>.</span>
        </a>
        <div className={`nav-links ${open ? 'open' : ''}`} id="navLinks">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
        <div className="nav-actions">
          <button
            className={`menu-btn ${open ? 'active' : ''}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
