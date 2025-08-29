import React from 'react';
import { Github, Linkedin, Mail, MapPin, Code2, Coffee } from 'lucide-react';

export default function HomeTab() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center">
          <Code2 className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Alex Johnson</h1>
        <p className="text-xl text-gray-600 mb-2">Full Stack Developer</p>
        <div className="flex items-center justify-center text-gray-500 mb-8">
          <MapPin className="w-4 h-4 mr-1" />
          <span>San Francisco, CA</span>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          I'm a passionate developer who loves creating beautiful, functional web applications. 
          With expertise in React, Node.js, and modern web technologies, I bring ideas to life 
          through clean code and thoughtful design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <Code2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Code</h3>
          <p className="text-gray-600">Writing maintainable, scalable code that stands the test of time.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <Coffee className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">User Experience</h3>
          <p className="text-gray-600">Crafting intuitive interfaces that users love to interact with.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Problem Solving</h3>
          <p className="text-gray-600">Breaking down complex challenges into elegant solutions.</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Let's Connect</h2>
        <div className="flex justify-center space-x-6">
          <a href="mailto:alex@example.com" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}