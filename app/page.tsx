'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Eye, X, Copy, Heart, Code, Github, Twitter, Sparkles, Palette, Zap } from 'lucide-react';
import { PatternCard } from '@/components/pattern-card';
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
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unleash your creativity with our collection of stunning animated backgrounds. From subtle gradients to dynamic patterns, create eye-catching designs that bring your projects to life.
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
                  <div className="font-semibold text-gray-800">Instant Copy</div>
                  <div className="text-sm text-gray-500">Ready-to-use CSS code</div>
                </div>
              </button>

              <button className="flex items-center space-x-3 bg-white border-2 border-gray-200 rounded-xl px-6 py-4 hover:border-pink-300 hover:shadow-lg transition-all duration-200 group">
                <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">Live Preview</div>
                  <div className="text-sm text-gray-500">See patterns in action</div>
                </div>
              </button>

              <button className="flex items-center space-x-3 bg-black text-white rounded-xl px-6 py-4 hover:bg-gray-800 transition-all duration-200 group">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Join Community</span>
              </button>

              <button className="flex items-center space-x-3 bg-gray-100 text-gray-700 rounded-xl px-6 py-4 hover:bg-gray-200 transition-all duration-200 group">
                <Palette className="w-5 h-5" />
                <span className="font-semibold">Explore Gallery</span>
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
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">100+ Patterns</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">100% Free</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">CSS & Tailwind</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pattern Library Section */}
        <section className="py-16 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                Pattern Library
              </h2>
              <p className="text-lg text-gray-600">
                Tap on mobile or hover on desktop to see options
              </p>
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
                  placeholder="Search patterns..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500"
                />
              </div>
              
              {/* Pattern Count */}
              <div className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {filteredPatterns.length} patterns
              </div>
            </div>

            {/* Patterns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
                    <PatternCard
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
