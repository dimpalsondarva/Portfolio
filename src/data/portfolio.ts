export interface Social {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  items: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string;
  status: string;
}

export const PROFILE = {
  name: 'Dimpal Sondarva',
  firstName: 'Dimpal',
  lastName: 'Sondarva',
  role: '3rd Semester Student',
  university: 'Dr. Subhash University',
  location: 'India',
  tagline:
    'Student at Dr. Subhash University — learning, building, and crafting clean, thoughtful work.',
  aboutLead:
    "I'm Dimpal Sondarva, a 3rd-semester student at Dr. Subhash University. I keep things simple, clean, and intentional — this portfolio reflects exactly that.",
  aboutBody:
    "I'm currently building my foundations in computer studies, design thinking, and the web. I enjoy learning new tools, improving a little every day, and turning ideas into minimal, functional experiences. Open to internships, collaboration, and mentorship.",
} as const;

export const SOCIALS: Social[] = [
  { label: 'GitHub', href: 'https://github.com/dimpalsondarva' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dimpal-sondarva' },
  { label: 'Instagram', href: 'https://www.instagram.com/dimpal__.11' },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: 'Who is Dimpal Sondarva?',
    answer:
      'Dimpal Sondarva is a 3rd-semester student at Dr. Subhash University in India, learning modern web development with React and TypeScript.',
  },
  {
    question: 'What is Dimpal Sondarva currently studying?',
    answer:
      'Currently in the 3rd semester at Dr. Subhash University, building foundations in computer studies, React, TypeScript and UI design.',
  },
  {
    question: 'What skills does Dimpal Sondarva have?',
    answer:
      'HTML, CSS, JavaScript, React, TypeScript and Vite, plus tools like Git, GitHub and VS Code.',
  },
  {
    question: 'Is Dimpal Sondarva open to opportunities?',
    answer:
      'Yes — open to internships, collaboration and mentorship. Reach out via GitHub, LinkedIn or Instagram.',
  },
  {
    question: 'Where can I find Dimpal Sondarva online?',
    answer:
      'On GitHub (github.com/dimpalsondarva), LinkedIn (linkedin.com/in/dimpal-sondarva) and Instagram (instagram.com/dimpal__.11).',
  },
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
] as const;

export const SKILLS: SkillGroup[] = [
  { title: 'Fundamentals', items: 'HTML • CSS • Basic JavaScript' },
  { title: 'Modern Stack', items: 'React • TypeScript • Vite' },
  { title: 'Tools', items: 'VS Code • Git • GitHub • Canva' },
  { title: 'Learning Next', items: 'Responsive Design • UI Basics • Python' },
];

export const PROJECTS: Project[] = [  {
    title: 'Personal Portfolio v2',
    description: 'This website — minimal, premium, fully responsive in React + TS.',
    stack: 'React • TypeScript • Vite',
    status: 'Live',
  },
  {
    title: 'Semester Mini Project',
    description: 'A clean academic project slot for 3rd semester work.',
    stack: 'To be added',
    status: 'Coming Soon',
  },
  {
    title: 'Design Exploration',
    description: 'UI experiments, layouts and aesthetic studies.',
    stack: 'To be added',
    status: 'Coming Soon',
  },
];
