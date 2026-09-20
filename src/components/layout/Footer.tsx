import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Compass, Mail, Pickaxe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-[#0d0c12] border-t-4 border-[#25242f] pt-14 pb-10 mt-20">
      {/* Top Grass Fringe Accent Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-[#5b8731]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b-2 border-black/40">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#5b8731] border-2 border-black flex flex-col justify-between">
                <div className="h-2.5 bg-[#72b036]" />
                <div className="h-5 bg-[#866043] flex items-center justify-center font-pixel text-[8px] text-[#55ff55]">
                  ⛏️
                </div>
              </div>
              <span className="font-pixel text-sm text-white mc-text-shadow">
                Coders<span className="text-[#55ff55]">Island</span>
              </span>
            </Link>

            <p className="text-xs text-[#909090] leading-relaxed font-sans">
              A playful Minecraft-inspired coding expedition for school students mastering technology through hands-on workshops.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/60 border border-[#333] font-silkscreen text-[10px] text-[#55ff55]">
              <span className="w-2 h-2 bg-[#55ff55] border border-black animate-pulse" />
              <span>Island Server: 20 Chunks Loaded</span>
            </div>
          </div>

          {/* Quick Learning Links */}
          <div className="space-y-2.5">
            <h4 className="font-pixel text-[10px] uppercase text-[#fdb813] mc-gold-text flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>Island Biomes</span>
            </h4>
            <ul className="space-y-1.5 font-silkscreen text-xs text-[#a0a0a0]">
              <li>
                <Link to="/learn" className="hover:text-[#55ff55] transition-colors">
                  All 5 Island Biomes
                </Link>
              </li>
              <li>
                <Link to="/week/week-1" className="hover:text-[#55ff55] transition-colors">
                  Biome 1: Overworld Logic
                </Link>
              </li>
              <li>
                <Link to="/week/week-2" className="hover:text-[#55ff55] transition-colors">
                  Biome 2: Crafting HTML/CSS
                </Link>
              </li>
              <li>
                <Link to="/week/week-3" className="hover:text-[#55ff55] transition-colors">
                  Biome 3: Redstone JavaScript
                </Link>
              </li>
              <li>
                <Link to="/week/week-5" className="hover:text-[#55ff55] transition-colors">
                  Biome 5: The End Capstone
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform & Resources */}
          <div className="space-y-2.5">
            <h4 className="font-pixel text-[10px] uppercase text-[#4dedf4] mc-diamond-text flex items-center gap-1.5">
              <Pickaxe className="w-3.5 h-3.5" />
              <span>Workshops & Scrolls</span>
            </h4>
            <ul className="space-y-1.5 font-silkscreen text-xs text-[#a0a0a0]">
              <li>
                <Link to="/learn" className="hover:text-[#4dedf4] transition-colors">
                  Workshop Streams (YouTube)
                </Link>
              </li>
              <li>
                <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#4dedf4] transition-colors">
                  MDN Web Docs Guides
                </a>
              </li>
              <li>
                <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#4dedf4] transition-colors">
                  freeCodeCamp Tutorials
                </a>
              </li>
              <li>
                <Link to="/admin" className="hover:text-[#fdb813] transition-colors flex items-center gap-1.5 text-[#fdb813]">
                  <span>[CMD] Admin Console</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-2.5">
            <h4 className="font-pixel text-[10px] uppercase text-[#ff5533] mc-redstone-text">
              <span>Expedition Server</span>
            </h4>
            <p className="text-xs text-[#909090] font-sans leading-relaxed">
              Designed for school students in Classes 6–10 participating in coding workshops and tech events.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="mc-btn p-2 text-white"
                title="GitHub"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="mc-btn p-2 text-white"
                title="YouTube Workshops"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="mailto:contact@codersisland.edu"
                className="mc-btn p-2 text-white"
                title="Contact Mentors"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#707070] font-silkscreen">
          <div>
            © 2026 CodersIsland. Built for Future Coders & Crafters.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#ff2200] fill-[#ff2200]" />
            <span>for School Workshops</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
