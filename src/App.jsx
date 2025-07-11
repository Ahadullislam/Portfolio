import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-400 via-indigo-500 to-blue-900 relative overflow-x-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col items-center px-4 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;