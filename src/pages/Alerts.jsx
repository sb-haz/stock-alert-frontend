import React from 'react';
import { Plus, Bell, Earth } from 'lucide-react';
import { AlertCard } from '../components/AlertCard';

export const Alerts = () => {

    // Dummy data
    const localAlerts = [
        {
            id: 1,
            user: {
                id: 1,
                name: "Mo Hasan"
            },
            assetSymbol: "AAPL",
            alertType: "above",
            alertValue: 190.50,
            isActive: true,
            isTriggered: false,
            createdAt: "2024-11-22T10:30:00Z",
            updatedAt: "2024-11-22T10:30:00Z"
        },
        {
            id: 2,
            user: {
                id: 1,
                name: "Mo Hasan"
            },
            assetSymbol: "TSLA",
            alertType: "below",
            alertValue: 240.00,
            isActive: true,
            isTriggered: false,
            createdAt: "2024-11-22T09:15:00Z",
            updatedAt: "2024-11-22T09:15:00Z"
        }
    ];

    const globalAlerts = [
        {
            id: 3,
            user: {
                id: 2,
                name: "Martin Monsen"
            },
            assetSymbol: "MSFT",
            alertType: "above",
            alertValue: 370.25,
            isActive: true,
            isTriggered: false,
            createdAt: "2024-11-22T08:45:00Z",
            updatedAt: "2024-11-22T08:45:00Z"
        },
        {
            id: 4,
            user: {
                id: 3,
                name: "John Smith"
            },
            assetSymbol: "NVDA",
            alertType: "below",
            alertValue: 450.00,
            isActive: true,
            isTriggered: false,
            createdAt: "2024-11-22T07:30:00Z",
            updatedAt: "2024-11-22T07:30:00Z"
        }
    ];

    return (
        <main className="max-w-7xl mx-auto px-6 py-16">
            <div className="space-y-8">
                {/* Header section */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
                        Stock Alerts
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Set up and manage your personalized stock price alerts
                    </p>
                </div>

                {/* Create Alert Button */}
                <div className="text-center pt-4">
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold
                                     transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20
                                     inline-flex items-center gap-2">
                        <Plus className="h-5 w-5" />
                        Create Alert
                    </button>
                </div>

                {/* Your Alerts Section */}
                <div className="pt-16">
                    <h2 className="text-2xl font-semibold text-white flex items-center gap-2 mb-6">
                        <Bell className="h-6 w-6" />
                        Your Alerts
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {localAlerts.map(alert => (
                            <AlertCard key={alert.id} alert={alert} />
                        ))}
                    </div>
                </div>

                {/* Global Alerts Section */}
                <div className="pt-16">
                    <h2 className="text-2xl font-semibold text-white flex items-center gap-2 mb-6">
                        <Earth className="h-6 w-6" />
                        Recent Alerts
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {globalAlerts.map(alert => (
                            <AlertCard key={alert.id} alert={alert} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};