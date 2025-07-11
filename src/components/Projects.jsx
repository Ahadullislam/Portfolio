import { motion } from 'framer-motion';
import { SiFlutter, SiPython } from 'react-icons/si';
import { FaChrome, FaFirefoxBrowser, FaMobileAlt, FaReact } from 'react-icons/fa';

const projects = [
  {
    title: 'two2dgame',
    icon: FaMobileAlt,
    description:
      'A simple 2D game project. Explore the code and gameplay on GitHub.',
    link: 'https://github.com/Ahadullislam/two2dgame',
  },
  {
    title: 'demo_Shopiki',
    icon: FaMobileAlt,
    description:
      'A modern e-commerce mobile app built with Flutter and Dart, featuring a smooth UI and real-time shopping experience.',
    link: 'https://github.com/Ahadullislam/demo_Shopiki',
  },
  {
    title: 'FixMate',
    icon: FaMobileAlt,
    description:
      'A Flutter-based service booking app for home repairs and maintenance, with advanced state management.',
    link: 'https://github.com/Ahadullislam/FixMate',
  },
  {
    title: 'Deenverse',
    icon: FaMobileAlt,
    description:
      'A cross-platform Islamic lifestyle app built with Flutter, offering a range of features for daily use.',
    link: 'https://github.com/Ahadullislam/Deenverse',
  },
  {
    title: 'BMI_Calculator',
    icon: FaMobileAlt,
    description:
      'A simple BMI calculator app to track and analyze body mass index.',
    link: 'https://github.com/Ahadullislam/BMI_Calculator',
  },
  {
    title: 'V_Card',
    icon: FaMobileAlt,
    description:
      'A digital business card app for sharing contact info easily.',
    link: 'https://github.com/Ahadullislam/V_Card',
  },
  {
    title: 'Roll_The_Dice',
    icon: FaMobileAlt,
    description: 'A fun and interactive dice rolling mobile app.',
    link: 'https://github.com/Ahadullislam/Roll_The_Dice',
  },
  {
    title: 'RandomIT',
    icon: FaChrome,
    description:
      'RandomIT: A project for generating random IT interview questions. Check it out on GitHub.',
    link: 'https://github.com/Ahadullislam/RandomIT',
  },
  {
    title: 'OMR',
    icon: SiPython,
    description:
      'An Optical Mark Recognition system in Python for automated exam grading and data processing.',
    link: 'https://github.com/Ahadullislam/OMR',
  },
  {
    title: 'Image-Steganography',
    icon: SiPython,
    description:
      'A Python tool for hiding secret messages inside images using steganography techniques.',
    link: 'https://github.com/Ahadullislam/Image-Steganography',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-5xl py-16 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-white mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {projects.map(({ title, icon: Icon, description, link }, idx) => (
          <motion.a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 40, opacity: 0, rotateY: 30 }}
            whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
            whileHover={{
              scale: 1.08,
              rotateY: 8,
              boxShadow:
                '0 12px 40px 0 rgba(59,130,246,0.35), 0 1.5px 0 #fff',
            }}
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
              type: 'spring',
              stiffness: 120,
            }}
            viewport={{ once: true }}
            className="bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl p-7 flex flex-col items-center border border-white/30 hover:bg-white/30 transition-all min-h-[240px] relative overflow-hidden group"
            style={{ perspective: '800px' }}
          >
            <div className="mb-4 text-5xl text-indigo-200 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <Icon />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 text-center drop-shadow">
              {title}
            </h3>
            <p className="text-white/90 text-sm text-center mb-4 leading-relaxed">
              {description}
            </p>
            <span className="text-indigo-100 text-xs underline">
              View on GitHub
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}