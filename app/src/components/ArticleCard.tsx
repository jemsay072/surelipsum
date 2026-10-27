import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-200 text-left">
      <div className="flex items-center space-x-2 text-xs font-semibold text-blue-600 mb-3">
        <span className="bg-blue-50 px-2.5 py-1 rounded-md">{article.category}</span>
        <span className="text-gray-300">&bull;</span>
        <span className="text-gray-500">{article.date}</span>
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition">
        <a href={`/article/${article.slug}`}>{article.title} &raquo;</a>
      </h2>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">
        {article.excerpt}
      </p>
      <div className="flex justify-between items-center pt-2 border-t border-gray-100">
        <a href={`/article/${article.slug}`} className="text-xs font-bold text-orange-500 hover:text-orange-600 transition tracking-wider uppercase">
          Read More &rarr;
        </a>
      </div>
    </article>
  );
}

