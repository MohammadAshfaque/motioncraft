export interface AnimationPattern {
  id: string;
  title: string;
  description: string;
  category: string;
  bgClass: string;
  code: string;
  demoClass?: string;
}

export const animationPatterns: AnimationPattern[] = [
  // Smooth Gradient Animations
  { id: 'flowing-colors', title: 'Flowing Colors', description: 'Smooth flowing linear gradient', category: 'gradients', bgClass: 'flowing-colors', code: `/* Flowing Colors */
.flowing-colors {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24);
  background-size: 400% 400%;
  animation: flowingColors 4s ease infinite;
}
@keyframes flowingColors {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}` },
  { id: 'color-wave', title: 'Color Wave', description: 'Horizontal wave gradient', category: 'gradients', bgClass: 'color-wave', code: `/* Color Wave */
.color-wave {
  background: linear-gradient(90deg, #667eea, #764ba2, #667eea, #764ba2);
  background-size: 200% 100%;
  animation: colorWave 3s ease-in-out infinite;
}
@keyframes colorWave {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}` },
  { id: 'breathing-gradient', title: 'Breathing Gradient', description: 'Radial breathing effect', category: 'gradients', bgClass: 'breathing-gradient', code: `/* Breathing Gradient */
.breathing-gradient {
  background: radial-gradient(circle, #667eea 0%, #764ba2 100%);
  animation: breathe 2.5s ease-in-out infinite alternate;
}
@keyframes breathe {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.05); opacity: 1; }
}` },
  { id: 'morphing-gradient', title: 'Morphing Gradient', description: 'Gradient that morphs directions/colors', category: 'gradients', bgClass: 'morphing-gradient', code: `/* Morphing Gradient */
.morphing-gradient {
  background: linear-gradient(45deg, #667eea, #764ba2);
  animation: morphGradient 4s ease-in-out infinite;
}
@keyframes morphGradient {
  0% { background: linear-gradient(45deg, #667eea, #764ba2); }
  25% { background: linear-gradient(135deg, #ff6b6b, #feca57); }
  50% { background: linear-gradient(225deg, #48cae4, #023047); }
  75% { background: linear-gradient(315deg, #06ffa5, #0d7377); }
  100% { background: linear-gradient(45deg, #667eea, #764ba2); }
}` },

  // Geometric Patterns
  { id: 'rotating-conic', title: 'Rotating Conic', description: 'Rotating conic gradient', category: 'geometry', bgClass: 'rotating-conic', code: `/* Rotating Conic */
.rotating-conic {
  background: conic-gradient(from 0deg, #ff0080, #ff8c00, #40ff00, #00ff80, #0080ff, #8000ff, #ff0080);
  animation: rotateConic 3s linear infinite;
}
@keyframes rotateConic {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}` },
  { id: 'kaleidoscope', title: 'Kaleidoscope', description: 'Kaleidoscope rotation/scale', category: 'geometry', bgClass: 'kaleidoscope', code: `/* Kaleidoscope */
.kaleidoscope {
  background: conic-gradient(from 45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24, #667eea, #764ba2);
  animation: kaleidoscope 4s ease-in-out infinite;
}
@keyframes kaleidoscope {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
}` },
  { id: 'diagonal-sweep', title: 'Diagonal Sweep', description: 'Diagonal sweeping bands', category: 'geometry', bgClass: 'diagonal-sweep', code: `/* Diagonal Sweep */
.diagonal-sweep {
  background: linear-gradient(135deg, transparent 0%, #ff6b6b 20%, #4ecdc4 40%, #45b7d1 60%, #f9ca24 80%, transparent 100%);
  background-size: 300% 300%;
  animation: diagonalSweep 3s linear infinite;
}
@keyframes diagonalSweep {
  0% { background-position: -100% -100%; }
  100% { background-position: 200% 200%; }
}` },
  { id: 'gradient-mesh', title: 'Gradient Mesh', description: 'Radial corners over gradient', category: 'geometry', bgClass: 'gradient-mesh', code: `/* Gradient Mesh */
.gradient-mesh {
  background: 
    radial-gradient(circle at 0% 0%, #ff6b6b 0%, transparent 25%),
    radial-gradient(circle at 100% 0%, #4ecdc4 0%, transparent 25%),
    radial-gradient(circle at 0% 100%, #45b7d1 0%, transparent 25%),
    radial-gradient(circle at 100% 100%, #f9ca24 0%, transparent 25%),
    linear-gradient(45deg, #667eea, #764ba2);
  animation: gradientMesh 5s ease-in-out infinite;
}
@keyframes gradientMesh {
  0%, 100% { background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%; }
  50% { background-size: 150% 150%, 150% 150%, 150% 150%, 150% 150%, 100% 100%; }
}` },

  // Pulsing & Radial Effects
  { id: 'pulsing-orb', title: 'Pulsing Orb', description: 'Center orb pulsing', category: 'effects', bgClass: 'pulsing-orb', code: `/* Pulsing Orb */
.pulsing-orb {
  background: radial-gradient(circle at center, #ff6b6b 0%, #4ecdc4 30%, #45b7d1 60%, #1a1a2e 100%);
  animation: pulseOrb 2.5s ease-in-out infinite;
}
@keyframes pulseOrb {
  0%, 100% { background-size: 100% 100%; }
  50% { background-size: 200% 200%; }
}` },
  { id: 'radial-pulse', title: 'Radial Pulse', description: 'Multiple radial pulses', category: 'effects', bgClass: 'radial-pulse', code: `/* Radial Pulse */
.radial-pulse {
  background: radial-gradient(circle at 50% 50%, #ff6b6b 0%, transparent 50%), 
              radial-gradient(circle at 80% 20%, #4ecdc4 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, #45b7d1 0%, transparent 50%),
              #1a1a2e;
  animation: radialPulse 4s ease-in-out infinite;
}
@keyframes radialPulse {
  0%, 100% { 
    background: radial-gradient(circle at 50% 50%, #ff6b6b 0%, transparent 30%), 
               radial-gradient(circle at 80% 20%, #4ecdc4 0%, transparent 30%),
               radial-gradient(circle at 20% 80%, #45b7d1 0%, transparent 30%),
               #1a1a2e;
  }
  50% { 
    background: radial-gradient(circle at 50% 50%, #ff6b6b 0%, transparent 60%), 
               radial-gradient(circle at 80% 20%, #4ecdc4 0%, transparent 60%),
               radial-gradient(circle at 20% 80%, #45b7d1 0%, transparent 60%),
               #1a1a2e;
  }
}` },
  { id: 'concentric-rings', title: 'Concentric Rings', description: 'Scaling ring bands', category: 'effects', bgClass: 'concentric-rings', code: `/* Concentric Rings */
.concentric-rings {
  background: radial-gradient(circle, transparent 20%, #ff6b6b 20%, #ff6b6b 30%, transparent 30%, transparent 50%, #4ecdc4 50%, #4ecdc4 60%, transparent 60%);
  animation: concentricRings 3s ease-in-out infinite;
}
@keyframes concentricRings { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }` },
  { id: 'ripple-effect', title: 'Ripple Effect', description: 'Expanding ripple center', category: 'effects', bgClass: 'ripple-effect', code: `/* Ripple Effect */
.ripple-effect { background: radial-gradient(circle at center, #667eea 0%, transparent 40%); animation: ripple 2s ease-out infinite; }
@keyframes ripple { 0% { background-size: 0% 0%; opacity: 1; } 100% { background-size: 300% 300%; opacity: 0; } }` },

  // Futuristic & Neon Effects / Grids
  { id: 'neon-glow', title: 'Neon Glow', description: 'Vivid neon glow shifts', category: 'effects', bgClass: 'neon-glow', code: `/* Neon Glow */
.neon-glow { background: linear-gradient(45deg, #ff0080, #00ff80, #0080ff, #ff8000); background-size: 300% 300%; animation: neonGlow 3s ease-in-out infinite; box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.1); }
@keyframes neonGlow { 0%, 100% { background-position: 0% 50%; box-shadow: inset 0 0 50px rgba(255, 0, 128, 0.3), 0 0 30px rgba(255, 0, 128, 0.5); } 25% { background-position: 100% 0%; box-shadow: inset 0 0 50px rgba(0, 255, 128, 0.3), 0 0 30px rgba(0, 255, 128, 0.5); } 50% { background-position: 100% 100%; box-shadow: inset 0 0 50px rgba(0, 128, 255, 0.3), 0 0 30px rgba(0, 128, 255, 0.5); } 75% { background-position: 0% 100%; box-shadow: inset 0 0 50px rgba(255, 128, 0, 0.3), 0 0 30px rgba(255, 128, 0, 0.5); } }` },

  { id: 'cyber-grid', title: 'Cyber Grid', description: 'Animated cyber grid', category: 'grids', bgClass: 'cyber-grid', code: `/* Cyber Grid */
.cyber-grid { background: linear-gradient(90deg, transparent 0%, #00ff88 50%, transparent 100%), linear-gradient(0deg, transparent 0%, #0088ff 50%, transparent 100%), radial-gradient(circle at center, #1a1a2e 0%, #0a0a0f 100%); background-size: 50px 100%, 100% 50px, 100% 100%; animation: cyberGrid 4s linear infinite; }
@keyframes cyberGrid { 0% { background-position: 0% 0%, 0% 0%, 0% 0%; } 100% { background-position: 100% 0%, 0% 100%, 0% 0%; } }` },


  // Nature & Organic
  { id: 'aurora-borealis', title: 'Aurora Borealis', description: 'Flowing aurora bands', category: 'organic', bgClass: 'aurora', code: `/* Aurora Borealis */
.aurora { background: linear-gradient(45deg, rgba(0, 255, 150, 0.8) 0%, rgba(0, 150, 255, 0.8) 25%, rgba(150, 0, 255, 0.8) 50%, rgba(255, 0, 150, 0.8) 75%, rgba(0, 255, 150, 0.8) 100%); background-size: 300% 300%; animation: aurora 8s ease-in-out infinite; }
@keyframes aurora { 0%, 100% { background-position: 0% 0%; filter: hue-rotate(0deg); } 25% { background-position: 100% 0%; filter: hue-rotate(90deg); } 50% { background-position: 100% 100%; filter: hue-rotate(180deg); } 75% { background-position: 0% 100%; filter: hue-rotate(270deg); } }` },
  { id: 'plasma-flow', title: 'Plasma Flow', description: 'Organic plasma blobs', category: 'organic', bgClass: 'plasma-flow', code: `/* Plasma Flow */
.plasma-flow { background: radial-gradient(circle at 20% 80%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4ecdc4 0%, transparent 50%), radial-gradient(circle at 40% 40%, #45b7d1 0%, transparent 50%), radial-gradient(circle at 60% 60%, #f9ca24 0%, transparent 50%), #0a0a0a; animation: plasmaFlow 6s ease-in-out infinite; }
@keyframes plasmaFlow { 0%, 100% { background: radial-gradient(circle at 20% 80%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4ecdc4 0%, transparent 50%), radial-gradient(circle at 40% 40%, #45b7d1 0%, transparent 50%), radial-gradient(circle at 60% 60%, #f9ca24 0%, transparent 50%), #0a0a0a; } 33% { background: radial-gradient(circle at 80% 20%, #ff6b6b 0%, transparent 60%), radial-gradient(circle at 20% 80%, #4ecdc4 0%, transparent 60%), radial-gradient(circle at 60% 60%, #45b7d1 0%, transparent 60%), radial-gradient(circle at 40% 40%, #f9ca24 0%, transparent 60%), #0a0a0a; } 66% { background: radial-gradient(circle at 60% 60%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 40% 40%, #4ecdc4 0%, transparent 50%), radial-gradient(circle at 20% 80%, #45b7d1 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f9ca24 0%, transparent 50%), #0a0a0a; } }` },
  { id: 'liquid-motion', title: 'Liquid Motion', description: 'Shifting liquid gradient with rounding', category: 'organic', bgClass: 'liquid-motion', code: `/* Liquid Motion */
.liquid-motion { background: linear-gradient(45deg, #667eea 0%, #764ba2 25%, #ff6b6b 50%, #4ecdc4 75%, #45b7d1 100%); background-size: 400% 400%; animation: liquidMotion 6s ease-in-out infinite; }
@keyframes liquidMotion { 0% { background-position: 0% 50%; border-radius: 15px; } 33% { background-position: 100% 50%; border-radius: 50px 15px 50px 15px; } 66% { background-position: 0% 100%; border-radius: 15px 50px 15px 50px; } 100% { background-position: 0% 50%; border-radius: 15px; } }` },
  { id: 'ocean-waves', title: 'Ocean Waves', description: 'Oceanic gradient with shimmer', category: 'organic', bgClass: 'ocean-waves', code: `/* Ocean Waves */
.ocean-waves { background: linear-gradient(45deg, #1e3c72, #2a5298, #1e3c72, #2a5298); background-size: 400% 400%; animation: oceanWaves 4s ease-in-out infinite; position: relative; }
.ocean-waves::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at bottom, rgba(255,255,255,0.1) 0%, transparent 70%); animation: waveShimmer 3s ease-in-out infinite; }
@keyframes oceanWaves { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes waveShimmer { 0%, 100% { opacity: 0.3; transform: translateY(0%); } 50% { opacity: 0.8; transform: translateY(-20%); } }` },

  // Decorative Patterns
  { id: 'floral-spiral', title: 'Floral Spiral', description: 'Elegant floral spiral pattern', category: 'decorative', bgClass: 'floral-spiral', code: `/* Floral Spiral */
.floral-spiral { background: conic-gradient(from 0deg, #ff6b9d, #c44569, #f39c12, #e74c3c, #9b59b6, #3498db, #1abc9c, #ff6b9d); animation: floralSpiral 8s linear infinite; }
@keyframes floralSpiral { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }` },
  { id: 'geometric-mosaic', title: 'Geometric Mosaic', description: 'Complex geometric mosaic', category: 'decorative', bgClass: 'geometric-mosaic', code: `/* Geometric Mosaic */
.geometric-mosaic { background: linear-gradient(45deg, #ff6b6b 25%, transparent 25%), linear-gradient(-45deg, #4ecdc4 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #45b7d1 75%), linear-gradient(-45deg, transparent 75%, #f9ca24 75%); background-size: 60px 60px; animation: geometricMosaic 4s linear infinite; }
@keyframes geometricMosaic { 0% { background-position: 0 0, 30px 30px, 30px 30px, 0 0; } 100% { background-position: 60px 60px, 90px 90px, 90px 90px, 60px 60px; } }` },
  { id: 'artistic-brush', title: 'Artistic Brush', description: 'Freehand artistic brush strokes', category: 'decorative', bgClass: 'artistic-brush', code: `/* Artistic Brush */
.artistic-brush { background: radial-gradient(ellipse at 20% 80%, #ff6b6b 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #4ecdc4 0%, transparent 50%), radial-gradient(ellipse at 40% 40%, #45b7d1 0%, transparent 50%); animation: artisticBrush 6s ease-in-out infinite; }
@keyframes artisticBrush { 0%, 100% { background-size: 100% 100%, 100% 100%, 100% 100%; } 50% { background-size: 150% 150%, 150% 150%, 150% 150%; } }` },
  { id: 'vintage-texture', title: 'Vintage Texture', description: 'Classic vintage texture pattern', category: 'decorative', bgClass: 'vintage-texture', code: `/* Vintage Texture */
.vintage-texture { background: linear-gradient(45deg, #d4a574 25%, transparent 25%), linear-gradient(-45deg, #8b4513 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #cd853f 75%), linear-gradient(-45deg, transparent 75%, #daa520 75%); background-size: 40px 40px; animation: vintageTexture 5s linear infinite; }
@keyframes vintageTexture { 0% { background-position: 0 0, 20px 20px, 20px 20px, 0 0; } 100% { background-position: 40px 40px, 60px 60px, 60px 60px, 40px 40px; } }` },
  { id: 'modern-dots', title: 'Modern Dots', description: 'Contemporary dot pattern', category: 'decorative', bgClass: 'modern-dots', code: `/* Modern Dots */
.modern-dots { background: radial-gradient(circle at 25% 25%, #ff6b6b 2px, transparent 2px), radial-gradient(circle at 75% 75%, #4ecdc4 2px, transparent 2px), radial-gradient(circle at 50% 50%, #45b7d1 2px, transparent 2px); background-size: 50px 50px; animation: modernDots 3s ease-in-out infinite; }
@keyframes modernDots { 0%, 100% { background-size: 50px 50px; } 50% { background-size: 60px 60px; } }` },
  { id: 'elegant-lines', title: 'Elegant Lines', description: 'Sophisticated line pattern', category: 'decorative', bgClass: 'elegant-lines', code: `/* Elegant Lines */
.elegant-lines { background: repeating-linear-gradient(45deg, transparent, transparent 10px, #ff6b6b 10px, #ff6b6b 12px), repeating-linear-gradient(-45deg, transparent, transparent 10px, #4ecdc4 10px, #4ecdc4 12px); animation: elegantLines 4s linear infinite; }
@keyframes elegantLines { 0% { background-position: 0 0; } 100% { background-position: 24px 24px; } }` },
  { id: 'cosmic-swirl', title: 'Cosmic Swirl', description: 'Galactic swirl pattern', category: 'decorative', bgClass: 'cosmic-swirl', code: `/* Cosmic Swirl */
.cosmic-swirl { background: conic-gradient(from 0deg, #1a1a2e, #16213e, #0f3460, #533483, #1a1a2e); animation: cosmicSwirl 10s linear infinite; }
@keyframes cosmicSwirl { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }` },
  { id: 'nature-inspired', title: 'Nature Inspired', description: 'Organic nature pattern', category: 'decorative', bgClass: 'nature-inspired', code: `/* Nature Inspired */
.nature-inspired { background: radial-gradient(ellipse at 30% 70%, #2d5a27 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, #4a7c59 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, #6b8e23 0%, transparent 50%); animation: natureInspired 7s ease-in-out infinite; }
@keyframes natureInspired { 0%, 100% { background-size: 100% 100%, 100% 100%, 100% 100%; } 50% { background-size: 120% 120%, 120% 120%, 120% 120%; } }` },

  // Additional Effects
  { id: 'neon-pulse', title: 'Neon Pulse', description: 'Vibrant neon pulsing effect', category: 'effects', bgClass: 'neon-pulse', code: `/* Neon Pulse */
.neon-pulse { background: linear-gradient(45deg, #ff0080, #00ff80, #0080ff, #ff8000); background-size: 300% 300%; animation: neonPulse 3s ease-in-out infinite; box-shadow: 0 0 20px rgba(255, 0, 128, 0.5); }
@keyframes neonPulse { 0%, 100% { background-position: 0% 50%; box-shadow: 0 0 20px rgba(255, 0, 128, 0.5); } 50% { background-position: 100% 50%; box-shadow: 0 0 40px rgba(0, 255, 128, 0.8); } }` },
  { id: 'energy-field', title: 'Energy Field', description: 'Dynamic energy field', category: 'effects', bgClass: 'energy-field', code: `/* Energy Field */
.energy-field { background: radial-gradient(circle at center, #ff6b6b 0%, #4ecdc4 30%, #45b7d1 60%, transparent 100%); animation: energyField 4s ease-in-out infinite; }
@keyframes energyField { 0%, 100% { background-size: 100% 100%; opacity: 0.8; } 50% { background-size: 150% 150%; opacity: 1; } }` },
  { id: 'magnetic-pull', title: 'Magnetic Pull', description: 'Magnetic attraction effect', category: 'effects', bgClass: 'magnetic-pull', code: `/* Magnetic Pull */
.magnetic-pull { background: radial-gradient(ellipse at center, #667eea 0%, transparent 70%); animation: magneticPull 5s ease-in-out infinite; }
@keyframes magneticPull { 0%, 100% { background-size: 100% 100%; transform: scale(1); } 50% { background-size: 80% 80%; transform: scale(1.1); } }` },
  { id: 'quantum-leap', title: 'Quantum Leap', description: 'Quantum state transition', category: 'effects', bgClass: 'quantum-leap', code: `/* Quantum Leap */
.quantum-leap { background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24); background-size: 400% 400%; animation: quantumLeap 6s ease-in-out infinite; }
@keyframes quantumLeap { 0%, 100% { background-position: 0% 50%; filter: hue-rotate(0deg); } 50% { background-position: 100% 50%; filter: hue-rotate(180deg); } }` },
  { id: 'time-warp', title: 'Time Warp', description: 'Temporal distortion effect', category: 'effects', bgClass: 'time-warp', code: `/* Time Warp */
.time-warp { background: conic-gradient(from 0deg, #ff0080, #00ff80, #0080ff, #ff8000, #ff0080); animation: timeWarp 8s linear infinite; }
@keyframes timeWarp { 0% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(180deg) scale(1.2); } 100% { transform: rotate(360deg) scale(1); } }` },

  // Additional Geometric
  { id: 'fractal-growth', title: 'Fractal Growth', description: 'Self-similar fractal pattern', category: 'geometry', bgClass: 'fractal-growth', code: `/* Fractal Growth */
.fractal-growth { background: radial-gradient(circle at 25% 25%, #ff6b6b 0%, transparent 25%), radial-gradient(circle at 75% 75%, #4ecdc4 0%, transparent 25%), radial-gradient(circle at 50% 50%, #45b7d1 0%, transparent 25%); background-size: 100px 100px; animation: fractalGrowth 7s ease-in-out infinite; }
@keyframes fractalGrowth { 0%, 100% { background-size: 100px 100px; } 50% { background-size: 150px 150px; } }` },
  { id: 'symmetry-mirror', title: 'Symmetry Mirror', description: 'Perfect symmetry reflection', category: 'geometry', bgClass: 'symmetry-mirror', code: `/* Symmetry Mirror */
.symmetry-mirror { background: linear-gradient(45deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%); background-size: 200% 200%; animation: symmetryMirror 5s ease-in-out infinite; }
@keyframes symmetryMirror { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }` },
  { id: 'tessellation', title: 'Tessellation', description: 'Repeating geometric shapes', category: 'geometry', bgClass: 'tessellation', code: `/* Tessellation */
.tessellation { background: linear-gradient(45deg, #ff6b6b 25%, transparent 25%), linear-gradient(-45deg, #4ecdc4 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #45b7d1 75%), linear-gradient(-45deg, transparent 75%, #f9ca24 75%); background-size: 80px 80px; animation: tessellation 6s linear infinite; }
@keyframes tessellation { 0% { background-position: 0 0, 40px 40px, 40px 40px, 0 0; } 100% { background-position: 80px 80px, 120px 120px, 120px 120px, 80px 80px; } }` },
  { id: 'polygon-shift', title: 'Polygon Shift', description: 'Dynamic polygon transformation', category: 'geometry', bgClass: 'polygon-shift', code: `/* Polygon Shift */
.polygon-shift { background: conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24, #667eea, #ff6b6b); animation: polygonShift 9s linear infinite; }
@keyframes polygonShift { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }` },
  { id: 'geometric-flow', title: 'Geometric Flow', description: 'Flowing geometric forms', category: 'geometry', bgClass: 'geometric-flow', code: `/* Geometric Flow */
.geometric-flow { background: radial-gradient(ellipse at 20% 80%, #ff6b6b 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #4ecdc4 0%, transparent 50%), radial-gradient(ellipse at 40% 40%, #45b7d1 0%, transparent 50%); animation: geometricFlow 8s ease-in-out infinite; }
@keyframes geometricFlow { 0%, 100% { background-size: 100% 100%, 100% 100%, 100% 100%; } 50% { background-size: 130% 130%, 130% 130%, 130% 130%; } }` },

  // Additional Gradients
  { id: 'sunset-glow', title: 'Sunset Glow', description: 'Warm sunset gradient', category: 'gradients', bgClass: 'sunset-glow', code: `/* Sunset Glow */
.sunset-glow { background: linear-gradient(45deg, #ff6b35, #f7931e, #ffd23f, #ff6b35); background-size: 400% 400%; animation: sunsetGlow 6s ease-in-out infinite; }
@keyframes sunsetGlow { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }` },
  { id: 'ocean-depths', title: 'Ocean Depths', description: 'Deep ocean gradient', category: 'gradients', bgClass: 'ocean-depths', code: `/* Ocean Depths */
.ocean-depths { background: linear-gradient(45deg, #1e3c72, #2a5298, #1e3c72, #2a5298); background-size: 400% 400%; animation: oceanDepths 5s ease-in-out infinite; }
@keyframes oceanDepths { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }` },
  { id: 'forest-mist', title: 'Forest Mist', description: 'Mystical forest gradient', category: 'gradients', bgClass: 'forest-mist', code: `/* Forest Mist */
.forest-mist { background: linear-gradient(45deg, #2d5a27, #4a7c59, #6b8e23, #2d5a27); background-size: 400% 400%; animation: forestMist 7s ease-in-out infinite; }
@keyframes forestMist { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }` },
  { id: 'desert-sand', title: 'Desert Sand', description: 'Warm desert gradient', category: 'gradients', bgClass: 'desert-sand', code: `/* Desert Sand */
.desert-sand { background: linear-gradient(45deg, #d4a574, #8b4513, #cd853f, #daa520); background-size: 400% 400%; animation: desertSand 6s ease-in-out infinite; }
@keyframes desertSand { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }` },
  { id: 'aurora-dream', title: 'Aurora Dream', description: 'Dreamy aurora gradient', category: 'gradients', bgClass: 'aurora-dream', code: `/* Aurora Dream */
.aurora-dream { background: linear-gradient(45deg, #ff6b9d, #c44569, #f39c12, #e74c3c, #9b59b6, #3498db, #1abc9c, #ff6b9d); background-size: 400% 400%; animation: auroraDream 8s ease-in-out infinite; }
@keyframes auroraDream { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }` },
];

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'gradients', name: 'Gradients' },
  { id: 'geometry', name: 'Geometry' },
  { id: 'effects', name: 'Pulsing & Effects' },
  { id: 'grids', name: 'Lines & Grids' },
  { id: 'particles', name: 'Particles' },
  { id: 'organic', name: 'Nature & Organic' },
];
