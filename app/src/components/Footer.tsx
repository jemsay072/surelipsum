'use client';

import React from 'react';
import Link from 'next/link';
import { footerData } from '../data/mockData';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white border-t-4 border-amber-500 mt-auto">
      {/* Main Structural Link Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-xs">

        <div className='md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8'>
          {
            footerData.categories.map((cat, ind) => (
              <div key={ind} className='space-y-4'>
                <h4 className="font-black text-sm uppercase tracking-wider text-amber-500">
                  { cat?.title }
                </h4>
                <ul className='space-y-2.5 text-slate-400 font-medium'>
                  {cat.links.map((link, linkInd) => (
                    <li key={linkInd}>
                      <Link href={link.url} className="hover:text-white transition">
                        { link.label }
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div>

        {/* Quick Conversion Quote Interaction */}
        <div className="space-y-4 bg-slate-950 p-5 rounded-2xl border border-slate-800">
          <h4 className="font-black text-sm uppercase tracking-wider text-white">{ footerData.rateCheck.title }</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            { footerData.rateCheck.description }
          </p>
          <div className="space-y-2 pt-1">
            <input 
              type="text" 
              placeholder="Enter Zip Code" 
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 transition"
            />
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-black py-2.5 rounded-xl uppercase tracking-wider text-[10px] shadow transition">
              { footerData.rateCheck.buttonText } &raquo;
            </button>
          </div>
        </div>

      </div>

      {/* Compliance / Privacy Foundation Line */}
      <div className="w-full bg-slate-950 py-5 text-slate-500 text-[11px] border-t border-slate-800/60 font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-400 transition">Affiliate Login</a>
            <a href="#" className="hover:text-slate-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition">Terms & Conditions</a>
          </div>
          <div>
            &copy; 2026 Insure On The Spot. Overhauled Modern React Framework.
          </div>
        </div>
      </div>
    </footer>
  );
}