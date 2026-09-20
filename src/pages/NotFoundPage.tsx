import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-36 pb-28 max-w-2xl mx-auto px-4 text-center">
      <div className="mc-card p-8 sm:p-12 bg-[#1b1a25] border-4 border-[#ff2200]">
        <div className="text-5xl mb-4 animate-bounce">💀</div>

        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border-2 border-[#ff2200] font-pixel text-[9px] text-[#ff2200] mb-4">
          <span>PLAYER FELL OUT OF THE WORLD</span>
        </div>

        <h1 className="font-pixel text-xl sm:text-3xl text-white mc-text-shadow mb-3">
          YOU FELL INTO THE VOID! (404)
        </h1>

        <p className="text-xs sm:text-sm text-[#a0a0a0] max-w-md mx-auto leading-relaxed mb-6 font-sans">
          The coordinates you entered led into uncharted void beyond the island chunk boundaries.
        </p>

        <Link
          to="/"
          className="mc-btn mc-btn-green inline-flex items-center gap-2 px-8 py-3.5 text-xs text-white"
        >
          <span>RESPAWN AT ISLAND SPAWN</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
