import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

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

  export default Footer;