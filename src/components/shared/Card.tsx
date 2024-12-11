import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`
        glassmorphism p-6 rounded-2xl
        ${hover ? 'transform hover:scale-105 transition-transform' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;