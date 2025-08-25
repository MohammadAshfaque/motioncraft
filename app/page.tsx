'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Eye, X, Copy, Heart, Code, Github, Twitter, Sparkles, Palette, Zap } from 'lucide-react';
import { AnimationCard } from '@/components/animation-card';
import { CategoryFilter } from '@/components/category-filter';
import { animationPatterns } from '@/lib/animations';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [previewingPattern, setPreviewingPattern] = useState<string | null>(null);
  
  const filteredPatterns = animationPatterns.filter(pattern => {
    const matchesCategory = selectedCategory === 'all' || 
                           (selectedCategory === 'favourites' ? favorites.includes(pattern.id) : pattern.category === selectedCategory);
    const matchesSearch = pattern.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pattern.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (patternId: string) => {
    setFavorites(prev => 
      prev.includes(patternId) 
        ? prev.filter(id => id !== patternId)
        : [...prev, patternId]
    );
  };

  const handlePreview = (patternId: string) => {
    if (previewingPattern === patternId) {
      setPreviewingPattern(null);
    } else {
      setPreviewingPattern(patternId);
      // Auto-scroll to top when previewing so user can see the preview
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleCopy = (pattern: any) => {
    navigator.clipboard.writeText(pattern.code).then(() => {
      toast.success('CSS copied to clipboard!');
    }).catch(() => {
      toast.error('Failed to copy CSS');
    });
  };

  const currentPattern = previewingPattern 
    ? animationPatterns.find(p => p.id === previewingPattern) 
    : null;

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Professional Colorful Dotted Pops Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating dots */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pink-400/30 to-purple-500/30 rounded-full blur-xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-cyan-500/30 rounded-full blur-lg animate-pulse" style={{ animationDuration: '6s' }}></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full blur-xl animate-pulse" style={{ animationDuration: '10s' }}></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full blur-lg animate-pulse" style={{ animationDuration: '7s' }}></div>
          
          {/* Medium floating dots */}
          <div className="absolute top-60 left-1/4 w-16 h-16 bg-gradient-to-br from-indigo-400/25 to-purple-500/25 rounded-full blur-md animate-pulse" style={{ animationDuration: '9s' }}></div>
          <div className="absolute top-80 right-1/3 w-12 h-12 bg-gradient-to-br from-teal-400/25 to-blue-500/25 rounded-full blur-md animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute bottom-60 left-1/3 w-14 h-14 bg-gradient-to-br from-rose-400/25 to-pink-500/25 rounded-full blur-md animate-pulse" style={{ animationDuration: '11s' }}></div>
          
          {/* Small floating dots */}
          <div className="absolute top-32 left-1/2 w-8 h-8 bg-gradient-to-br from-violet-400/20 to-purple-500/20 rounded-full blur-sm animate-pulse" style={{ animationDuration: '12s' }}></div>
          <div className="absolute top-96 right-1/4 w-6 h-6 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-sm animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-40 left-1/2 w-10 h-10 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-sm animate-pulse" style={{ animationDuration: '6s' }}></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.6, 0.8, 0.6],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animated Background Preview */}
      {currentPattern && (
        <div className="fixed inset-0 z-10">
          <div className={cn(
            "absolute inset-0 transition-all duration-1000",
            currentPattern.bgClass
          )} />
          
          {/* Preview Controls */}
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={() => {
                setPreviewingPattern(null);
              }}
              className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200 group"
            >
              <X className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
            </button>
          </div>

          {/* Scroll Down Arrow */}
          <div className="absolute bottom-6 right-6 z-20">
            <button
              onClick={() => {
                // First close the preview
                setPreviewingPattern(null);
                
                // Scroll to the animation gallery section
                setTimeout(() => {
                  const animationGallery = document.getElementById('animation-gallery');
                  if (animationGallery) {
                    animationGallery.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  } else {
                    // Fallback: scroll down by a large amount
                    window.scrollTo({
                      top: 1000,
                      behavior: 'smooth'
                    });
                  }
                }, 200);
              }}
              className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 group"
              title="Return to Animation Gallery"
            >
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg 
                  className="w-5 h-5 text-gray-700 group-hover:text-gray-900" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </motion.div>
            </button>
          </div>
          
          {/* Preview Info */}
          <div className="absolute bottom-4 left-4 z-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{currentPattern?.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{currentPattern?.description}</p>
              <div className="flex items-center justify-between">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                  {currentPattern?.category}
                </span>
                <button
                  onClick={() => handleCopy(currentPattern!)}
                  className="px-3 py-1.5 bg-green-500 text-white text-xs font-medium rounded-lg hover:bg-green-600 transition-colors"
                >
                  Copy CSS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-20 transition-all duration-500">
        {/* Navigation Bar */}
        <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  MotionCraft
                </span>
              </div>

              {/* Right side */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors cursor-pointer" />
                  <Github className="w-5 h-5 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer" />
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  • 5+ New Patterns
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                MotionCraft
              </span>
              <span className="block text-2xl md:text-3xl font-normal text-blue-600 mt-2">
                2025 Edition
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover cutting-edge animations featuring the latest 2025 design trends: 
              <span className="font-semibold text-blue-600"> Glassmorphism</span>, 
              <span className="font-semibold text-purple-600"> Modern Blends</span>, and 
              <span className="font-semibold text-pink-600"> Advanced Gradients</span>. 
              Create stunning, modern interfaces that bring your projects to life.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="flex items-center space-x-3 bg-white border-2 border-gray-200 rounded-xl px-6 py-4 hover:border-purple-300 hover:shadow-lg transition-all duration-200 group">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">Copy</div>
                  <div className="text-sm text-gray-500">Elegant code</div>
                </div>
              </button>

              <button className="flex items-center space-x-3 bg-white border-2 border-gray-200 rounded-xl px-6 py-4 hover:border-pink-300 hover:shadow-lg transition-all duration-200 group">
                <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">Preview</div>
                  <div className="text-sm text-gray-500">Visual experience</div>
                </div>
              </button>

              <button className="flex items-center space-x-3 bg-black text-white rounded-xl px-6 py-4 hover:bg-gray-800 transition-all duration-200 group">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Connect</span>
              </button>

              <button className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl px-6 py-4 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 group shadow-lg">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">2025 Trends</span>
              </button>
            </motion.div>

            {/* Statistics */}
            <motion.div 
              className="flex justify-center space-x-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">150+ Patterns</div>
                <div className="text-sm text-gray-500 mt-1">Including 2025 trends</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">100% Free</div>
                <div className="text-sm text-gray-500 mt-1">Premium quality</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Modern CSS</div>
                <div className="text-sm text-gray-500 mt-1">Latest standards</div>
              </div>
            </motion.div>

            {/* 2025 Trends Showcase */}
            <motion.section 
              className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    ✨ 2025 Design Trends ✨
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Experience the future of web design with our cutting-edge animation collection
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Glassmorphism */}
                  <motion.div 
                    className="text-center group"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Glassmorphism</h3>
                    <p className="text-sm text-gray-600">Frosted glass effects with modern blur aesthetics</p>
                  </motion.div>

                  {/* Modern Blends */}
                  <motion.div 
                    className="text-center group"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-8 h-8 bg-white/20 rounded-full animate-pulse" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Modern Blends</h3>
                    <p className="text-sm text-gray-600">Advanced gradient techniques with organic shapes</p>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          </div>
        </section>

        {/* Pattern Library Section */}
        <section id="animation-gallery" className="py-16 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                ✨ 2025 Animation Library ✨
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Discover hidden magic • Hover or tap to unlock animation secrets
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">Glassmorphism</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">Modern Blends</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">Advanced Gradients</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex justify-center mb-12">
              <CategoryFilter 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                isPreviewing={!!previewingPattern}
              />
            </div>

            {/* Search and Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                 <input
                   type="text"
                   placeholder="Search animations..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500"
                 />
              </div>
              
                             {/* Animation Count */}
               <div className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                 {filteredPatterns.length} animations
               </div>
            </div>

                         {/* Animations Grid */}
             <div id="animations-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredPatterns.map((pattern, index) => (
                  <motion.div
                    key={pattern.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.3,
                      delay: index * 0.05 
                    }}
                    layout
                  >
                    <AnimationCard
                      pattern={pattern}
                      isFavorite={favorites.includes(pattern.id)}
                      isPreviewing={previewingPattern === pattern.id}
                      onToggleFavorite={() => toggleFavorite(pattern.id)}
                      onPreview={() => handlePreview(pattern.id)}
                      onCopy={handleCopy}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
