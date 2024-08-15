

import React, { useEffect, useRef } from 'react';

export default function HomeScreen(){
    return <>
    <HeroSection />
    </>
}

const HeroSection: React.FC = () => {
  const photoRef = useRef<HTMLImageElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const photo = photoRef.current;
    const heading = headingRef.current;
    const description = descriptionRef.current;

    if (photo && heading && description) {
      photo.classList.add('animate-fade-in-right');
      heading.classList.add('animate-fade-in-left');
      description.classList.add('animate-fade-in-up');
    }
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-900 to-purple-900 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white space-y-6">
          <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight opacity-0">
            Karibu, I'm Yasu Fadhili
          </h1>
          <p ref={descriptionRef} className="text-xl sm:text-2xl opacity-0">
            Crafting elegant solutions through code. I'm a passionate software developer with expertise in web and mobile app development, always pushing the boundaries of what's possible in the digital realm.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              View Projects
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-purple-900">
              Contact Me
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            ref={photoRef}
            src="https://randomuser.me/api/portraits/men/59.jpg"
            alt="Yasu Fadhili"
            className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg opacity-0"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
        >
          <path
            fill="currentColor"
            d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,101.3C672,107,768,85,864,74.7C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
