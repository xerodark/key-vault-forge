
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => (
  <div className="p-5 glass-card glass-card-hover transform transition-all duration-300 hover:scale-105 group">
    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-crypto-orange via-crypto-purple to-crypto-blue text-transparent bg-clip-text group-hover:bg-gradient-to-r group-hover:from-crypto-orange-light group-hover:via-crypto-purple-light group-hover:to-crypto-blue-light transition-all duration-500">
      {value}
    </div>
    <div className="text-sm text-gray-400 mt-1">{label}</div>
  </div>
);

export default StatCard;
