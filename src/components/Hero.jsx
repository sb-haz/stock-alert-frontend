import React from 'react';
import { FeatureCard } from './FeatureCard';
// icons
import { Bell, BarChart2, Settings } from 'lucide-react';

export const Hero = () => {

  // Array of feature objects containing icon, title, and description for each feature card
  const features = [
    {
      icon: <Bell className="h-8 w-8 mx-auto" />,
      title: 'Real-time Alerts',
      description: 'Get instant notifications when stocks hit your target prices'
    },
    {
      icon: <BarChart2 className="h-8 w-8 mx-auto" />,
      title: 'Market Analysis',
      description: 'Advanced analytics and market trends at your fingertips'
    },
    {
      icon: <Settings className="h-8 w-8 mx-auto" />,
      title: 'Custom Alerts',
      description: 'Set personalized alerts based on your investment strategy'
    }
  ];

  return (

    // Main container with max width and padding
    <main className="max-w-7xl mx-auto px-6 py-16">

      {/* Center-aligned content container with vertical spacing */}
      <div className="text-center space-y-8">

        {/* Main heading with gradient text effect */}
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
          Stock Alert
        </h1>

        {/* Subheading with max width for better readability */}
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Stay ahead of the market with real-time alerts and personalized notifications for your stock portfolio.
        </p>

        {/* Get Started button */}
        <div className="pt-4">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold 
                          transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20">
            Get Started
          </button>
        </div>

        {/* Features grid section - 3 columns on medium screens and up */}
        <div className="grid md:grid-cols-3 gap-8 pt-16">

          {/* Map through features array to create feature cards */}
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};