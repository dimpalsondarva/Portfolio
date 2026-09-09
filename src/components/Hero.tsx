import { PROFILE } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="hero container">
      <p className="eyebrow">
        <span className="dot" /> Available for opportunities • 3rd Semester
      </p>
      <h1>
        {PROFILE.firstName} <em>{PROFILE.lastName}</em>
      </h1>
      <p className="subtitle">{PROFILE.tagline}</p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-dark">
          View Work
        </a>
        <a href="#contact" className="btn btn-light">
          Get in Touch
        </a>
      </div>
      <div className="hero-meta">
        <div>
          <strong>Currently</strong>
          <span>
            3rd Semester, {PROFILE.university}
          </span>
        </div>
        <div>
          <strong>Focus</strong>
          <span>React • TypeScript • Design</span>
        </div>
        <div>
          <strong>Location</strong>
          <span>{PROFILE.location}</span>
        </div>
      </div>
    </section>
  );
}
