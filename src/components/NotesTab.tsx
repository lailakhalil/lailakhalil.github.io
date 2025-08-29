import React from 'react';
import { BookOpen, Clock, Tag } from 'lucide-react';

const notes = [
  {
    id: 1,
    title: 'React Performance Optimization',
    excerpt: 'Key strategies for optimizing React applications including memo, useMemo, and code splitting techniques.',
    category: 'React',
    readTime: '5 min read',
    date: 'Dec 15, 2023',
    tags: ['React', 'Performance', 'Optimization']
  },
  {
    id: 2,
    title: 'TypeScript Best Practices',
    excerpt: 'Essential TypeScript patterns and practices for writing maintainable and type-safe code in large applications.',
    category: 'TypeScript',
    readTime: '7 min read',
    date: 'Dec 12, 2023',
    tags: ['TypeScript', 'Best Practices', 'Type Safety']
  },
  {
    id: 3,
    title: 'CSS Grid vs Flexbox',
    excerpt: 'Understanding when to use CSS Grid versus Flexbox for different layout scenarios and design patterns.',
    category: 'CSS',
    readTime: '4 min read',
    date: 'Dec 8, 2023',
    tags: ['CSS', 'Layout', 'Grid', 'Flexbox']
  },
  {
    id: 4,
    title: 'API Design Principles',
    excerpt: 'Core principles for designing RESTful APIs that are scalable, maintainable, and developer-friendly.',
    category: 'Backend',
    readTime: '6 min read',
    date: 'Dec 5, 2023',
    tags: ['API', 'REST', 'Backend', 'Design']
  },
  {
    id: 5,
    title: 'State Management Patterns',
    excerpt: 'Comparing different state management approaches in React applications: Context, Redux, and Zustand.',
    category: 'React',
    readTime: '8 min read',
    date: 'Dec 1, 2023',
    tags: ['React', 'State Management', 'Redux', 'Context']
  },
  {
    id: 6,
    title: 'Database Optimization Techniques',
    excerpt: 'Practical techniques for optimizing database queries, indexing strategies, and performance monitoring.',
    category: 'Database',
    readTime: '10 min read',
    date: 'Nov 28, 2023',
    tags: ['Database', 'SQL', 'Optimization', 'Performance']
  }
];

export default function NotesTab() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Development Notes</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A collection of technical notes, insights, and learnings from my development journey.
        </p>
      </div>

      <div className="space-y-6">
        {notes.map((note) => (
          <article key={note.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full">
                {note.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {note.readTime}
                </div>
                <span>{note.date}</span>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
              {note.title}
            </h2>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {note.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-gray-400" />
                <div className="flex space-x-2">
                  {note.tags.map((tag) => (
                    <span key={tag} className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                <BookOpen className="w-4 h-4" />
                <span>Read More</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}