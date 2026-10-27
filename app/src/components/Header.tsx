'use client';

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
            { /** Top */ }
            <div className="w-full bg-slate-900 text-white text-[11px] font-medium py-2 px-4 hidden sm:block">
                <div className="max-w-7x1 mx-auto flex justify-between items-center">
                    <div className="flex space-x-4">
                        <a href="tel:7732025060" className="hover:text-amber-400 transition">📞 Call Now: 773-202-5060</a>
                        <span className="text-slate-600">|</span>
                        <button className="hover:text-amber-400 transition">Español</button>
                    </div>
                    <div className="flex space-x-6 text-slate-300">
                        <a href="#" className="hover:text-white transition">Make My Payment</a>
                        <a href="#" className="hover:text-white transition">Renew My Policy</a>
                        <a href="#" className="hover:text-white transition">Customer Service</a>
                    </div>
                </div>
            </div>
            { /** Main */ }
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
                { /** Brand Logo */ }
                <Link href="/" className="flex items-center space-x-1 group">
                    <span className="text-2xl font-black text-blue-700 tracking-tight transition group-hover:text-blue-800">
                        insure<span className="text-amber-500 font-extrabold">on the spot</span>
                    </span>
                </Link>

                { /** Desktop */ }
                <nav className="hidden md:flex space-x-8 text-[13px] font-bold text-slate-600">
                    <Link href="/" className="hover:text-blue-700 transition">Home</Link>
                    <Link href="/article" className="hover:text-blue-700 transition">Blog & Tips</Link>
                    <Link href="/locations" className="hover:text-blue-700 transition">Locations</Link>
                    <Link href="/contact" className="hover:text-blue-700 transition">Contact Us</Link>
                </nav>
                
                { /** Main Header */ }
                <div className="hidden md:block">
                    <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-black px-6 py-3 rounded-xl shadow-md transition transform hover:scale-[1.02] uppercase tracking-wider">
                        Get Free Quote &raquo;
                    </Link>

                </div>
                { /** Mobile Nav Trigger */ }
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 text-slate-600 focus:outline-none focus:text-blue-700"
                    aria-label="Toggle Menu"
                >
                    <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
                </button>
                { /** Mobile panel */ }
                { isMenuOpen && (
                    <div className="absolute top-20 left-0 w-full bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-3 font-semibold text-sm text-slate-700 shadow-lg animate-fadeIn md:hidden z-40">
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-slate-50">Home</Link>
                        <Link href="/article" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-slate-50">Blog & Tips</Link>
                        <Link href="/locations" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-slate-50">Locations</Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-slate-50">Contact Us</Link>
                        <div className="pt-2">
                            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full bg-amber-500 text-white font-black py-3 rounded-xl text-center text-xs uppercase tracking-wider shadow">
                                Get Free Quote
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}