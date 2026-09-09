import { PROFILE } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionHeading num="01" title="About" />
      <div className="card grid-2">
        <p className="lead">{PROFILE.aboutLead}</p>
        <p className="muted">{PROFILE.aboutBody}</p>
      </div>
    </section>
  );
}
