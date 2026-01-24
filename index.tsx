import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

// आपके IT, Electronics और Agriculture के सेक्टर्स
const SECTORS = ['IT', 'Agriculture Research', 'Electronics', 'Robotics', 'Medical'];

const StudioApp = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('HARI_KEY') || '');
  const [isAuth, setIsAuth] = useState(!!apiKey);

  const handleAuth = (key) => {
    localStorage.setItem('HARI_KEY', key);
    setApiKey(key);
    setIsAuth(true);
  };

  return (
    <div className="min-h-screen p-8">
      {!isAuth ? (
        <div className="max-w-md mx-auto mt-20 p-6 bg-zinc-900 rounded-xl border border-emerald-500/30">
          <h2 className="text-xl font-bold mb-4 text-emerald-400 text-center">Master Security Key</h2>
          <input 
            type="password" 
            className="w-full bg-black border border-zinc-700 p-2 rounded mb-4"
            placeholder="अपनी API Key यहाँ दर्ज करें..."
            onKeyDown={(e) => e.key === 'Enter' && handleAuth(e.target.value)}
          />
          <p className="text-xs text-zinc-500 text-center">v99 Sovereign Authentication Required</p>
        </div>
      ) : (
        <div>
          <header className="flex justify-between items-center border-b border-zinc-800 pb-4 mb-8">
            <h1 className="text-2xl font-black">HARI GLOBAL STUDIO <span className="text-emerald-500">v99</span></h1>
            <button onClick={() => {localStorage.clear(); window.location.reload();}} className="text-xs text-red-500">Logout</button>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map(sector => (
              <div key={sector} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-emerald-500/50 transition-all cursor-pointer">
                <h3 className="text-lg font-bold text-emerald-500">{sector}</h3>
                <p className="text-zinc-400 text-sm mt-2">Active Research Module Online</p>
              </div>
            ))}
          </div>
          
          {/* AI Dialogue Interface */}
          <div className="mt-10 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
            <p className="text-emerald-400 font-mono">HAI v99: आदेश दें, स्वामी जी...</p>
          </div>
        </div>
      )}
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<StudioApp />);
