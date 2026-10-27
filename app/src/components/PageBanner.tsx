import React from "react";
import { PageBannerProps } from "../types";

export const PageBanner: React.FC<PageBannerProps> = ({
    title, 
    description, 
    breadcrumbs, 
    children,
    paddingY = 'py-12',
    marginY = 'mb-12',
    maxContainerWidth = 'max-w-7xl',
}) => {
    return (
        <div className={`bg-gradient-to-r from-blue-900 to-sky-800 text-white ${paddingY} px-6 ${marginY} shadow-sm`}>
            <div className={`${maxContainerWidth} mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center px-4 sm:px-6 lg:px-8`}>
                
                {/* Titulo at Breadcrumbs */}
                <div className="md:col-span-2 space-y-2">
                    <nav className="text-xs font-semibold tracking-wider uppercase text-sky-300 flex items-center gap-1.5">
                        {breadcrumbs.map((item, index) => (
                        <span key={index} className="flex items-center gap-1.5">
                            {index > 0 && <span className="text-sky-500/70">&gt;</span>}
                            {item.url ? (
                            <a href={item.url} className="hover:text-white transition-colors">{item.label}</a>
                            ) : (
                            <span className="text-white">{item.label}</span>
                            )}
                        </span>
                        ))}
                    </nav>
                    <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                        {title}
                    </h1>
                    <p className="text-sm text-sky-100 max-w-xl">
                        {description}
                    </p>
                </div>

                {/* Optionanl: this will show the form or element */}
                {children && (
                <div className="md:col-span-1 w-full flex justify-end">
                    {children}
                </div>
                )}

            </div>
        </div>
    )
};