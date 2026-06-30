import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowCard({ children, className = '' }: GlowCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-card border border-border-default bg-card p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
