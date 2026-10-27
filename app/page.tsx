import Link from "next/link";

export default function Home() {
  return (
    
    <main className="min-h-[75vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-24">

      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        
        <span className="inline-block text-xs font-black tracking-widest uppercase bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full border border-blue-200/50">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR
        </span>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
          Lorem Ipsum Dolor Sit <br className="hidden md:inline" />
          <span className="text-blue-700">Amet &amp; Consectetur Adipiscing</span>
        </h1>
        
        <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-black px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 uppercase tracking-wider text-xs text-center"
          >
            Action Button &raquo;
          </Link>
          <Link 
            href="/article" 
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 font-bold px-8 py-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-xs text-center"
          >
            View Details &rarr;
          </Link>
        </div>

      </div>
    </main>
  );
}

