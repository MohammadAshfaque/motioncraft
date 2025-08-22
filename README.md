# MotionCraft - Background Animation Patterns

A modern Next.js application showcasing professional background animation patterns with real-time preview and instant CSS copying.

## Features

- 🎨 **10 Working Animations**: All animations are tested and working
- 🎯 **Real-time Preview**: Click any pattern to see it as your page background
- 📋 **Instant Copy**: Copy CSS code with one click
- 🏷️ **Category Filtering**: Filter animations by type
- 🎭 **Smooth Transitions**: Framer Motion powered animations
- 📱 **Responsive Design**: Works on all devices
- 🎪 **Default Dots**: Colorful animated dots as default background

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **React Hot Toast** - Toast notifications
- **GSAP** - Advanced animations

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Animations

### Gradients
- **Pulsing Gradient** - Multi-stop gradient shifting
- **Aurora** - Soft aurora glow bands
- **Liquid Gradient** - Fluid color motion

### Effects
- **Matrix Rain** - Digital rain sweep
- **Wave Highlight** - Sheen wave across background
- **Ripple Pulse** - Center ripple pulse

### Particles
- **Particle Field** - Subtle twinkling dots
- **Starfield** - Slow drifting stars

### Grids
- **Neon Grid** - Cyber glow lattice

### Geometry
- **Geometric Spin** - Rotating geometric frames

## Usage

1. **Browse Patterns**: Scroll through the animation patterns
2. **Filter by Category**: Use the category buttons to filter
3. **Preview Animation**: Click the play button to preview as background
4. **Copy CSS**: Click the copy button to get the CSS code
5. **Exit Preview**: Click the X button to return to default background

## Project Structure

```
motioncraft/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── animated-background.tsx  # Background component
│   ├── pattern-card.tsx         # Pattern card component
│   └── category-filter.tsx      # Category filter
├── lib/
│   ├── animations.ts        # Animation data
│   └── utils.ts             # Utility functions
└── package.json
```

## Customization

### Adding New Animations

1. Add animation data to `lib/animations.ts`
2. Add CSS classes to `app/globals.css`
3. Update the pattern card demo if needed

### Styling

- Colors are defined in CSS custom properties
- Animations use Tailwind's animation utilities
- Responsive design with Tailwind breakpoints

## Deployment

The app can be deployed to Vercel, Netlify, or any other Next.js-compatible platform:

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your animation pattern
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your own applications!
