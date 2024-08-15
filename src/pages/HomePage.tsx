import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function HomeScreen() {
  return (
    
        <HeroSection />
  );
}



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

