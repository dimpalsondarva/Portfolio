import { PROJECTS } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionHeading
        num="04"
        title="Projects"
        action={
          <a href="#contact" className="link">
            Suggest one →
          </a>
        }
      />
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <article key={p.title} className="card project">
            <span className="tag">{p.status}</span>
            <h3>{p.title}</h3>
            <p className="muted">{p.description}</p>
            <div className="p-foot">
              <span>{p.stack}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
