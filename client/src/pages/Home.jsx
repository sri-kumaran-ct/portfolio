/**
 * pages/Home.jsx
 * Landing page with hero, bio, skills preview, and contact form.
 * ✏️  Edit all [YOUR …] placeholders with your real content.
 */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Skills for the hero ticker ────────────────────────────── */
// ✏️  Customize with your own skills
const SKILLS = [
  'Python', 'Java', 'C++', 'C', 'SQL', 'JavaScript', 'PHP',
'HTML5', 'CSS', 'React.js', 'FastAPI', 'Flask', 'Tailwind CSS',
'MongoDB', 'MySQL', 'SQLite',
'Data Structures', 'Algorithms', 'OOPS', 'DBMS', 'Operating Systems', 'Computer Networks', 'Machine Learning',
'VS Code', 'Git', 'GitHub'
];

/* ── Social links ───────────────────────────────────────────── */
// ✏️  Replace with your own links
const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/sri-kumaran-ct',      icon: '⌥' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sri-kumaran-ct-119b43328', icon: '⬡' },
  { label: 'Email',    href: 'mailto:srikumaranct.cse2024@citchennai.net',               icon: '✉' },
];

export default function Home() {
  const heroRef = useRef(null);

  // Parallax tilt on mouse move (desktop only)
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      const x = ((clientX - left) / width  - 0.5) * 6;
      const y = ((clientY - top)  / height - 0.5) * -6;
      el.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };
    const onLeave = () => { el.style.transform = 'rotateY(0deg) rotateX(0deg)'; };
    const parent = el.parentElement;
    parent.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseleave', onLeave);
    return () => {
      parent.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-16 px-6 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-400/5 blur-3xl animate-pulse-slow delay-300" />
          <div
            className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(#888 1px,transparent 1px),linear-gradient(90deg,#888 1px,transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div className="order-2 md:order-1">
            

            <h1 className="font-display text-5xl md:text-7xl font-black leading-tight mb-6 animate-slide-up">
              
              <span className="text-gradient">I'm Sri Kumaran CT</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-light animate-slide-up delay-100">
              {/* ✏️  Replace with your title/role */}
              Aspiring Software Engineer | Full-Stack Developer | Problem Solver
            </p>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-lg animate-slide-up delay-200">
              {/* ✏️  Replace with your short bio (2-3 sentences) */}
              I build scalable web applications and solve real-world problems using Data Structures, Algorithms, and modern development tools.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
              <Link to="/projects" className="btn-primary">
                View My Work →
              </Link>
              <a href="#contact" className="btn-ghost">
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-5 mt-10 animate-fade-in delay-400">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-accent hover:border-accent transition-all duration-200 hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Avatar / card side */}
          <div className="order-1 md:order-2 flex justify-center" style={{ perspective: '800px' }}>
            <div
              ref={heroRef}
              className="relative w-72 h-72 md:w-80 md:h-80 transition-transform duration-150 ease-out animate-float"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-cyan-400 to-emerald-400 opacity-20 blur-xl" />

              {/* Avatar circle */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-accent/20 to-cyan-400/20 flex items-center justify-center">
                {/*
                  ✏️  Option 1: Use a real profile image — place it in client/public/profile.jpg
                  <img src="/profile.jpg" alt="Your Name" className="w-full h-full object-cover" />

                  Option 2: Placeholder initials (current — delete once you add a photo)
                */}
                <img
                src="/srikumaran.jpg"
                alt="Sri Kumaran CT"
                className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge — years of experience */}
              <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-4 py-2 shadow-lg">
                <p className="font-mono text-xs text-gray-500">Experience</p>
                {/* ✏️  Replace with your years */}
                <p className="font-display font-bold text-accent text-lg">3+ yrs</p>
              </div>

              {/* Floating badge — projects */}
              <div className="absolute -top-3 -left-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-4 py-2 shadow-lg">
                <p className="font-mono text-xs text-gray-500">Projects</p>
                {/* ✏️  Replace with your count */}
                <p className="font-display font-bold text-accent text-lg">20+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 animate-bounce">
          <span className="text-xs font-mono">scroll</span>
          <span>↓</span>
        </div>
      </section>

      {/* ── Tech ticker ───────────────────────────────────────── */}
      <section className="py-12 border-y border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="flex gap-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {[...SKILLS, ...SKILLS].map((skill, i) => (
            <span
              key={i}
              className="text-gray-400 dark:text-gray-600 font-mono text-sm flex items-center gap-2"
            >
              <span className="text-accent">✦</span> {skill}
            </span>
          ))}
        </div>

        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ── About preview ─────────────────────────────────────── */}
      <section id="about" className="section">
        <p className="font-mono text-accent text-sm mb-2">01. about</p>
        <h2 className="section-title text-gray-900 dark:text-white">Who I Am</h2>
        <div className="accent-line" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            {/* ✏️  Replace with your detailed bio paragraphs */}
           <p> I am an aspiring software engineer with a strong focus on problem-solving and building real-world applications.
            

I have been consistently working on Data Structures and Algorithms to strengthen my logical thinking and coding skills. Alongside this, I have been exploring full-stack development by building projects that integrate frontend, backend, and databases.
</p><p>
I enjoy developing applications that solve practical problems. One of my key projects involves optimizing delivery routes using mapping tools and algorithms, aiming to improve efficiency in real-world logistics.

I believe in learning by building. Every project I create is an opportunity to understand how systems work in real-world scenarios, from designing user interfaces to handling backend logic and data.

Currently, I am focused on improving my development skills, writing clean and efficient code, and preparing myself for real-world software engineering roles.
            </p>
            <a href="#contact" className="btn-primary inline-flex mt-2">
              Let's talk →
            </a>
          </div>

          {/* Skills grid */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span key={s} className="tech-badge">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <section id="contact" className="section">
        <p className="font-mono text-accent text-sm mb-2">03. contact</p>
        <h2 className="section-title text-gray-900 dark:text-white">Get In Touch</h2>
        <div className="accent-line" />
        <ContactForm />
      </section>
    </>
  );
}

/* ── Contact Form — opens email client, no backend needed ───── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✏️  Replace with your email address
    const to      = 'you@example.com';
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body    = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    // Opens the visitor's default email app with fields pre-filled
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Email app opened!
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Your message has been drafted. Just hit send in your email client.
        </p>
        <button onClick={() => setSent(false)} className="btn-ghost">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="form-input resize-none"
          placeholder="Hi! I'd love to talk about..."
        />
      </div>

      <button type="submit" className="btn-primary">
        Send Message →
      </button>
    </form>
  );
}
