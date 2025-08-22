# MotionCraft - Background Animation Library

A modern Next.js application showcasing professional background animation patterns with real-time preview and instant CSS copying.

## Features

- 🎨 **40+ Working Animations**: All animations are tested and working perfectly
- 🎯 **Real-time Preview**: Click any animation to see it as your page background
- 📋 **Instant Copy**: Copy CSS code with one click
- 🏷️ **Category Filtering**: Filter animations by type (Gradients, Geometry, Effects, Decorative)
- 🎭 **Smooth Transitions**: Framer Motion powered animations
- 📱 **Responsive Design**: Works on all devices
- 🎪 **Professional Background**: Beautiful animated dotted background with floating elements

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework with custom animations
- **Framer Motion** - Smooth animation library
- **Lucide React** - Beautiful, consistent icons
- **React Hot Toast** - Toast notifications for user feedback

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MohammadAshfaque/motioncraft.git
   cd motioncraft
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Animations

### 🎨 Gradients
- **Flowing Colors** - Smooth flowing linear gradient
- **Color Wave** - Horizontal wave gradient
- **Breathing Gradient** - Radial breathing effect
- **Morphing Gradient** - Gradient that morphs directions/colors
- **Sunset Glow** - Warm sunset gradient
- **Ocean Depths** - Deep ocean gradient
- **Forest Mist** - Mystical forest gradient
- **Desert Sand** - Warm desert gradient
- **Aurora Dream** - Dreamy aurora gradient

### 🔷 Geometry
- **Rotating Conic** - Rotating conic gradient
- **Kaleidoscope** - Kaleidoscope rotation/scale
- **Diagonal Sweep** - Diagonal sweeping bands
- **Gradient Mesh** - Radial corners over gradient
- **Fractal Growth** - Self-similar fractal pattern
- **Symmetry Mirror** - Perfect symmetry reflection
- **Tessellation** - Repeating geometric shapes
- **Polygon Shift** - Dynamic polygon transformation
- **Geometric Flow** - Flowing geometric forms

### ✨ Effects
- **Pulsing Orb** - Center orb pulsing
- **Radial Pulse** - Multiple radial pulses
- **Concentric Rings** - Scaling ring bands
- **Ripple Effect** - Expanding ripple center
- **Neon Glow** - Vivid neon glow shifts
- **Cyber Grid** - Animated cyber grid
- **Neon Pulse** - Vibrant neon pulsing effect
- **Energy Field** - Dynamic energy field
- **Magnetic Pull** - Magnetic attraction effect
- **Quantum Leap** - Quantum state transition
- **Time Warp** - Temporal distortion effect

### 🌿 Organic
- **Aurora Borealis** - Flowing aurora bands
- **Plasma Flow** - Organic plasma blobs
- **Liquid Motion** - Shifting liquid gradient with rounding
- **Ocean Waves** - Oceanic gradient with shimmer

### 🎭 Decorative
- **Floral Spiral** - Elegant floral spiral pattern
- **Geometric Mosaic** - Complex geometric mosaic
- **Artistic Brush** - Freehand artistic brush strokes
- **Vintage Texture** - Classic vintage texture pattern
- **Modern Dots** - Contemporary dot pattern
- **Elegant Lines** - Sophisticated line pattern
- **Cosmic Swirl** - Galactic swirl pattern
- **Nature Inspired** - Organic nature pattern

## Usage

1. **Browse Animations**: Scroll through the animation library
2. **Filter by Category**: Use the category buttons to filter by type
3. **Preview Animation**: Click the preview button to see as background
4. **Copy CSS**: Click the copy button to get the CSS code
5. **Exit Preview**: Click the X button to return to default background
6. **Toggle Favorites**: Star animations you like for quick access

## Project Structure

```
motioncraft/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Main page with pattern library
│   └── not-found.tsx        # 404 page
├── components/
│   ├── animation-card.tsx   # Individual animation card
│   └── category-filter.tsx  # Category navigation
├── lib/
│   ├── animations.ts        # Animation data
│   └── utils.ts             # Utility functions
├── LICENSE                  # MIT License
├── README.md                # Project documentation
└── package.json             # Dependencies and scripts
```

## Customization

### Adding New Animations

1. **Add animation data** to `lib/animations.ts`
2. **Add CSS classes** to `app/globals.css`
3. **Update animation card** if needed for special effects

### Styling

- **Colors** are defined in CSS custom properties
- **Animations** use Tailwind's animation utilities
- **Responsive design** with Tailwind breakpoints
- **Custom keyframes** for complex animations

## Deployment

The app can be deployed to Vercel, Netlify, or any other Next.js-compatible platform:

```bash
npm run build
npm start
```

## Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-animation`
3. **Add your animation** to the library
4. **Test thoroughly** to ensure it works
5. **Commit your changes**: `git commit -m 'Add amazing animation'`
6. **Push to the branch**: `git push origin feature/amazing-animation`
7. **Open a Pull Request**

### Contribution Guidelines

- **Follow existing code style** and patterns
- **Test animations** on different screen sizes
- **Add descriptions** for new animations
- **Ensure accessibility** for all users
- **Update documentation** if needed

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What MIT License Means

- ✅ **Free to use** - Anyone can use this code commercially or personally
- ✅ **Free to modify** - Adapt and change the code as needed
- ✅ **Free to distribute** - Share with others
- ✅ **Free to sell** - Use in commercial products
- ❌ **No warranty** - Use at your own risk
- 📝 **Attribution required** - Include the original license and copyright notice

### License Text

```
MIT License

Copyright (c) 2025 Mohammad Ashfaque

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Support

If you have questions or need help:

- 📧 **Create an issue** on GitHub
- 🐛 **Report bugs** with detailed descriptions
- 💡 **Request features** for new animations
- 📚 **Check documentation** for common questions

## Acknowledgments

- **Next.js team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Framer Motion** for smooth animations
- **Open source community** for inspiration and tools

---

**Made with ❤️ by Mohammad Ashfaque**

Feel free to use this project for your own applications, websites, or learning purposes!
