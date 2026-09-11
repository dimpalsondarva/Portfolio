import { FAQS } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Faq() {
  return (
    <section id="faq" className="section container" aria-label="Frequently asked questions">
      <SectionHeading num="05" title="FAQ" />
      <div className="faq-list">
        {FAQS.map((f) => (
          <details key={f.question} className="card faq-item">
            <summary>{f.question}</summary>
            <p className="muted">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
