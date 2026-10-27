import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { mockArticlesDatabase } from "@/app/src/data/mockData";
import { PageBanner } from "@/app/src/components/PageBanner";

export const instant = false;

interface PageProps {
    params: Promise<{slug: string}>
}

// Generate Meta Tag
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = mockArticlesDatabase.find((a) => a.slug === slug);

    return {
        title: article ? `${article.title} | Insure on the Spot` : 'Article | Insure on the Spot',
        description: article ? article.excerpt : 'Read our latest auto insurance tips and driving guides across Chicago.',
    };
}

export default async function FullArticlePage({params}:PageProps) {
    const { slug } = await params;

    // find match inside our data
    const article = mockArticlesDatabase.find((a) => a.slug === slug);

    // 404 Page
    if(!article){
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center bg-slate-50 text-center px-4">
                <h1 className="text-2xl font-bold text-slate-800">Article Not Found</h1>
                <p className="text-sm text-slate-400 mt-2 mb-4">The insurance guide resource you are looking for has shifted.</p>
                <Link href="/article" className="text-xs font-bold text-blue-600 hover:underline">&larr; Back to tips list</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 text-left">
            {/* Breadcrumbs */}
            <PageBanner
                title={article.title}
                breadcrumbs={[
                    { label: 'Home', url: '/' }, 
                    { label: 'Blog', url: '/article' }, 
                    { label: 'Article' }
                ]}
                marginY="mb-0"
            />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Main Article Header */}
                <article className="bg-white p-6 md:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-blue-600">
                        <span className="bg-blue-50 px-2.5 py-1 rounded-md">{article.category}</span>
                        <span className="text-gray-300">&bull;</span>
                        <span className="text-slate-400 font-normal">{article.date}</span>
                    </div>

                    {/* Reading experience */}
                    <div className="text-sm md:text-base text-slate-700 leading-relaxed space-y-6 pt-6 border-t border-gray-100 font-normal">
                        {article.content.map((paragraph, index) => {
                        if (paragraph.match(/^\d\./)) {
                            return (
                            <div key={index} className="space-y-2">
                                <h2 className="text-xl font-bold text-slate-900 pt-2">{paragraph.split(':')[0]}</h2>
                                <p className="text-slate-600">{paragraph.split(':')[1]}</p>
                            </div>
                            );
                        }
                        return <p key={index}>{paragraph}</p>;
                        })}
                    </div>

                    <div className="pt-8 mt-8 border-t border-gray-100 space-y-4">
                        <h3 className="text-2xl font-black text-blue-950 tracking-tight">Frequently Asked Questions (FAQs)</h3>
                        <div className="space-y-3">
                        {article.faqs.map((faq, index) => (
                            <div key={index} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <h4 className="font-extrabold text-sm text-slate-900">🤔 {faq.question}</h4>
                            <p className="text-xs md:text-sm text-slate-600 mt-1.5 pl-6">{faq.answer}</p>
                            </div>
                        ))}
                        </div>
                    </div>



                    {/* Bottom redirect*/}
                    <div className="pt-6 border-t border-gray-100 flex justify-between items-center text-xs">
                        <Link href="/article" className="font-bold text-blue-600 hover:text-blue-700 transition flex items-center">
                        &larr; Back to all tips and articles
                        </Link>
                        <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-black px-4 py-2 rounded-xl shadow-sm transition uppercase">
                        Get Quote &raquo;
                        </Link>
                    </div>
                </article>

            </main>
        </div>

    )
}