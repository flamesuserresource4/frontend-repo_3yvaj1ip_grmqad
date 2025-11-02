import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Gratis',
    subtitle: 'Ideal para comenzar',
    features: [
      'Publicación a 2 plataformas',
      'Optimización básica de pitch',
      '10 análisis de tendencias/mes'
    ],
    cta: 'Crear cuenta',
    highlight: false
  },
  {
    name: 'Pro',
    price: '$19/mes',
    subtitle: 'Para lanzamientos serios',
    features: [
      'Publicación multi-plataforma ilimitada',
      'Pitch asistido por IA + plantillas',
      'Alertas de artistas virales en tiempo real',
      'Acceso a playlists curadas'
    ],
    cta: 'Probar 14 días',
    highlight: true
  },
  {
    name: 'Label',
    price: '$59/mes',
    subtitle: 'Para equipos y sellos',
    features: [
      'Colaboradores y roles',
      'Automatizaciones avanzadas',
      'Smart contracts y splits',
      'Soporte prioritario'
    ],
    cta: 'Hablar con ventas',
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="precios" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Planes simples, crecimiento real</h2>
          <p className="mt-3 text-slate-300">Empieza gratis y escala cuando estés listo. Cancela cuando quieras.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-6 ring-1 ${t.highlight ? 'bg-emerald-500 text-slate-900 ring-transparent' : 'bg-white/5 ring-white/10'}`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className={`text-xl font-bold ${t.highlight ? 'text-slate-900' : 'text-white'}`}>{t.name}</h3>
                  <p className={`text-sm mt-1 ${t.highlight ? 'text-slate-800/80' : 'text-slate-300'}`}>{t.subtitle}</p>
                </div>
                <div className="text-2xl font-bold">{t.price}</div>
              </div>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className={`h-5 w-5 ${t.highlight ? 'text-emerald-800' : 'text-emerald-400'}`} />
                    <span className={t.highlight ? 'text-slate-900' : 'text-slate-200'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-semibold transition-colors ${t.highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white/10 hover:bg-white/20 text-white'}`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
