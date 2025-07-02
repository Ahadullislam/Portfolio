import { FaGithub, FaLinkedin, FaFacebook, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from '../emailjs.config';

const contacts = [
  { icon: FaGithub, label: 'GitHub', link: 'https://github.com/Ahadullislam' },
  { icon: FaLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/ahadul-islam-977b601b8/' },
  { icon: SiGmail, label: 'Gmail', link: 'mailto:ahadul23023@gmail.com' },
  { icon: FaFacebook, label: 'Facebook', link: 'https://www.facebook.com/ahadul.islam.9212/' },
  { icon: FaPhone, label: 'Phone', link: 'tel:01521430575' },
];

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_USER_ID
      );
      setStatus('Message sent successfully!');
      formRef.current.reset();
    } catch (err) {
      setStatus('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full max-w-3xl py-16 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-white mb-6">Contact</h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full bg-white/20 backdrop-blur-2xl rounded-2xl shadow-xl p-8 flex flex-col gap-4 border border-white/30 mb-8"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="rounded-lg px-4 py-2 bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="rounded-lg px-4 py-2 bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="rounded-lg px-4 py-2 bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow transition-colors disabled:opacity-60"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {status && (
          <div className={`text-center mt-2 ${status.includes('success') ? 'text-green-300' : 'text-red-300'}`}>{status}</div>
        )}
      </form>
      <div className="flex gap-6">
        {contacts.map(({ icon: Icon, label, link }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className="text-3xl text-white hover:text-indigo-200 transition-colors bg-white/20 p-3 rounded-full shadow-lg border border-white/30"
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>
  );
}