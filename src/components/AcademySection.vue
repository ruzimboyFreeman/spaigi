<script setup>
const features = [
  {
    title: 'Policy Project',
    body: 'Evidence-based strategy and policy analysis for institutions.',
    icon: 'M4 19V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z M14 3v6h6',
  },
  {
    title: 'Research Engineer',
    body: 'Applied AI governance, data-driven analysis, and implementation support.',
    icon: 'M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83 M16.24 16.24l2.83 2.83 M2 12h4 M18 12h4 M4.93 19.07l2.83-2.83 M16.24 7.76l2.83-2.83 M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z',
  },
  {
    title: 'Cloud Integration',
    body: 'Responsible digital transformation and scalable public-sector workflows.',
    icon: 'M17.5 19H8a5 5 0 1 1 .9-9.92A7 7 0 0 1 22 12.5 4.5 4.5 0 0 1 17.5 19Z',
  },
  {
    title: 'AI Consultancy',
    body: 'Fast expert assessments, training, and governance recommendations.',
    icon: 'M7 8h10 M7 12h6 M5 20l3-3h9a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3',
  },
]
</script>

<template>
  <section id="academy" class="section academy">
    <div class="container">
      <div class="academy-head">
        <p class="eyebrow" v-reveal>Best Features For</p>
        <h2 class="section-title" v-reveal="80">
          How SPAIGI helps your institution grow and succeed.
        </h2>
      </div>

      <div class="feature-grid">
        <article v-for="(feature, i) in features" :key="feature.title" class="feature-card" v-reveal="i * 100">
          <span class="feature-icon">
            <svg viewBox="0 0 24 24" width="31" height="31" fill="none"
              stroke="currentColor" stroke-width="1.7" stroke-linecap="round"
              stroke-linejoin="round">
              <path :d="feature.icon" />
            </svg>
          </span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.academy {
  background:
    radial-gradient(circle at 0 10%, rgba(0, 95, 255, 0.42), transparent 28%),
    radial-gradient(circle at 100% 0, rgba(242, 91, 159, 0.34), transparent 34%),
    linear-gradient(125deg, #0046b6 0%, #142a8f 43%, #613290 74%, #9b3d91 100%);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  color: var(--text-on-ink);
}
.academy::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    url('/bg/world-dots.svg') no-repeat right -160px top -140px / 55%,
    url('/bg/circuit-light.svg') no-repeat left -180px bottom -120px / 42%;
  opacity: 0.28;
  pointer-events: none;
}
.academy-head {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 58px;
}
.academy .eyebrow {
  color: var(--pink);
}
.academy .section-title {
  color: var(--text-on-ink-strong);
  display: grid;
  margin-inline: auto;
  max-width: 16ch;
}
.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
.feature-card {
  position: relative;
  text-align: center;
  padding: 70px 24px 30px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
  min-height: 202px;
}
.feature-icon {
  position: absolute;
  top: -31px;
  left: 50%;
  transform: translateX(-50%);
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(145deg, #ff6ca9, #f24e94);
  border-radius: 21px;
  clip-path: polygon(50% 0, 94% 25%, 94% 75%, 50% 100%, 6% 75%, 6% 25%);
  box-shadow: 0 16px 32px rgba(242, 91, 159, 0.28);
}
.feature-card h3 {
  color: #fff;
  font-size: 1rem;
  margin-bottom: 12px;
}
.feature-card p {
  font-size: 0.9rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.76);
}
@media (max-width: 860px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px 20px;
  }
}
@media (max-width: 560px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
