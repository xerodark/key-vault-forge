
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => (
  <div className="p-4 glass-card glass-card-hover">
    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-crypto-orange/90 to-amber-300 text-transparent bg-clip-text">{value}</div>
    <div className="text-sm text-gray-400 mt-1">{label}</div>
  </div>
);

export default StatCard;
