import { SKILLS } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeading num="03" title="Skills" />
      <div className="skills-grid">
        {SKILLS.map((s) => (
          <div key={s.title} className="card skill">
            <h3>{s.title}</h3>
            <p>{s.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
