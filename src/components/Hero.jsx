import { motion } from 'framer-motion';
import { SiC, SiCplusplus, SiPython, SiFlutter, SiDart, SiHtml5, SiCss3 } from 'react-icons/si';

const icons = [
  { icon: SiC, label: 'C' },
  { icon: SiCplusplus, label: 'C++' },
  { icon: SiHtml5, label: 'HTML5' },
  { icon: SiCss3, label: 'CSS3' },
  { icon: SiPython, label: 'Python' },
  { icon: SiDart, label: 'Dart' },
  { icon: SiFlutter, label: 'Flutter' },
];

export default function Hero() {
  return (
    <section id="home" className="w-full flex flex-col items-center justify-center py-16 sm:py-24">
      <div className="flex-shrink-0 mb-6">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-300 via-indigo-400 to-blue-700 flex items-center justify-center shadow-2xl border-4 border-white/40 overflow-hidden">
          <img
            src="/profile.png"
            alt="Ahadul Islam profile illustration"
            className="w-full h-full object-cover rounded-full border-2 border-white/40 shadow-lg transition-transform duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #93c5fd 0%, #6366f1 100%)',
            }}
          />
        </div>
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotateY: 30 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="text-7xl sm:text-8xl font-extrabold text-white drop-shadow-2xl mb-4"
        style={{ textShadow: '0 8px 32px rgba(0,0,0,0.25), 0 2px 0 #3b82f6', perspective: '600px' }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-200 to-indigo-300" style={{ WebkitTextStroke: '2px #3b82f6', filter: 'drop-shadow(0 0 24px #60a5fa)' }}>Ahadul Islam</span>
      </motion.div>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-xl sm:text-2xl text-white text-center font-light max-w-2xl mb-8"
      >
        Hi, I'm <span className="font-semibold text-indigo-100">MD Ahadul Islam</span> – a Junior Developer passionate about modern technology and calm creativity.
      </motion.h1>
      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-2"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {icons.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            variants={{
              hidden: { scale: 0, opacity: 0, rotateY: 30 },
              visible: { scale: 1, opacity: 1, rotateY: 0 },
            }}
            whileHover={{ scale: 1.25, rotate: 12, boxShadow: '0 8px 32px 0 rgba(99,102,241,0.25)' }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-white/30 backdrop-blur-2xl rounded-full p-5 shadow-2xl border border-white/30 hover:bg-white/40 transition-all"
            title={label}
            style={{ perspective: '400px' }}
          >
            <Icon className="text-3xl sm:text-4xl text-white drop-shadow" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}