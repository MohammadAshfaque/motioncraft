'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  isPreviewing?: boolean;
}

const categories = [
  { id: 'all', name: 'All Patterns' },
  { id: 'gradients', name: 'Gradients' },
  { id: 'geometry', name: 'Geometric' },
  { id: 'decorative', name: 'Decorative' },
  { id: 'effects', name: 'Effects' },
  { id: 'favourites', name: 'Favourites' },
];

export function CategoryFilter({ selectedCategory, onCategoryChange, isPreviewing = false }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          className={cn(
            "px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 border-2",
            "hover:scale-105 hover:shadow-lg",
            selectedCategory === category.id 
              ? "bg-white text-gray-800 border-gray-300 shadow-md" 
              : "bg-white/80 text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-white hover:text-gray-800",
          )}
          onClick={() => onCategoryChange(category.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {category.name}
        </motion.button>
      ))}
    </div>
  );
}
