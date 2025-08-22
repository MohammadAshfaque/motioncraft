'use client';

import { motion } from 'framer-motion';
import { Star, Hash, Copy, Eye, X } from 'lucide-react';
import { AnimationPattern } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface AnimationCardProps {
  pattern: AnimationPattern;
  isFavorite: boolean;
  isPreviewing: boolean;
  onToggleFavorite: () => void;
  onPreview: () => void;
  onCopy: (pattern: AnimationPattern) => void;
}

export function AnimationCard({ pattern, isFavorite, isPreviewing, onToggleFavorite, onPreview, onCopy }: AnimationCardProps) {
  // Use pattern ID to generate consistent colors
  const colorIndex = pattern.id.charCodeAt(0) % 10;
  const tagColorIndex = pattern.id.charCodeAt(1) % 8;
  
  const gradientColors = [
    'from-blue-400 to-blue-600',
    'from-purple-400 to-purple-600',
    'from-pink-400 to-pink-600',
    'from-green-400 to-green-600',
    'from-orange-400 to-orange-600',
    'from-teal-400 to-teal-600',
    'from-indigo-400 to-indigo-600',
    'from-red-400 to-red-600',
    'from-yellow-400 to-yellow-600',
    'from-cyan-400 to-cyan-600',
  ];
  
  const tagColors = [
    'bg-purple-500',
    'bg-pink-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-orange-500',
    'bg-teal-500',
    'bg-indigo-500',
    'bg-red-500',
  ];

  const gradientClass = gradientColors[colorIndex];
  const tagColor = tagColors[tagColorIndex];

  // Create unique thumbnail based on pattern type
  const renderThumbnail = () => {
    switch (pattern.category) {
      case 'gradients':
        return (
          <div className={cn(
            "w-full h-full rounded-lg",
            pattern.bgClass
          )} />
        );
      
      case 'geometry':
        if (pattern.id === 'rotating-conic') {
          return (
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-pink-500 via-orange-500 to-purple-500 animate-spin" />
          );
        }
        if (pattern.id === 'kaleidoscope') {
          return (
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 animate-pulse" />
          );
        }
        return (
          <div className={cn(
            "w-full h-full rounded-lg",
            pattern.bgClass
          )} />
        );
      
      case 'effects':
        if (pattern.id === 'neon-glow') {
          return (
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-pink-500 via-blue-500 to-orange-500 animate-pulse shadow-lg shadow-pink-500/50" />
          );
        }
        return (
          <div className={cn(
            "w-full h-full rounded-lg",
            pattern.bgClass
          )} />
        );
      
      case 'decorative':
        if (pattern.id === 'floral-spiral') {
          return (
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 animate-spin" />
          );
        }
        if (pattern.id === 'cosmic-swirl') {
          return (
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 animate-spin" />
          );
        }
        return (
          <div className={cn(
            "w-full h-full rounded-lg",
            pattern.bgClass
          )} />
        );
      
      default:
        return (
          <div className={cn(
            "w-full h-full rounded-lg",
            pattern.bgClass
          )} />
        );
    }
  };

  return (
    <motion.div
      className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{ aspectRatio: '4/3' }}
    >
      {/* Unique Pattern Thumbnail */}
      <div className="absolute inset-0">
        {renderThumbnail()}
      </div>
      
      {/* Star Icon (Favorite) */}
      <button
        className={cn(
          "absolute top-2 left-2 w-6 h-6 rounded-lg border border-gray-300 bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-200 z-10",
          "hover:bg-white hover:border-gray-400 hover:scale-110",
          isFavorite && "text-yellow-500 border-yellow-400 bg-yellow-50 shadow-md"
        )}
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
      >
        <Star className={cn(
          "w-3.5 h-3.5",
          isFavorite ? "fill-current" : "text-gray-400"
        )} />
      </button>

      {/* New Tag */}
      <div className={cn(
        "absolute top-2 right-2 px-2 py-1 rounded-lg text-white text-xs font-semibold flex items-center gap-1 z-10 shadow-md",
        tagColor
      )}>
        <Hash className="w-3 h-3" />
        New
      </div>

      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="font-bold text-sm mb-1">{pattern.title}</h3>
          <p className="text-xs text-white/90 mb-3 leading-relaxed line-clamp-2">{pattern.description}</p>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            {/* Preview Button */}
            <button
              className={cn(
                "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-200",
                "hover:bg-white/20 hover:border-white/50 hover:scale-105",
                isPreviewing && "bg-blue-500/30 border-blue-400/50 hover:bg-blue-500/40"
              )}
              onClick={(e) => {
                e.stopPropagation();
                onPreview();
              }}
            >
              {isPreviewing ? (
                <>
                  <X className="w-3 h-3 text-blue-400" />
                  <span className="text-blue-400 font-medium text-xs">Close</span>
                </>
              ) : (
                <>
                  <Eye className="w-3 h-3" />
                  <span className="font-medium text-xs">Preview</span>
                </>
              )}
            </button>
            
            {/* Copy Button */}
            <button
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/50 hover:scale-105"
              onClick={(e) => {
                e.stopPropagation();
                onCopy(pattern);
              }}
            >
              <Copy className="w-3 h-3" />
              <span className="font-medium text-xs">Copy</span>
            </button>
          </div>
        </div>
      </div>

      {/* Preview Active Indicator */}
      {isPreviewing && (
        <motion.div
          className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full z-20 shadow-md"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
}
