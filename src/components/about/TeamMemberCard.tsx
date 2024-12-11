import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { TeamMember } from '../../types';
import Card from '../shared/Card';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <Card className="text-center">
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
      <p className="text-gray-600 mb-4">{member.role}</p>
      <div className="flex justify-center space-x-4">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <Github className="h-5 w-5" />
          </a>
        )}
      </div>
    </Card>
  );
};

export default TeamMemberCard;