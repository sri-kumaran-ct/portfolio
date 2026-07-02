export default function ProjectCard({ project }) {
  const { title, description, techStack, githubLink, liveLink, featured } = project;

  return (
    <article className="card group p-6 flex flex-col gap-4 animate-fade-in">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {featured && (
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/20 text-accent-dark dark:text-accent border border-accent/30">
              ⭐ Featured
            </span>
          )}
        </div>
        <div className="text-accent opacity-60 group-hover:opacity-100 transition-opacity text-2xl">📁</div>
      </div>

      <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors line-clamp-1">
        {title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent transition-colors flex items-center gap-1">
            <span>⌥</span> GitHub
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent transition-colors flex items-center gap-1">
            <span>↗</span> Live
          </a>
        )}
      </div>
    </article>
  );
}
