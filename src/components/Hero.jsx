import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Share2, Wallet } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6Dqk0W4G5t9zJ8uT/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 ring-1 ring-white/10 px-3 py-1 text-xs md:text-sm">
            <Rocket size={16} className="text-emerald-400" />
            Lanza tu música más rápido
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            La plataforma todo-en-uno para artistas emergentes
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-xl">
            Optimiza tus publicaciones, publica en múltiples plataformas con un clic, integra tu música en Web3 y accede a playlists curadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#precios"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3 transition-colors"
            >
              Empezar gratis
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 ring-1 ring-white/10 transition-colors"
            >
              <Share2 size={18} />
              Ver cómo funciona
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Wallet size={18} className="text-emerald-400" />
              Web3 listo para creadores
            </div>
            <div className="flex items-center gap-2">
              <Share2 size={18} className="text-emerald-400" />
              Publicación multi-plataforma
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute inset-0 blur-3xl bg-emerald-500/10 rounded-full" />
          <div className="relative backdrop-blur-sm bg-white/5 ring-1 ring-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-slate-800/60 p-4">
                <p className="text-sm text-slate-300">Optimización de pitch</p>
                <p className="mt-2 text-2xl font-semibold">+37%</p>
                <p className="text-xs text-slate-400">tasa de respuesta</p>
              </div>
              <div className="rounded-lg bg-slate-800/60 p-4">
                <p className="text-sm text-slate-300">Playlists alcanzadas</p>
                <p className="mt-2 text-2xl font-semibold">120+</p>
                <p className="text-xs text-slate-400">curadas semanalmente</p>
              </div>
              <div className="rounded-lg bg-slate-800/60 p-4">
                <p className="text-sm text-slate-300">Tiempo ahorrado</p>
                <p className="mt-2 text-2xl font-semibold">8h</p>
                <p className="text-xs text-slate-400">por lanzamiento</p>
              </div>
              <div className="rounded-lg bg-slate-800/60 p-4">
                <p className="text-sm text-slate-300">Crecimiento mensual</p>
                <p className="mt-2 text-2xl font-semibold">+24%</p>
                <p className="text-xs text-slate-400">seguidores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
