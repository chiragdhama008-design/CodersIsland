import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Terminal, Shield, Pickaxe } from 'lucide-react';
import { useContentData } from '../../hooks/useContentData';
import { progressService } from '../../services/progressService';
import { SearchModal } from '../search/SearchModal';

const splashQuotes = [
  '100% Redstone Powered!',
  'Craft Your First Loop!',
  'Don’t Dig Straight Down!',
  'Contains 20 Quests!',
  'Now with JavaScript!',
  'Diamond Pickaxe Ready!',
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [splash] = useState(() => splashQuotes[Math.floor(Math.random() * splashQuotes.length)]);
  const location = useLocation();
  const { weeks } = useContentData();
  const overallProg = progressService.getOverallProgress(weeks);

  // Calculate student XP level (e.g. 1 to 20)
  const currentLevel = Math.max(1, overallProg.completedCount);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Ctrl+K / Cmd+K search listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Spawn Point', path: '/' },
    { name: 'Island Biomes', path: '/learn' },
    { name: 'Quests', path: '/learn' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#15141c]/95 border-b-4 border-[#2c2b38] py-2.5 shadow-2xl backdrop-blur-md'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Minecraft Grass Block and Yellow Splash */}
          <Link to="/" className="flex items-center gap-3 group relative">
            {/* Minecraft Grass Block Icon */}
            <div className="w-10 h-10 bg-[#5b8731] border-2 border-black shadow-[inset_2px_2px_0px_#72b036,inset_-2px_-2px_0px_#3d631f] flex flex-col justify-between shrink-0">
              <div className="h-3 bg-[#72b036] border-b-2 border-[#5b8731]" />
              <div className="h-7 bg-[#866043] border-t-2 border-[#573d26] p-0.5 flex items-center justify-center">
                <span className="font-pixel text-[10px] text-[#55ff55] mc-text-shadow">&lt;/&gt;</span>
              </div>
            </div>

            <div>
              <div className="font-pixel text-base sm:text-lg text-white mc-text-shadow flex items-center gap-1.5 tracking-wider">
                <span>Coders</span>
                <span className="text-[#55ff55]">Island</span>
              </div>
              {/* Yellow Minecraft Splash text */}
              <div className="hidden sm:block font-silkscreen text-[10px] text-[#fdb813] mc-gold-text tracking-wide -mt-0.5 animate-pulse">
                ★ {splash}
              </div>
            </div>
          </Link>

          {/* Desktop Hotbar Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#25242d] border-2 border-black p-1 shadow-mc-slot">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className={`px-4 py-1.5 text-xs font-silkscreen tracking-wide transition-all ${
                  isActive(link.path)
                    ? 'bg-[#4a7726] text-white border-2 border-[#7ab73f] shadow-[inset_1px_1px_0px_#90d34e] mc-text-shadow'
                    : 'text-[#a0a0a0] hover:text-white hover:bg-[#34333f]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Tools: Search, XP Bar, Admin */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="mc-btn px-3 py-1.5 text-[11px] text-white flex items-center gap-2"
              title="Search Island Quests (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#55ff55]" />
              <span>Search</span>
              <kbd className="bg-black/40 px-1 py-0.5 font-pixel text-[8px] text-[#a0a0a0]">
                Ctrl K
              </kbd>
            </button>

            {/* Authentic Minecraft Experience Bar & Level Badge */}
            <Link
              to="/learn"
              className="flex items-center gap-2.5 bg-[#1a1922] border-2 border-black p-1.5 px-3 shadow-mc-slot hover:border-[#7fff00] transition-colors"
              title="Your Minecraft Experience Level"
            >
              {/* Level Number */}
              <span className="font-pixel text-sm mc-xp-text font-black">
                {currentLevel}
              </span>

              {/* Mini XP Bar */}
              <div className="w-16 h-2 bg-black border border-[#383838] overflow-hidden">
                <div
                  className="h-full bg-[#7fff00] shadow-[0_0_8px_#7fff00] transition-all duration-500"
                  style={{ width: `${overallProg.percentage}%` }}
                />
              </div>

              <span className="font-silkscreen text-[10px] text-[#a0a0a0]">
                {overallProg.completedCount}/{overallProg.totalCount} XP
              </span>
            </Link>

            {/* Redstone Command Block Admin Button */}
            <Link
              to="/admin"
              className="mc-btn px-3 py-1.5 text-[11px] text-[#fdb813] border-2 border-black flex items-center gap-1.5 hover:border-[#ff2200]"
              title="Command Block Admin Console"
            >
              <span className="w-2 h-2 bg-[#ff2200] border border-black animate-pulse" />
              <span>[CMD] Admin</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="mc-btn p-2 text-white"
            >
              <Search className="w-4 h-4 text-[#55ff55]" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mc-btn p-2 text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Hotbar Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a1924] border-b-4 border-black p-4 space-y-3 animate-in slide-in-from-top-3">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`mc-btn px-4 py-2 text-xs font-silkscreen ${
                    isActive(link.path) ? 'mc-btn-green text-white' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t-2 border-black space-y-2">
              <div className="flex items-center justify-between p-2 bg-black/50 font-silkscreen text-xs">
                <span className="text-[#a0a0a0]">Experience Level:</span>
                <span className="mc-xp-text font-pixel text-sm">LVL {currentLevel} ({overallProg.completedCount}/{overallProg.totalCount})</span>
              </div>

              <Link
                to="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mc-btn w-full py-2.5 text-center text-xs text-[#fdb813] block"
              >
                [CMD] Open Admin Console
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        weeks={weeks}
      />
    </>
  );
};
