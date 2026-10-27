import React from "react";
import { mockLocationsDatabase } from "../src/data/mockData";
import Link from "next/link";


const LocationPage = () => {

    return (
        <div className="min-h-screen bg-slate-50 text-left">
            { /** Hero Section */ }
            <section className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <nav className="text-xs font-semibold tracking-wider uppercase text-sky-300 flex justify-center items-center gap-1.5 mb-2">
                        <Link href={'/'} className="hover:text-white transition-colors">Home</Link>
                        <span className="opacity-50">&gt;</span>
                        <span className="text-white">Locations</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                        Lorem Ipsum Dolor Sit Amet <span className="text-amber-400">Consectetur!</span>
                    </h1>
                    <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                    </p>
                    
                    {/* Compact Zip Code Form Box */}
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl max-w-md mx-auto border border-white/10 shadow-lg">
                        <form className="flex flex-col sm:flex-row gap-2">
                            <input 
                                type="text" 
                                placeholder="Sed dapibus" 
                                className="flex-1 px-4 py-3 rounded-xl text-slate-900 font-semibold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                required
                            />
                            <button 
                                type="submit" 
                                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-6 py-3 rounded-xl transition uppercase tracking-wider text-xs shadow-md whitespace-nowrap"
                            >
                                Action Button &raquo;
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            { /** Main Section */ }
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Lorem Ipsum Locations</h2>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="inline-block bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 font-bold mt-2">
                        🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.

                    </div>
                </div>

                {/* TWO COLUMN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Branch Office Cards using mockLocationsDatabase */}
                    <div className="lg:col-span-5 space-y-4">
                        {mockLocationsDatabase.map((loc, idx) => (
                            <div 
                                key={idx} 
                                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition space-y-3 group hover:cursor-pointer"
                            >
                                <div className="flex items-start space-x-3">
                                    <span className="text-xl mt-0.5">📍</span>
                                    <div className="space-y-1">
                                        <h3 className="font-extrabold text-slate-900 text-base group-hover:text-blue-700 transition">
                                            {loc.name}
                                        </h3>
                                        <p className="text-xs text-slate-500 font-medium leading-normal">
                                            {loc.address}
                                        </p>
                                    </div>
                                </div>
                                <div className="pl-8 pt-1 flex justify-between items-center text-xs">
                                    <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="text-blue-600 font-bold hover:underline">
                                        📞 {loc.phone}
                                    </a>
                                    <button className="text-slate-400 font-semibold hover:text-slate-600 transition">
                                        Nunc nec ipsum & tellus &rsaquo;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Google Maps Embedding */}
                    <div className="lg:col-span-7 bg-white p-3 rounded-3xl border border-slate-200 shadow-sm h-[520px] overflow-hidden sticky top-24">
                        <iframe 
                            src="https://google.com" 
                            className="w-full h-full rounded-2xl border-0"
                            allowFullScreen={true}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Insure on the Spot Chicago Locations Map"
                        ></iframe>
                    </div>


                </div>
            </main>

        </div>
    )
} 
export default LocationPage;