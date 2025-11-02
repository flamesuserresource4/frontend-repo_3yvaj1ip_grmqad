import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/80 border-b border-white/10">
        <div className="container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Emergent
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-white">Características</a>
            <a href="#precios" className="hover:text-white">Precios</a>
            <a href="#" className="hover:text-white">Playlists</a>
            <a href="#precios" className="rounded-md bg-emerald-500 text-slate-900 font-semibold px-4 py-2 hover:bg-emerald-400">Entrar</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
