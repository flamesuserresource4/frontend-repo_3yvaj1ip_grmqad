import React from 'react';
import { Share2, Globe2, LineChart, Music, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Share2 className="h-5 w-5 text-emerald-400" />,
    title: 'Publicación 1‑clic',
    desc: 'Lanza en Instagram, TikTok, YouTube Shorts y más con un solo flujo.'
  },
  {
    icon: <LineChart className="h-5 w-5 text-emerald-400" />,
    title: 'Inteligencia de tendencias',
    desc: 'Scraping ético de artistas virales y alertas de movimiento en tu nicho.'
  },
  {
    icon: <Globe2 className="h-5 w-5 text-emerald-400" />,
    title: 'SEO para lanzamientos',
    desc: 'Optimiza títulos, descripciones y hashtags con IA orientada a música.'
  },
  {
    icon: <Music className="h-5 w-5 text-emerald-400" />,
    title: 'Pitch ganador',
    desc: 'Mejora tu pitch a curadores y sellos con plantillas dinámicas.'
  },
  {
    icon: <Shield className="h-5 w-5 text-emerald-400" />,
    title: 'Derechos y splits',
    desc: 'Gestiona contratos y splits transparents vía smart contracts.'
  },
  {
    icon: <Zap className="h-5 w-5 text-emerald-400" />,
    title: 'Automatizaciones',
    desc: 'Triggers para pre-saves, DMs de lanzamiento y newsletters.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 bg-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Todo lo que necesitas para crecer</h2>
          <p className="mt-3 text-slate-300">Herramientas conectadas para que te concentres en crear y no en tareas repetitivas.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/40 transition-all p-6">
              <div className="inline-flex items-center justify-center rounded-lg bg-emerald-500/10 p-2 mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
