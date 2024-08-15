import React, { useState, useEffect } from 'react';
import { FaCalendar, FaUser, FaTags, FaChevronDown } from 'react-icons/fa';


type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  imageUrl: string;
};


const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt: "Exploring how artificial intelligence is reshaping the landscape of web development and what it means for developers.",
    author: "Yasu Fadhili",
    date: "2024-08-01",
    tags: ["AI", "Web Development", "Future Tech"],
    imageUrl: "https://source.unsplash.com/random/800x600?ai",
  },
  {
    id: 2,
    title: "Mastering React Hooks: A Comprehensive Guide",
    excerpt: "Dive deep into React Hooks and learn how to leverage them to write more efficient and cleaner React code.",
    author: "Yasu Fadhili",
    date: "2024-07-15",
    tags: ["React", "JavaScript", "Web Development"],
    imageUrl: "https://source.unsplash.com/random/800x600?coding",
  },
  {
    id: 3,
    title: "The Rise of Serverless Architecture",
    excerpt: "Discover the benefits and challenges of serverless architecture and how it's changing the way we build and deploy applications.",
    author: "Yasu Fadhili",
    date: "2024-07-01",
    tags: ["Serverless", "Cloud Computing", "Architecture"],
    imageUrl: "https://source.unsplash.com/random/800x600?server",
  },
  {
    id: 4,
    title: "Designing for Accessibility: Best Practices",
    excerpt: "Learn how to create inclusive web experiences that cater to users of all abilities and why it's crucial for modern web development.",
    author: "Yasu Fadhili",
    date: "2024-06-15",
    tags: ["Accessibility", "UX Design", "Web Development"],
    imageUrl: "https://source.unsplash.com/random/800x600?accessibility",
  },
  {
    id: 5,
    title: "The Power of GraphQL in Modern APIs",
    excerpt: "Explore how GraphQL is revolutionizing API development and why it might be the right choice for your next project.",
    author: "Yasu Fadhili",
    date: "2024-06-01",
    tags: ["GraphQL", "API", "Web Development"],
    imageUrl: "https://source.unsplash.com/random/800x600?data",
  },
];

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<number>(5);

  useEffect(() => {
    // Simulate fetching posts from an API
    setPosts(mockBlogPosts);
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisible) => prevVisible + 5);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Yasu's Tech Blog</h1>
          <p className="text-xl md:text-2xl animate-fade-in-up">
            Exploring the frontiers of web development, AI, and everything in between.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, visiblePosts).map((post, index) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaUser className="mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaCalendar className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaTags className="mr-2" />
                  <div className="flex flex-wrap">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-200 rounded-full px-2 py-1 text-xs mr-2 mb-2">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        {visiblePosts < posts.length && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMorePosts}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
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

export default BlogPage;