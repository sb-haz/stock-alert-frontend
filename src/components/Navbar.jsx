import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="sticky top-0 backdrop-blur-md bg-gray-900/90 border-b border-gray-800 px-6 py-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                
                {/* Left section with logo and links */}
                <div className="flex items-center space-x-8">
                    <Logo />

                    {/* Navigation links */}
                    <div className="flex items-center space-x-6">
                        <Link 
                            to="/search" 
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            Search
                        </Link>
                        <Link 
                            to="/alerts" 
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            Alerts
                        </Link>
                    </div>
                </div>

                {/* Right section with auth buttons */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => navigate('/login')}
                        className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate('/register')}
                        className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 rounded-lg 
                        transition-colors shadow-lg shadow-blue-600/20"
                    >
                        Sign up
                    </button>
                </div>
            </div>

        </nav>
    );
};