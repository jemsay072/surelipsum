import React from "react";
import { mockContactDatabase } from "../src/data/mockData";

import { PageBanner } from "../src/components/PageBanner";

const ContactPage:React.FC = () => {

    const data = mockContactDatabase;

    return (
        <section className="bg-slate-50 min-h-screen text-slate-700 font-sans pb-16">
            {/* Page Banner */}
            <PageBanner 
                title="Get in Touch" 
                description="We are here to assist you with your auto insurance needs. Reach out to our teams today."
                breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Contact Us' }]} 
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
                {/* Main Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16">
                
                {/* Left Columns - Details */}
                <div className="md:col-span-2 space-y-10">
                    <div className="space-y-4">
                    <h2 className="text-3xl font-extrabold text-blue-900 tracking-tight">
                        {data.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                        Call us at <span className="font-extrabold text-blue-600 tracking-tight">{data.phoneNumber}</span> or try our{" "}
                        <a href="#location" className="text-blue-500 font-semibold underline hover:text-blue-700 transition-colors">
                        {data.locationFinderText}
                        </a>{" "}
                        to find the Insure on the Spot location nearest you!
                    </p>
                    </div>
                    
                    <div className="border-l-2 border-slate-200 pl-6 space-y-6">
                    {data.departments.map((dept, index) => (
                        <div key={index} className="space-y-1">
                        <h3 className="text-md font-bold text-slate-800 uppercase tracking-wider">
                            {dept.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-slate-500 font-medium">
                            {dept.schedule.map((sched, idx) => (
                            <span key={idx} className="flex items-center gap-2">
                                {idx > 0 && <span className="hidden sm:inline text-slate-300">|</span>}
                                {sched}
                            </span>
                            ))}
                        </div>
                        </div>
                    ))}
                    </div>
                    
                    <div className="bg-gradient-to-br from-amber-50/60 to-orange-50/60 p-6 rounded-2xl border border-amber-100 shadow-sm space-y-4">
                    <a 
                        href="#quote" 
                        className="inline-block bg-orange-500 text-white font-extrabold px-6 py-2.5 rounded-lg shadow hover:bg-orange-600 hover:shadow-md transition-all transform hover:-translate-y-0.5 text-sm"
                    >
                        {data.promoTitle}
                    </a>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1">
                        {data.promoDetails.map((promo, index) => (
                        <li 
                            key={index} 
                            className={`text-sm flex items-center gap-2 ${promo.isBold ? "font-bold text-orange-600 text-base col-span-1 sm:col-span-2" : "text-slate-600"}`}
                        >
                            <span className="text-orange-400">✦</span> {promo.text}
                        </li>
                        ))}
                    </ul>
                    </div>
                    
                    <div className="text-sm pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <p className="text-slate-500">{data.careersText}</p>
                    <a href="#careers" className="font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors shrink-0">
                        {data.careersLinkText}
                    </a>
                    </div>
                </div>

                {/* Right Column - Agent Image */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-full max-w-[220px] bg-sky-50/50 p-3 rounded-2xl border border-slate-100 flex flex-col items-center">
                    <div className="absolute top-2.5 left-3 flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                    </div>
                    <img 
                        src={data.images.sideAgent} 
                        alt="Customer Service Agent" 
                        className="w-full h-auto object-contain rounded-xl mt-3"
                    />
                    </div>
                </div>

                </div>

                {/* Bottom Banner Section - Group Photo */}
                <div className="pt-8 border-t border-slate-100 flex flex-col items-center">
                <div className="max-w-2xl w-full">
                    <img 
                    src={data.images.bottomGroup} 
                    alt="Insure on the Spot Team" 
                    className="w-full h-auto object-contain mx-auto rounded-xl shadow-sm border border-slate-100"
                    />
                </div>
                </div>

            </div>

        </section>
    );
}

export default ContactPage;