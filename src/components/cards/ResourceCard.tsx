import React from 'react';
import { ExternalLink, BookOpen, Clock } from 'lucide-react';
import { Resource } from '../../types/content';

interface ResourceCardProps {
  resource: Resource;
  index?: number;
}

const sourceColors: Record<string, { border: string; text: string; bg: string }> = {
  'MDN Web Docs': { border: 'border-[#4dedf4]', text: 'text-[#4dedf4]', bg: 'bg-[#0e2c30]' },
  'freeCodeCamp': { border: 'border-[#fdb813]', text: 'text-[#fdb813]', bg: 'bg-[#3b2b07]' },
  'JavaScript.info': { border: 'border-[#ffe043]', text: 'text-[#ffe043]', bg: 'bg-[#36300a]' },
  'GitHub Docs': { border: 'border-[#a855f7]', text: 'text-[#a855f7]', bg: 'bg-[#2b1040]' },
  'CSS-Tricks': { border: 'border-[#ff79c6]', text: 'text-[#ff79c6]', bg: 'bg-[#3d122b]' },
  'web.dev by Google': { border: 'border-[#55ff55]', text: 'text-[#55ff55]', bg: 'bg-[#133013]' },
};

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const badgeStyle = sourceColors[resource.source] || {
    border: 'border-[#4dedf4]',
    text: 'text-[#4dedf4]',
    bg: 'bg-[#0e2c30]',
  };

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group mc-card p-5 block hover:-translate-y-1 transition-all flex flex-col justify-between"
    >
      <div>
        {/* Source Badge & Reading Time */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`px-2.5 py-0.5 font-silkscreen text-[10px] uppercase tracking-wider border-2 ${badgeStyle.border} ${badgeStyle.text} ${badgeStyle.bg}`}>
            📖 {resource.source}
          </span>

          <div className="flex items-center gap-1 font-silkscreen text-[10px] text-[#888]">
            <Clock className="w-3 h-3" />
            <span>{resource.readingTime || '5 min read'}</span>
          </div>
        </div>

        {/* Title */}
        <h4 className="font-pixel text-xs sm:text-sm text-white mc-text-shadow group-hover:text-[#fdb813] transition-colors mb-2 leading-relaxed">
          {resource.title}
        </h4>

        {/* Description (clean legible text) */}
        <p className="text-xs text-[#a0a0a0] line-clamp-2 leading-relaxed mb-4">
          {resource.description}
        </p>
      </div>

      {/* Button footer */}
      <div className="pt-3 border-t-2 border-black/40 flex items-center justify-between">
        <span className="font-silkscreen text-[11px] text-[#55ff55] mc-xp-text flex items-center gap-1.5 font-bold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>READ ENCHANTED SCROLL</span>
        </span>
        <ExternalLink className="w-3.5 h-3.5 text-[#55ff55] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </a>
  );
};
