import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/10 shadow-lg border-b border-white/20"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="text-2xl font-bold tracking-widest text-white drop-shadow-lg">Ahadul Islam</span>
        <ul className="flex gap-6 text-white font-medium">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-indigo-200 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}