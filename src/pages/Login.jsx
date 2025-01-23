import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import axios from 'axios';

export const Login = () => {
    // State for form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // State for error handling
    const [error, setError] = useState('');

    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // Make API call to Spring backend
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                email,
                password
            });

            // If successful:
            // 1. Store the auth token
            localStorage.setItem('token', response.data.token);
            // 2. Navigate to dashboard/home
            navigate('/dashboard');

        } catch (err) {
            // Handle different types of errors
            if (err.response) {
                // Server responded with error
                setError(err.response.data.message || 'Invalid credentials');
            } else if (err.request) {
                // No response received
                setError('Unable to reach server');
            } else {
                // Other errors
                setError('Something went wrong');
            }
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
                {/* Header */}
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold text-white">
                        Sign in to your account
                    </h2>
                </div>

                {/* Error message */}
                {error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-3 text-sm">
                        {error}
                    </div>
                )}

                {/* Login Form */}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-lg">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 
                          rounded-lg text-white focus:outline-none focus:ring-2 
                          focus:ring-blue-500 focus:border-transparent"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-300">
                                Password
                            </label>
                            <div className="mt-1 relative rounded-lg">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 
                          rounded-lg text-white focus:outline-none focus:ring-2 
                          focus:ring-blue-500 focus:border-transparent"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent 
                    rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 
                    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-blue-500"
                    >
                        Sign in
                    </button>

                    {/* Register Link */}
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={() => navigate('/register')}
                            className="text-sm text-gray-400 hover:text-white"
                        >
                            Don't have an account? Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};