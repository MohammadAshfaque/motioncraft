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

      // New 2025 Animation Categories
      case 'glassmorphism':
        return (
          <div className={cn(
            "w-full h-full rounded-lg",
            pattern.bgClass
          )} />
        );

      case 'modern':
        if (pattern.id === 'mesh-gradient') {
          return (
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-pulse" />
            </div>
          );
        }
        if (pattern.id === 'gradient-noise') {
          return (
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-purple-400/40 animate-pulse" />
            </div>
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
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* New 2025 Badge */}
      {['glassmorphism', 'modern'].includes(pattern.category) && (
        <div className="absolute top-3 right-3 z-20">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
            NEW 2025
          </div>
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        {renderThumbnail()}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <Eye className="w-5 h-5 text-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-800 text-sm leading-tight">{pattern.title}</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Star className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>
        
        <p className="text-gray-600 text-xs mb-3 line-clamp-2">{pattern.description}</p>
        
        <div className="flex items-center justify-between">
          <span className={cn(
            "px-2 py-1 rounded-full text-xs font-medium",
            tagColor === 'bg-purple-500' && "bg-purple-100 text-purple-700",
            tagColor === 'bg-pink-500' && "bg-pink-100 text-pink-700",
            tagColor === 'bg-green-500' && "bg-green-100 text-green-700",
            tagColor === 'bg-blue-500' && "bg-blue-100 text-blue-700",
            tagColor === 'bg-orange-500' && "bg-orange-100 text-orange-700",
            tagColor === 'bg-teal-500' && "bg-teal-100 text-teal-700",
            tagColor === 'bg-indigo-500' && "bg-indigo-100 text-indigo-700",
            tagColor === 'bg-red-500' && "bg-red-100 text-red-700"
          )}>
            {pattern.category.charAt(0).toUpperCase() + pattern.category.slice(1)}
          </span>
          
          <div className="flex space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPreview();
              }}
              className={cn(
                "px-3 py-1.5 rounded-lg transition-all duration-200 font-medium text-xs",
                isPreviewing 
                  ? "bg-red-500 text-white hover:bg-red-600 shadow-md" 
                  : "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:scale-105"
              )}
              title={isPreviewing ? "Close Preview" : "Preview Animation"}
            >
              {isPreviewing ? (
                <>
                  <X className="w-3 h-3 inline mr-1" />
                  Close
                </>
              ) : (
                <>
                  <Eye className="w-3 h-3 inline mr-1" />
                  Preview
                </>
              )}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCopy(pattern);
              }}
              className="px-2.5 py-1.5 text-gray-600 hover:text-green-600 transition-colors rounded-lg hover:bg-green-50 border border-gray-200 hover:border-green-300 text-xs font-medium"
              title="Copy CSS"
            >
              <Copy className="w-3 h-3 inline mr-1" />
              Copy
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
