import React from 'react';
import { Users, Award, Target } from 'lucide-react';
import Card from '../components/shared/Card';
import TeamMemberCard from '../components/about/TeamMemberCard';
import { TeamMember } from '../types';

const About = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'John Doe',
      role: 'Chairperson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    // Add more team members
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About ACM VIT Chennai</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a community of tech enthusiasts dedicated to fostering growth,
            innovation, and excellence in computing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <Users className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To empower students with technical knowledge and professional skills
              through hands-on learning experiences.
            </p>
          </Card>
          <Card>
            <Target className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading technical society that shapes the future of
              technology and innovation.
            </p>
          </Card>
          <Card>
            <Award className="h-8 w-8 text-pink-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Innovation, collaboration, inclusivity, and continuous learning drive
              everything we do.
            </p>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;