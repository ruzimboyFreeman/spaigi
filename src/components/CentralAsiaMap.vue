<script setup>
// AI-motion network globe of Central Asia. Each state is a node, all linked to
// Uzbekistan (the hub). Nodes re-materialise on a loop ("paydo bo'lsin") while
// data packets stream along the links — an AI-website style motion.
const countries = [
  { id: 'kz', name: 'Kazakhstan', x: 232, y: 96 },
  { id: 'kg', name: 'Kyrgyzstan', x: 322, y: 196 },
  { id: 'tj', name: 'Tajikistan', x: 280, y: 312 },
  { id: 'tm', name: 'Turkmenistan', x: 118, y: 300 },
]
const uz = { name: 'Uzbekistan', x: 190, y: 232 }

// floating ambient particles (fixed for stability)
const particles = [
  { x: 90, y: 120, r: 1.6, d: 0 }, { x: 350, y: 110, r: 2.2, d: 1.2 },
  { x: 300, y: 70, r: 1.4, d: 0.6 }, { x: 130, y: 350, r: 2, d: 1.8 },
  { x: 380, y: 280, r: 1.5, d: 0.9 }, { x: 60, y: 240, r: 2.1, d: 2.4 },
  { x: 220, y: 40, r: 1.6, d: 1.5 }, { x: 400, y: 200, r: 1.3, d: 0.3 },
  { x: 70, y: 320, r: 1.7, d: 2.1 }, { x: 340, y: 350, r: 1.9, d: 1.1 },
  { x: 160, y: 80, r: 1.4, d: 2.7 }, { x: 250, y: 390, r: 1.6, d: 0.5 },
]

const pathFor = (c) => `path('M ${uz.x} ${uz.y} L ${c.x} ${c.y}')`
</script>

<template>
  <svg viewBox="0 0 440 440" class="ca-map" role="img"
    aria-label="AI network across Central Asia">
    <defs>
      <radialGradient id="caGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#2f8fff" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#2f8fff" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="caLine" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#6db8ff" />
        <stop offset="100%" stop-color="#2f8fff" />
      </linearGradient>
      <linearGradient id="caScan" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#6db8ff" stop-opacity="0" />
        <stop offset="100%" stop-color="#6db8ff" stop-opacity="0.28" />
      </linearGradient>
      <clipPath id="caClip"><circle cx="220" cy="220" r="170" /></clipPath>
    </defs>

    <!-- ambient glow -->
    <circle cx="220" cy="220" r="210" fill="url(#caGlow)" class="breathe" />

    <!-- rotating AI orbit rings -->
    <g class="orbit orbit-a">
      <ellipse cx="220" cy="220" rx="206" ry="80" fill="none"
        stroke="rgba(109, 184, 255,0.18)" stroke-width="1" />
    </g>
    <g class="orbit orbit-b">
      <ellipse cx="220" cy="220" rx="200" ry="74" fill="none"
        stroke="rgba(47, 143, 255,0.16)" stroke-width="1" />
    </g>

    <!-- globe + rotating scan sweep -->
    <g clip-path="url(#caClip)">
      <g class="scan">
        <path d="M220,220 L220,46 A174,174 0 0,1 392,168 Z" fill="url(#caScan)" />
      </g>
    </g>
    <circle cx="220" cy="220" r="170" fill="none" stroke="rgba(109, 184, 255,0.22)" stroke-width="1.2" />
    <ellipse cx="220" cy="220" rx="170" ry="64" fill="none" stroke="rgba(109, 184, 255,0.14)" stroke-width="1" />
    <ellipse cx="220" cy="220" rx="64" ry="170" fill="none" stroke="rgba(109, 184, 255,0.14)" stroke-width="1" />
    <line x1="50" y1="220" x2="390" y2="220" stroke="rgba(109, 184, 255,0.14)" stroke-width="1" />

    <!-- particles -->
    <g class="particles">
      <circle v-for="(p, i) in particles" :key="'p' + i" :cx="p.x" :cy="p.y" :r="p.r"
        fill="#6db8ff" :style="{ animationDelay: p.d + 's' }" />
    </g>

    <!-- connections (data flow) -->
    <g class="links">
      <line v-for="c in countries" :key="'l-' + c.id"
        :x1="uz.x" :y1="uz.y" :x2="c.x" :y2="c.y"
        stroke="url(#caLine)" stroke-width="1.6" stroke-opacity="0.55"
        stroke-dasharray="3 6" />
    </g>

    <!-- traveling AI data packets -->
    <circle v-for="(c, i) in countries" :key="'pk-' + c.id" r="3.2" fill="#d6e9ff"
      class="packet" :style="{ offsetPath: pathFor(c), animationDelay: i * 0.55 + 's' }" />

    <!-- neighbour nodes (re-materialise on a loop) -->
    <g v-for="(c, i) in countries" :key="c.id" class="node"
      :style="{ animationDelay: 0.4 + i * 0.5 + 's' }">
      <circle :cx="c.x" :cy="c.y" r="13" class="ping" fill="none"
        stroke="#6db8ff" stroke-width="1.2" :style="{ animationDelay: i * 0.5 + 's' }" />
      <circle :cx="c.x" :cy="c.y" r="11" fill="rgba(47, 143, 255,0.16)" />
      <circle :cx="c.x" :cy="c.y" r="5" fill="#6db8ff" />
      <text :x="c.x" :y="c.y - 18" class="lbl">{{ c.name }}</text>
    </g>

    <!-- Uzbekistan (hub) -->
    <g class="hub">
      <circle :cx="uz.x" :cy="uz.y" r="14" class="pulse" fill="none"
        stroke="#6db8ff" stroke-width="1.5" />
      <circle :cx="uz.x" :cy="uz.y" r="20" fill="rgba(47, 143, 255,0.2)" />
      <circle :cx="uz.x" :cy="uz.y" r="9" fill="#2f8fff" stroke="#d6e9ff" stroke-width="2" />
      <text :x="uz.x" :y="uz.y + 38" class="lbl hub-lbl">{{ uz.name }}</text>
    </g>
  </svg>
</template>

<style scoped>
.ca-map {
  width: 100%;
  height: 100%;
  display: block;
  background: transparent; /* blend into the hero background */
}
.lbl {
  fill: #c1ccd6;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-anchor: middle;
  letter-spacing: 0.02em;
}
.hub-lbl {
  fill: #6db8ff;
  font-size: 15px;
  font-weight: 700;
}

/* breathing glow */
.breathe {
  animation: breathe 5s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
@keyframes breathe {
  0%, 100% { opacity: 0.7; transform: scale(0.96); }
  50% { opacity: 1; transform: scale(1.04); }
}

/* AI orbit rings rotating around the globe */
.orbit {
  transform-box: fill-box;
  transform-origin: center;
}
.orbit-a {
  transform: rotate(28deg);
  animation: spin 18s linear infinite;
}
.orbit-b {
  transform: rotate(-34deg);
  animation: spin 24s linear infinite reverse;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* radar scan sweep */
.scan {
  transform-box: fill-box;
  transform-origin: 220px 220px;
  animation: sweep 6s linear infinite;
}
@keyframes sweep {
  to { transform: rotate(360deg); }
}

/* twinkling particles */
.particles circle {
  animation: twinkle 3.4s ease-in-out infinite;
}
@keyframes twinkle {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.9; }
}

/* data flow along links */
.links line {
  animation: dash 1.3s linear infinite;
}
@keyframes dash {
  to { stroke-dashoffset: -18; }
}

/* traveling data packets */
.packet {
  offset-rotate: 0deg;
  animation: travel 2.8s ease-in-out infinite;
}
@keyframes travel {
  0% { offset-distance: 0%; opacity: 0; }
  12% { opacity: 1; }
  88% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}

/* nodes re-materialise on a loop */
.node {
  transform-box: fill-box;
  transform-origin: center;
  animation: appear 9s ease-in-out infinite;
}
@keyframes appear {
  0% { opacity: 0; transform: scale(0.2); }
  10% { opacity: 1; transform: scale(1.12); }
  16% { transform: scale(1); }
  90% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.2); }
}

/* node ping ring */
.ping {
  transform-box: fill-box;
  transform-origin: center;
  animation: ping 2.6s ease-out infinite;
}
@keyframes ping {
  0% { transform: scale(0.6); opacity: 0.8; }
  70%, 100% { transform: scale(2.2); opacity: 0; }
}

/* hub pulse */
.pulse {
  transform-box: fill-box;
  transform-origin: center;
  animation: pulse 2.4s ease-out infinite;
}
@keyframes pulse {
  0% { transform: scale(1); opacity: 0.9; }
  70%, 100% { transform: scale(2.4); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .breathe, .orbit, .scan, .particles circle, .links line,
  .packet, .node, .ping, .pulse {
    animation: none;
  }
  .node { opacity: 1; transform: none; }
}
</style>
