import React from 'react';
import { useState } from 'react';
import { Search as SearchIcon, Bell, TrendingUp, Building2 } from 'lucide-react';

export const Search = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    // Dummy popular stocks
    const popularStocks = [
        {
            ticker: "AAPL",
            name: "Apple Inc",
            industry: "Technology",
            exchange: "NASDAQ",
            marketCap: "2.94T",
            searchCount: 542
        },
        {
            ticker: "TSLA",
            name: "Tesla Inc",
            industry: "Automotive",
            exchange: "NASDAQ",
            marketCap: "857.93B",
            searchCount: 428
        },
        {
            ticker: "MSFT",
            name: "Microsoft Corporation",
            industry: "Technology",
            exchange: "NASDAQ",
            marketCap: "3.02T",
            searchCount: 315
        },
        {
            ticker: "NVDA",
            name: "NVIDIA Corporation",
            industry: "Technology",
            exchange: "NASDAQ",
            marketCap: "2.12T",
            searchCount: 289
        }
    ];

    return (
        <main className="max-w-7xl mx-auto px-6 py-16">
            <div className="space-y-8">
                {/* Header section */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
                        Search
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Search for stocks and create price alerts
                    </p>
                </div>

                {/* Search form */}
                <div className="max-w-2xl mx-auto">
                    <div className="flex gap-4">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Enter stock symbol (e.g., AAPL)"
                                className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400"
                                value={search}
                                onChange={(e) => setSearch(e.target.value.toUpperCase())}
                            />
                            <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                            Search
                        </button>
                    </div>
                </div>

                {/* Popular Stocks */}
                <div className="pt-16">

                    {/* Title  */}
                    <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-6">
                        <TrendingUp className="h-6 w-6" />
                        Most Searched Today
                    </h2>

                    {/* Cards  */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {popularStocks.map((stock) => (
                            <div key={stock.ticker} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-bold flex items-center gap-2">
                                            {stock.ticker}
                                            <span className="text-sm font-normal text-gray-400">
                                                {stock.exchange}
                                            </span>
                                        </h3>
                                        <p className="text-gray-400">{stock.name}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-400">Searched</p>
                                        <p className="font-semibold">{stock.searchCount} times</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Building2 className="h-4 w-4" />
                                        {stock.industry}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Market Cap: {stock.marketCap}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main >
    );
};