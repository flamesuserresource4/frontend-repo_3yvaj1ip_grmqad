import React from 'react';
import { Music, Share2, Globe2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <Music className="text-emerald-400" />
              Emergent
            </div>
            <p className="mt-3 text-sm text-slate-400 max-w-sm">
              SaaS para artistas: crecimiento, distribución y monetización en un solo lugar.
            </p>
          </div>

          <div className="text-sm">
            <h4 className="font-semibold text-white">Producto</h4>
            <ul className="mt-2 space-y-2">
              <li className="hover:text-white transition-colors"><a href="#features">Características</a></li>
              <li className="hover:text-white transition-colors"><a href="#precios">Precios</a></li>
              <li className="hover:text-white transition-colors"><a href="#">Playlists</a></li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="font-semibold text-white">Integraciones</h4>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center gap-2 text-slate-400"><Share2 className="h-4 w-4" /> Redes sociales</li>
              <li className="flex items-center gap-2 text-slate-400"><Globe2 className="h-4 w-4" /> Web3 y wallets</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Emergent. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#" className="hover:text-white">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
