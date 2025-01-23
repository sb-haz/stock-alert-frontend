import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';  // Icons

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={() => navigate('/')}
    >
      {/* Trend icon */}
      <TrendingUp className="h-8 w-8 text-blue-500" />

      {/* Logo name */}
      <span className="text-xl font-semibold tracking-tight">
        StockAlert
      </span>

    </div>
  );
};