import React from 'react';
import { Calendar, User, MessageCircle, Heart } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Building a Modern Web Application in 2024',
    excerpt: 'A comprehensive guide to building scalable web applications using the latest tools and best practices in the modern development ecosystem.',
    author: 'Alex Johnson',
    date: 'December 20, 2023',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 24,
    comments: 8,
    featured: true
  },
  {
    id: 2,
    title: 'The Future of Frontend Development',
    excerpt: 'Exploring emerging trends, technologies, and paradigms that are shaping the future of frontend development.',
    author: 'Alex Johnson',
    date: 'December 15, 2023',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 18,
    comments: 5,
    featured: false
  },
  {
    id: 3,
    title: 'Mastering Async/Await in JavaScript',
    excerpt: 'Deep dive into asynchronous JavaScript, covering promises, async/await, and common patterns for handling async operations.',
    author: 'Alex Johnson',
    date: 'December 10, 2023',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 32,
    comments: 12,
    featured: false
  },
  {
    id: 4,
    title: 'Design Systems: Building Consistent UIs',
    excerpt: 'How to create and maintain design systems that enable teams to build consistent, scalable user interfaces.',
    author: 'Alex Johnson',
    date: 'December 5, 2023',
    readTime: '15 min read',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 27,
    comments: 9,
    featured: false
  }
];

export default function BlogTab() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development, technology, and the craft of building digital experiences.
        </p>
      </div>

      {/* Featured Post */}
      {blogPosts.find(post => post.featured) && (
        <div className="mb-16">
          {(() => {
            const featuredPost = blogPosts.find(post => post.featured)!;
            return (
              <article className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {featuredPost.date}
                        </div>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Read More
                      </button>
                      <div className="flex items-center space-x-4 text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{featuredPost.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{featuredPost.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })()}
        </div>
      )}

      {/* Other Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.filter(post => !post.featured).map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <span>{post.readTime}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <button className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                  Read More
                </button>
                <div className="flex items-center space-x-3 text-gray-500 text-xs">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-3 h-3" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}