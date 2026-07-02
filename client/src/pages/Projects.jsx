/**
 * pages/Projects.jsx
 * Static version — no backend needed.
 * ✏️  Edit the PROJECTS array below to add your own projects.
 */

import { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';

// ✏️  Add / edit / remove your projects here
const PROJECTS = [
  {
    _id: '1',
    title: 'Efficient Indexing and Querying for Massive Graph Databases ',
    description: 'Implemented a graph-based indexing system to efficiently store, query, and retrieve interconnected data using optimized graph traversal techniques',
    techStack: ['Python', 'Flask/FastAPI', 'Graph Data Structures', 'Algorithms (DFS, BFS)', 'Indexing Techniques', 'Data Structures', 'File Handling'],
    githubLink: 'https://github.com/TeeYesKay/Graph-Indexing-System',
    featured: true,
  },
  {
    _id: '2',
    title: 'Sentiment Analysis App',
    description: 'Performs sentiment analysis on user entered text using Flask',
    techStack: ['Python', 'Flask', 'NLTK/TextBlob', 'HTML', 'CSS'],
    githubLink: 'https://github.com/TeeYesKay/CODEXINTERN/tree/main/sentiment%20analysis',
    liveLink: '',
    featured: true,
  },
  {
    _id: '3',
    title: 'Matrix operations Tools',
    description: 'Performs computations with matrices with help of Numpy in Python',
    techStack: ['Python', 'NumPy'],
    githubLink: 'https://github.com/TeeYesKay/CODEXINTERN/tree/main/matrix%20operations%20tool',
    liveLink: '',
    featured: true,
  },
  {
    _id: '4',
    title: 'CSV Data Analysis',
    description: 'Computes average of a dataset and depicts in graphical representation using Pandas and Matplotlib',
    techStack: ['Python', 'Pandas', 'Matplotlib'],
    githubLink: 'https://github.com/TeeYesKay/CODEXINTERN/tree/main/data%20analysis',
    liveLink: '',
    featured: true,
  },
  {
    _id: '5',
    title: 'Task Management Application',
    description: 'Developed a task management web application to create, update, and track tasks with user authentication and dynamic data handling',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication'],
    githubLink: 'https://github.com/TeeYesKay/task-management',
    liveLink: '',
    featured: true,
  },
  {
    _id: '6',
    title: 'Blog Platform with Comments',
    description: 'Created a blogging platform with post creation, editing, and user interaction through comments',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React.js', 'FastAPI/Flask', 'SQLite/MongoDB', 'REST APIs', 'Authentication'],
    githubLink: 'https://github.com/sri-kumaran-ct/Blog-app',
    liveLink: '',
    featured: true,
  },
  {
    _id: '7',
    title: 'E-Commerce Web Application',
    description: 'Built an online store with product catalog, cart, and order management including role-based access',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MySQL/PostgreSQL', 'REST APIs', 'Authentication'],
    githubLink: 'https://github.com/sri-kumaran-ct/e_commerce-app',
    liveLink: '',
    featured: true,
  },
  // ✏️  Keep adding more below in the same format...
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Build unique list of all tech tags from projects
  const allTech = useMemo(() => {
    const set = new Set();
    PROJECTS.forEach((p) => p.techStack.forEach((t) => set.add(t)));
    return ['All', ...Array.from(set).sort()];
  }, []);

  // Apply filter
  const filtered = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter((p) =>
      p.techStack.some((t) => t.toLowerCase() === activeFilter.toLowerCase())
    );
  }, [activeFilter]);

  return (
    <div className="pt-16">
      <section className="section">
        {/* Header */}
        <p className="font-mono text-accent text-sm mb-2">02. projects</p>
        <h1 className="section-title text-gray-900 dark:text-white">
          Things I've <span className="text-gradient">built.</span>
        </h1>
        <div className="accent-line" />

        <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-xl">
          {/* ✏️  Customize this description */}
          A selection of my work — from side projects to production applications.
          Each one taught me something new.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allTech.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`text-sm font-mono px-4 py-1.5 rounded-full border transition-all duration-200 ${
                activeFilter === tech
                  ? 'bg-accent text-gray-900 border-accent'
                  : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-accent hover:text-accent'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Empty filter state */}
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-gray-500 dark:text-gray-400">
              No projects found for "{activeFilter}".
            </p>
            <button
              onClick={() => setActiveFilter('All')}
              className="mt-4 text-accent hover:underline text-sm"
            >
              Show all projects
            </button>
          </div>
        )}

        {/* Project grid */}
        {filtered.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}

        {/* Count indicator */}
        {filtered.length > 0 && (
          <p className="text-center text-sm text-gray-400 dark:text-gray-600 mt-10 font-mono">
            Showing {filtered.length} of {PROJECTS.length} projects
            {activeFilter !== 'All' && ` filtered by "${activeFilter}"`}
          </p>
        )}
      </section>
    </div>
  );
}
