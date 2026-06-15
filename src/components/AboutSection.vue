<script setup>
const pillars = [
  {
    title: 'Mission',
    body: 'Conduct in-depth analysis of international and regional policy and study the opportunities and risks of AI within strategic governance — developing conceptual foundations, responsible implementation mechanisms, and evidence-based recommendations for government institutions.',
  },
  {
    title: 'Vision',
    body: 'Treat AI not merely as a technological innovation but as a strategic policy and governance tool — enhancing policy effectiveness by integrating AI into public administration and international cooperation frameworks.',
  },
  {
    title: 'Approach',
    body: 'The first institution in Uzbekistan and Central Asia with this integrated format — studying AI as a complex system interconnected with geopolitics, international relations, and public administration.',
  },
]
</script>

<template>
  <section id="about" class="section about">
    <div class="container about-grid">
      <div class="about-head">
        <p class="eyebrow" v-reveal>Who We Are</p>
        <h2 class="section-title" v-reveal="80">
          Bridging technological transformation and public governance.
        </h2>
        <p class="lead" v-reveal="160">
          The International Strategic Policy and AI Governance Institute (SPAIGI) is an
          independent, research- and practice-oriented policy think tank with government
          engagement, headquartered in Tashkent, Uzbekistan. SPAIGI was established to bridge
          the gap between technological transformation and public governance — providing
          rigorous research, strategic analysis, and practical policy solutions.
        </p>
      </div>

      <div class="pillars">
        <article
          v-for="(p, i) in pillars"
          :key="p.title"
          class="pillar"
          v-reveal="i * 100"
        >
          <span class="pillar-no">0{{ i + 1 }}</span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--paper);
  position: relative;
  overflow: hidden;
}
.about::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url('/bg/grid-dots.svg');
  opacity: 0.5;
  pointer-events: none;
  mask-image: radial-gradient(120% 100% at 50% 0%, #000 25%, transparent 75%);
  -webkit-mask-image: radial-gradient(120% 100% at 50% 0%, #000 25%, transparent 75%);
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  align-items: start;
}
.pillars {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.pillar {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 26px 28px;
  box-shadow: var(--shadow-sm);
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.pillar:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
  border-color: var(--gold-soft);
}
.pillar-no {
  font-family: var(--serif);
  font-size: 0.95rem;
  color: var(--gold-deep);
  font-weight: 600;
}
.pillar h3 {
  font-size: 1.4rem;
  margin: 6px 0 8px;
}
.pillar p {
  color: var(--text-muted);
  font-size: 0.98rem;
}
@media (max-width: 860px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
