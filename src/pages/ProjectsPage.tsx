import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaTags, FaChevronDown } from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
};

const mockProjects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Code Assistant",
    description: "Developed a VS Code extension that uses machine learning to provide intelligent code suggestions and autocompletions.",
    technologies: ["TypeScript", "Python", "Machine Learning", "VS Code API"],
    githubUrl: "https://github.com/yasufadhili/ai-code-assistant",
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=YasuFadhili.ai-code-assistant",
    imageUrl: "https://source.unsplash.com/random/800x600?coding",
  },
  {
    id: 2,
    title: "Serverless E-commerce Platform",
    description: "Built a scalable e-commerce platform using serverless architecture to handle high traffic and reduce operational costs.",
    technologies: ["React", "Node.js", "AWS Lambda", "DynamoDB"],
    githubUrl: "https://github.com/yasufadhili/serverless-ecommerce",
    liveUrl: "https://serverless-ecommerce-demo.netlify.app",
    imageUrl: "https://source.unsplash.com/random/800x600?ecommerce",
  },
  {
    id: 3,
    title: "GraphQL API for Blog Management",
    description: "Designed and implemented a GraphQL API for efficient blog content management and querying.",
    technologies: ["GraphQL", "Apollo Server", "MongoDB", "Node.js"],
    githubUrl: "https://github.com/yasufadhili/graphql-blog-api",
    imageUrl: "https://source.unsplash.com/random/800x600?api",
  },
  {
    id: 4,
    title: "Accessible React Component Library",
    description: "Created a reusable React component library with a focus on accessibility and customizable theming.",
    technologies: ["React", "TypeScript", "Storybook", "Jest"],
    githubUrl: "https://github.com/yasufadhili/accessible-react-components",
    liveUrl: "https://accessible-react-components.netlify.app",
    imageUrl: "https://source.unsplash.com/random/800x600?design",
  },
  {
    id: 5,
    title: "Real-time Collaboration Tool",
    description: "Developed a real-time collaboration tool for remote teams, featuring video conferencing and shared document editing.",
    technologies: ["WebRTC", "Socket.io", "React", "Node.js"],
    githubUrl: "https://github.com/yasufadhili/realtime-collab-tool",
    liveUrl: "https://realtime-collab-demo.herokuapp.com",
    imageUrl: "https://source.unsplash.com/random/800x600?collaboration",
  },
];

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<number>(5);

  useEffect(() => {
    // Simulate fetching projects from an API
    setProjects(mockProjects);
  }, []);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + 5);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-40">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">My Projects</h1>
          <p className="text-xl md:text-2xl animate-fade-in-up">
            Showcasing my journey in software development, AI, and related technologies.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <article 
              key={project.id} 
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-100">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-gray-300 mb-4">
                  <FaTags className="mr-2" />
                  <div className="flex flex-wrap">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-700 rounded-full px-2 py-1 text-xs mr-2 mb-2">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMoreProjects}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
            >
              Load More
              <FaChevronDown className="ml-2" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectsPage;
