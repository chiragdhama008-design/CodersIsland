import React, { useState } from 'react';
import { Play, Video, Calendar, Clock, User, AlertCircle } from 'lucide-react';
import { WorkshopVideo } from '../../types/content';

interface VideoPlayerProps {
  video: WorkshopVideo;
  topicTitle?: string;
}

export function extractYouTubeId(url?: string): string | null {
  if (!url) return null;
  const clean = url.trim();

  if (/^[a-zA-Z0-9_-]{11}$/.test(clean)) {
    return clean;
  }

  const shortMatch = clean.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];

  const standardMatch = clean.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (standardMatch) return standardMatch[1];

  const embedMatch = clean.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];

  return null;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, topicTitle }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = extractYouTubeId(video.youtubeUrl);

  return (
    <div className="relative group">
      {/* Outer Obsidian Frame with Minecraft Bevel */}
      <div className="mc-card p-2 sm:p-3 bg-[#151324] border-4 border-[#332f4a] shadow-2xl">
        {/* Top Control Bar */}
        <div className="px-4 py-3 bg-[#1e1a33] border-b-2 border-black flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2.5">
            {/* Redstone Power Lamp */}
            <span className="w-3 h-3 bg-[#ff2200] border border-black shadow-[0_0_8px_#ff2200] animate-pulse" />
            <div>
              <div className="font-pixel text-[9px] text-[#ff5533] mc-redstone-text uppercase">
                REDSTONE BROADCAST SCREEN
              </div>
              <h3 className="font-pixel text-xs sm:text-sm text-white mc-text-shadow line-clamp-1 mt-0.5">
                {video.title || topicTitle || 'Workshop Session'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 font-silkscreen text-xs text-[#a0a0a0]">
            {video.date && (
              <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 border border-[#333]">
                <Calendar className="w-3.5 h-3.5 text-[#fdb813]" />
                <span>{video.date}</span>
              </span>
            )}
            {video.duration && (
              <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 border border-[#333]">
                <Clock className="w-3.5 h-3.5 text-[#55ff55]" />
                <span>{video.duration}</span>
              </span>
            )}
            {video.instructor && (
              <span className="hidden md:flex items-center gap-1 bg-black/40 px-2.5 py-1 border border-[#333] text-white">
                <User className="w-3.5 h-3.5 text-[#4dedf4]" />
                <span>{video.instructor}</span>
              </span>
            )}
          </div>
        </div>

        {/* Video Screen Area */}
        <div className="relative aspect-video w-full bg-black border-2 border-black overflow-hidden flex items-center justify-center">
          {videoId ? (
            isPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              /* Custom Minecraft Video Poster */
              <div
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full cursor-pointer group/poster flex items-center justify-center"
              >
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover/poster:opacity-85 transition-opacity"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Minecraft Redstone Activation Button */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mc-btn mc-btn-diamond flex items-center justify-center text-white group-hover/poster:scale-110 transition-transform">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-current" />
                  </div>
                  <span className="mt-3 font-pixel text-[9px] text-[#fdb813] mc-gold-text uppercase bg-black/80 px-3 py-1.5 border border-[#555]">
                    ▶ PRESS TO START WORKSHOP
                  </span>
                </div>
              </div>
            )
          ) : (
            <div className="p-8 text-center max-w-md">
              <AlertCircle className="w-10 h-10 text-[#fdb813] mx-auto mb-2 animate-bounce" />
              <h4 className="font-pixel text-xs text-white mc-text-shadow mb-2">
                WORKSHOP STREAM IN PREPARATION
              </h4>
              <p className="text-xs text-[#888] font-silkscreen">
                The recording for this quest is currently being encoded by the mentors. Check back soon or study the scrolls below!
              </p>
            </div>
          )}
        </div>

        {/* Bottom Status Tag */}
        <div className="px-4 py-2 bg-[#1e1a33] border-t-2 border-black flex items-center justify-between text-[10px] font-silkscreen text-[#888] mt-2">
          <span className="flex items-center gap-1.5 text-[#55ff55]">
            <span className="w-2 h-2 bg-[#55ff55] border border-black" />
            <span>Official CodersIsland Stream</span>
          </span>
          <span className="font-pixel text-[8px] text-[#4dedf4]">
            CODERS_ISLAND_NETHERITE_EDITION
          </span>
        </div>
      </div>
    </div>
  );
};
