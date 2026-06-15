<script setup>
const centers = [
  {
    tag: 'Policy Brain',
    title: 'Strategic Thinking & Policy Analysis Center',
    body: 'An analytical platform for strategic policy development, assessment, and evaluation — supporting decision-making processes with research-based insights and data-driven analysis.',
    points: ['Policy development', 'Data-driven analysis', 'Decision support'],
    icon: 'M12 2 3 7v6c0 5 3.8 8.5 9 9 5.2-.5 9-4 9-9V7l-9-5Zm0 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z',
  },
  {
    tag: 'Foresight',
    title: 'Strategic Foresight & Early Warning Center',
    body: 'Identifies emerging opportunities, risks, and global trends related to artificial intelligence — developing risk-assessment models and early-warning mechanisms to anticipate challenges.',
    points: ['Trend identification', 'Risk-assessment models', 'Early warning'],
    icon: 'M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm9-5v5l3.5 2.1',
  },
  {
    tag: 'AI Governance',
    title: 'AI Governance Analysis Center',
    body: 'Develops and evaluates the political, legal, and ethical frameworks for artificial intelligence — an independent analytical body providing expert assessments in the field of AI governance.',
    points: ['Legal frameworks', 'Ethics & policy', 'Expert assessment'],
    icon: 'M12 3a4 4 0 0 1 4 4v1a4 4 0 0 1-2 7 4 4 0 0 1-8 0 4 4 0 0 1-2-7V7a4 4 0 0 1 4-4Zm0 0v18',
  },
]
</script>

<template>
  <section id="centers" class="section centers">
    <div class="container">
      <div class="centers-head">
        <p class="eyebrow on-ink" v-reveal>Centers &amp; Projects</p>
        <h2 class="section-title on-ink" v-reveal="80">Three centers. One strategic agenda.</h2>
        <p class="lead light" v-reveal="160">
          Our work is organized into specialized centers, each addressing a distinct dimension
          of strategic policy and AI governance.
        </p>
      </div>

      <div class="cards">
        <article v-for="(c, i) in centers" :key="c.tag" class="card" v-reveal="i * 120">
          <div class="icon">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round">
              <path :d="c.icon" />
            </svg>
          </div>
          <span class="tag">{{ c.tag }}</span>
          <h3>{{ c.title }}</h3>
          <p>{{ c.body }}</p>
          <ul>
            <li v-for="pt in c.points" :key="pt">{{ pt }}</li>
          </ul>
        </article>
      </div>

      <div class="more" v-reveal>
        <router-link to="/centers" class="btn btn-primary">
          Explore centers &amp; projects <span class="arrow">→</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.centers {
  background: var(--ink);
  color: var(--text-on-ink);
  position: relative;
  overflow: hidden;
}
.centers::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url('/bg/circuit.svg');
  opacity: 0.22;
  pointer-events: none;
  mask-image: radial-gradient(110% 100% at 100% 0%, #000 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(110% 100% at 100% 0%, #000 20%, transparent 70%);
}
.section-title.on-ink {
  color: var(--text-on-ink-strong);
}
.lead.light {
  color: var(--text-on-ink);
}
.centers-head {
  max-width: 720px;
  margin-bottom: 56px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid var(--line-ink);
  border-radius: var(--radius-lg);
  padding: 32px 28px 30px;
  transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease;
}
.card:hover {
  transform: translateY(-5px);
  border-color: var(--gold);
  background: linear-gradient(180deg, rgba(47, 143, 255, 0.12), rgba(255, 255, 255, 0.02));
}
.icon {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: var(--gold-bg);
  color: var(--gold-soft);
  margin-bottom: 20px;
}
.tag {
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--gold-soft);
}
.card h3 {
  color: var(--text-on-ink-strong);
  font-size: 1.32rem;
  margin: 10px 0 12px;
}
.card p {
  color: var(--text-on-ink);
  font-size: 0.96rem;
}
.card ul {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.card li {
  font-size: 0.9rem;
  color: var(--text-on-ink);
  padding-left: 22px;
  position: relative;
}
.card li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 9px;
  height: 9px;
  border: 1.5px solid var(--gold);
  border-radius: 50%;
}
.more {
  margin-top: 44px;
  text-align: center;
}
@media (max-width: 900px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
