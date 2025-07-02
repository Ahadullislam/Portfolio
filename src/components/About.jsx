import { motion } from 'framer-motion';

const timeline = [
  {
    title: 'Junior Flutter Developer',
    period: '2024 - Present',
    description:
      'Logic & Pixel Technologies: Building cross-platform mobile apps using Flutter. Collaborating with QA and design teams to deliver scalable systems.',
  },
  {
    title: 'Intern, Developer & Project Management',
    period: '2024',
    description:
      'Logic & Pixel Technologies: Internship focused on Flutter development, software QA, agile teamwork, and project management.',
  },
  {
    title: 'B.Sc. in Computer Science & Engineering',
    period: '2018 - 2023',
    description:
      'Institute of Science & Technology (Affiliated with National University)',
  },
  {
    title: 'Flutter Development Course',
    period: '2023',
    description:
      'LEAD Academy: Hands-on training in Dart and Flutter. Built multiple app prototypes.',
  },
];

const strengths = [
  'Strong problem-solving and analytical abilities',
  'Fast learner and highly adaptable',
  'Passionate about mobile technology and software quality',
  'Effective team player with a growth mindset',
];

const languages = ['Bangla (Native)', 'English (Proficient)'];

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-4xl flex flex-col items-center py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-transparent w-full flex flex-col md:flex-row items-center gap-10"
      >
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white/20 backdrop-blur-2xl rounded-2xl shadow-xl p-8 border border-white/30">
            <h2 className="text-3xl font-bold text-indigo-100 mb-2 tracking-wide" align="center">
              About Me
            </h2>
            <div className="mb-2 font-bold text-xl text-white">
              MD Ahadul Islam
            </div>
            <div className="mb-2 text-white/90 text-base leading-relaxed">
              Highly motivated and detail-oriented Software Developer with a strong foundation in programming, system design, and mobile/web application development, complemented by a growing interest in project management. Eager to contribute to a forward-thinking software company, leveraging technical skills, problem-solving abilities, and a collaborative mindset to build scalable, efficient solutions and support successful project execution. Passionate about continuous learning and innovation in fast-paced environments.
            </div>
            <a
              href="/MD_Ahadul_Islam_Resume.pdf"
              download
              className="inline-block mt-2 px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow transition-colors duration-200 border border-white/20 backdrop-blur-md shadow-lg hover:shadow-xl"
            >
              Download Resume (PDF)
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/20 backdrop-blur-2xl rounded-2xl shadow-xl p-8 border border-white/30 flex-1">
              <div className="font-semibold text-indigo-100 mb-2 text-lg">
                Strengths
              </div>
              <ul className="list-disc list-inside text-white/90 text-base">
                {strengths.map((strength) => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/20 backdrop-blur-2xl rounded-2xl shadow-xl p-8 border border-white/30 flex-1">
              <div className="font-semibold text-indigo-100 mb-2 text-lg">
                Languages
              </div>
              <ul className="list-disc list-inside text-white/90 text-base">
                {languages.map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-2xl rounded-2xl shadow-xl p-8 border border-white/30">
            <h3 className="text-2xl font-semibold text-indigo-100 mb-4">
              Education, Training & Experience
            </h3>
            <ul className="timeline timeline-vertical">
              {timeline.map((item, idx) => (
                <li key={item.title} className="mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-indigo-300 shadow"></span>
                    <span className="text-lg text-white font-bold">
                      {item.title}
                    </span>
                    <span className="ml-auto text-sm text-indigo-100">
                      {item.period}
                    </span>
                  </div>
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.6 }}
                    className="ml-6 text-white/90 text-base leading-relaxed"
                  >
                    {item.description}
                  </motion.p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}