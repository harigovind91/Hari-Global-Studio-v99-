/**
 * File 9: UserDashboard.jsx
 * The Portfolio and Project Management Screen
 */
import React, { useState } from 'react';
import { Folder, Globe, Lock, Trash2 } from 'lucide-react';

const UserDashboard = ({ savedProjects }) => {
    return (
        <div className="p-8 bg-[#0a0a0c] min-h-screen text-white">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">My Engineering Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {savedProjects.map((proj) => (
                    <div key={proj.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500"><Folder /></div>
                            <span className="text-[10px] bg-slate-800 px-2 py-1 rounded uppercase tracking-wider">
                                {proj.type}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold mb-1">{proj.name}</h3>
                        <p className="text-xs text-slate-500 mb-6">Last Modified: {proj.date}</p>
                        
                        <div className="flex gap-2">
                            <button className="flex-1 bg-slate-800 py-2 rounded-lg text-xs font-bold hover:bg-blue-600 transition">Open Design</button>
                            <button className="p-2 bg-slate-800 rounded-lg text-red-400 hover:bg-red-500/10"><Trash2 size={16}/></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
