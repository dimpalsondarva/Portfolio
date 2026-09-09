import { PROFILE } from '../data/portfolio';

export default function Footer() {
  return (
    <footer>
      <div className="container foot">
        <span>© 2026 {PROFILE.name}</span>
        <span className="muted">Minimal • Premium • Responsive • React + TS</span>
      </div>
    </footer>
  );
}
