import { PROFILE } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section container">
      <SectionHeading num="02" title="Education" />
      <div className="card timeline">
        <div className="t-item">
          <div className="t-dot" />
          <div>
            <h3>{PROFILE.university}</h3>
            <p className="muted">Bachelor&apos;s — 3rd Semester • Currently pursuing</p>
            <span className="tag">2024 — Present</span>
          </div>
        </div>
      </div>
    </section>
  );
}
