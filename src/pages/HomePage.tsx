import React, { useState, useEffect, useRef } from 'react';
import { FaCode, FaBars, FaTimes, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function HomeScreen() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-200">
              <FaCode className="h-8 w-8" />
              <span className="text-3xl font-bold">Yasu Fadhili</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#hire-me"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Hire Me
            </a>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#hire-me"
              className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Karibu, I'm Yasu{' '}
            <span className="animate-text-shimmer bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500 bg-clip-text text-transparent bg-300% animate-gradient">
              Fadhili
            </span>
          </h1>
          <p className="text-xl sm:text-2xl animate-fade-in">
            Crafting elegant solutions through code. I'm a passionate software developer with expertise in web and mobile app development, always pushing the boundaries of what's possible in the digital realm.
          </p>
          <div className="flex space-x-4 animate-fade-in">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              View Projects
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-blue-900">
              Contact Me
            </button>
          </div>
          <div className="flex space-x-4 mt-6 animate-fade-in">
            <a href="https://github.com/yasufadhili" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200">
              <FaGithub className="h-8 w-8" />
            </a>
            <a href="https://twitter.com/yasufadhili" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200">
              <FaTwitter className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com/in/yasufadhili" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200">
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse opacity-75"></div>
            <img
              src="https://randomuser.me/api/portraits/men/59.jpg"
              alt="Yasu Fadhili"
              className="rounded-full w-64 h-64 object-cover border-4 border-blue-400 shadow-lg relative z-10 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Yasu Fadhili</h3>
            <p className="text-gray-400">Crafting digital experiences</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yasufadhili" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/yasufadhili" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/yasufadhili" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Yasu Fadhili. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};