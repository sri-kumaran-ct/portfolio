/**
 * pages/About.jsx
 * ✏️  Fill in all the placeholder sections with your own data.
 */

// ✏️  Customize with your skills organized by category
const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Mongoose', 'Prisma'],
  },
  {
    category: 'DevOps / Cloud',
    icon: '☁️',
    skills: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Linux', 'Nginx'],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'VS Code', 'Postman', 'Figma', 'Jira', 'Notion'],
  },
];

// ✏️  Replace with your work experience
const EXPERIENCE = [
  {
    role: '[Your Job Title]',
    company: '[Company Name]',
    period: 'Jan 2023 — Present',
    description: 'Describe what you did here — key responsibilities, technologies used, and impact you made. Use action verbs and quantify where possible.',
    tech: ['React', 'Node.js', 'AWS'],
  },
  {
    role: '[Previous Role]',
    company: '[Previous Company]',
    period: 'Jun 2021 — Dec 2022',
    description: 'Another role description. Highlight achievements and technologies used.',
    tech: ['Vue.js', 'Python', 'PostgreSQL'],
  },
  {
    role: '[Internship / Earlier Role]',
    company: '[Company]',
    period: 'Jan 2021 — May 2021',
    description: 'Your internship or earlier experience description.',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
];

// ✏️  Replace with your education
const EDUCATION = [
  {
    degree: '[Your Degree, e.g. B.Tech in Computer Science]',
    institution: '[Your University / College]',
    period: '2018 — 2022',
    description: 'Relevant coursework, GPA, achievements, clubs, etc.',
  },
  {
    degree: '[Certification or Course]',
    institution: '[Platform, e.g. Coursera / freeCodeCamp]',
    period: '2022',
    description: 'What you learned and built.',
  },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="section pb-0">
        <p className="font-mono text-accent text-sm mb-2">01. about me</p>
        <h1 className="section-title text-gray-900 dark:text-white">
          The person<br />
          <span className="text-gradient">behind the code.</span>
        </h1>
        <div className="accent-line" />

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            {/* ✏️  Replace with your full bio */}
            <p>
              Hi! I'm <strong className="text-gray-900 dark:text-white">[Your Name]</strong>, a
              full-stack developer based in <span className="text-accent">[City, Country]</span>.
              I've been building web applications for [X] years, with a focus on
              creating clean, performant, and user-friendly experiences.
            </p>
            <p>
              My journey into programming started when [✏️ brief origin story]. Since then,
              I've worked on [types of projects] and collaborated with [teams/clients].
            </p>
            <p>
              Outside of work, I enjoy [✏️ hobbies/interests]. I believe the best developers
              bring curiosity and creativity beyond just technical skill.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Years Coding',   value: '3+' }, // ✏️
              { label: 'Projects Built', value: '20+' }, // ✏️
              { label: 'Technologies',   value: '15+' }, // ✏️
              { label: 'Cups of Coffee', value: '∞'  },
            ].map(({ label, value }) => (
              <div key={label} className="card p-5 text-center">
                <p className="font-display text-3xl font-black text-accent">{value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────── */}
      <section className="section">
        <p className="font-mono text-accent text-sm mb-2">02. skills</p>
        <h2 className="section-title text-gray-900 dark:text-white">What I work with</h2>
        <div className="accent-line" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map(({ category, icon, skills }) => (
            <div key={category} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{icon}</span>
                <h3 className="font-semibold text-gray-900 dark:text-white">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => <span key={s} className="tech-badge">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────── */}
      <section className="section">
        <p className="font-mono text-accent text-sm mb-2">03. experience</p>
        <h2 className="section-title text-gray-900 dark:text-white">Where I've worked</h2>
        <div className="accent-line" />
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-100 dark:bg-gray-800 ml-2.5 hidden md:block" />
          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="md:pl-12 relative">
                <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 border-accent bg-white dark:bg-surface-dark hidden md:block" />
                <div className="card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{exp.role}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ────────────────────────────────────── */}
      <section className="section">
        <p className="font-mono text-accent text-sm mb-2">04. education</p>
        <h2 className="section-title text-gray-900 dark:text-white">Academic background</h2>
        <div className="accent-line" />
        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="card p-6">
              <p className="font-mono text-xs text-accent mb-2">{edu.period}</p>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{edu.institution}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
