export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-body">
          © {year}{' '}
          {/* ✏️  Replace with your name */}
          <span className="text-accent font-semibold">Sri Kumaran CT</span>
          {' '}— Built with React & Tailwind CSS
        </p>
        <div className="flex items-center gap-5">
          {/* ✏️  Replace with your social links */}
          <a href="https://github.com/sri-kumaran-ct" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent transition-colors text-sm">GitHub</a>
          <a href="https://linkedin.com/in/sri-kumaran-ct-119b43328" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent transition-colors text-sm">LinkedIn</a>
          
        </div>
      </div>
    </footer>
  );
}
