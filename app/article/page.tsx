"use client"

import React, { useState } from 'react';
import { mockArticlesDatabase } from '../src/data/mockData';
import ArticleCard from '@/app/src/components/ArticleCard';
import { PageBanner } from '../src/components/PageBanner';

export default function ArticleIndexPage() {

  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const articlesPerPage = 3; // limit per page

  // Slice array
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

  // Current Active View
  const currentArticles = mockArticlesDatabase.slice(indexOfFirstArticle, indexOfLastArticle);

  // Calculate if there are existing data for button visibility
  const hasOlderArticles = indexOfLastArticle < mockArticlesDatabase.length;
  const hasNewerArticles = currentPage > 1;

  return (
    <div className="min-h-screen bg-slate-50">
      <PageBanner
        title='Insurance Tips & Resources'
        breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Blog & Tips' }]} 
        description='Expert driving guidance and coverage optimization frameworks for Illinois motorists.'
        marginY='mb-0'
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Workspace Layout Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <section className="lg:col-span-2 space-y-6">
            {currentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
            { /** Pagination Button */ }
            <div className='flex flex-row-reverse justify-start items-center gap-4 mt-10 pt-6 border-t border-slate-200 w-full'>
              {hasNewerArticles && (
                <button
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className='bg-gradient-to-b from-white to-slate-50 hover:cursor-pointer hover:to-slate-100 text-[#0f4c81] font-bold text-sm px-5 py-2 rounded-md border border-slate-200 shadow-sm transition active:scale-95 flex items-center gap-1'
                >
                  &lt; Newer Articles
                </button>
              )}
              {hasOlderArticles && (
                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className='bg-gradient-to-b from-white to-slate-50 hover:cursor-pointer hover:to-slate-100 text-[#0f4c81] font-bold text-sm px-5 py-2 rounded-md border border-slate-200 shadow-sm transition active:scale-95 flex items-center gap-1'
                >
                  Older Articles &gt;
                </button>
              )}
            </div>
          </section>

          <aside className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm h-fit">
            <h3 className="font-extrabold text-sm text-blue-900 mb-2">Need Direct Assistance?</h3>
            <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">Our local Chicago verification staff is active.</p>
            <a href="tel:7732025060" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs shadow-sm transition">
              Call 773-202-5060
            </a>
          </aside>
        </div>

      </main>
    </div>
  );
}

