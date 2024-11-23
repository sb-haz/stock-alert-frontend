import React from 'react';

export const AlertCard = ({ alert }) => {
    return (
        <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold">{alert.assetSymbol}</h3>
                    <p className="text-gray-400 text-sm">
                        Alert when price goes {alert.alertType} ${alert.alertValue.toFixed(2)}
                    </p>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${alert.isTriggered ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                    {alert.isTriggered ? 'Triggered' : 'Active'}
                </span>
            </div>
            <div className="text-sm text-gray-400">
                <p>Created by {alert.user.name}</p>
                <p>Created {new Date(alert.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    )
}