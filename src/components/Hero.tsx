import React from 'react';
import { ArrowRight, Users, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Join the Future
              </span>
              <br />
              of Computing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Be part of VIT Chennai's premier tech community. Learn, grow, and innovate with fellow tech enthusiasts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/join"
                className="group inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Join ACM
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-gray-700 bg-white/80 backdrop-blur rounded-full hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glassmorphism p-6 rounded-2xl transform hover:scale-105 transition-transform">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">500+ Members</h3>
              <p className="text-gray-600">Join our growing community of tech enthusiasts</p>
            </div>
            <div className="glassmorphism p-6 rounded-2xl transform hover:scale-105 transition-transform">
              <Calendar className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">50+ Events</h3>
              <p className="text-gray-600">Annual workshops, hackathons, and tech talks</p>
            </div>
            <div className="glassmorphism p-6 rounded-2xl transform hover:scale-105 transition-transform col-span-2">
              <Award className="h-8 w-8 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">#1 Tech Club</h3>
              <p className="text-gray-600">Recognized as the leading technical society at VIT Chennai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;