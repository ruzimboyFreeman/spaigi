<script setup>
const centers = [
  {
    tag: 'Policy Brain',
    title: 'Strategic Thinking & Policy Analysis Center',
    body: 'An analytical platform for strategic policy development, assessment, and evaluation — supporting decision-making processes with research-based insights and data-driven analysis.',
    points: ['Policy development', 'Data-driven analysis', 'Decision support'],
    icon: 'M12 2 3 7v6c0 5 3.8 8.5 9 9 5.2-.5 9-4 9-9V7l-9-5Zm0 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z',
    image: '/img/pub-innovation.jpg',
  },
  {
    tag: 'Foresight',
    title: 'Strategic Foresight & Early Warning Center',
    body: 'Identifies emerging opportunities, risks, and global trends related to artificial intelligence — developing risk-assessment models and early-warning mechanisms to anticipate challenges.',
    points: ['Trend identification', 'Risk-assessment models', 'Early warning'],
    icon: 'M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm9-5v5l3.5 2.1',
    image: '/img/pub-diplomacy.jpg',
  },
  {
    tag: 'AI Governance',
    title: 'AI Governance Analysis Center',
    body: 'Develops and evaluates the political, legal, and ethical frameworks for artificial intelligence — an independent analytical body providing expert assessments in the field of AI governance.',
    points: ['Legal frameworks', 'Ethics & policy', 'Expert assessment'],
    icon: 'M12 3a4 4 0 0 1 4 4v1a4 4 0 0 1-2 7 4 4 0 0 1-8 0 4 4 0 0 1-2-7V7a4 4 0 0 1 4-4Zm0 0v18',
    image: '/img/hero-bg.jpg',
  },
  {
    tag: 'Academy',
    title: 'Training & Professional Development',
    body: 'Hybrid courses, mentoring, international forums, and practical programs for the next generation of policy minds.',
    points: ['Courses', 'Mentoring', 'Forums'],
    icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z',
    image: '/img/academy-emblem.jpg',
  },
]
</script>

<template>
  <section id="centers" class="section centers">
    <div class="container">
      <div class="centers-head">
        <p class="eyebrow on-ink" v-reveal>Centers &amp; Projects</p>
        <h2 class="section-title on-ink" v-reveal="80">We offer a wide variety of policy and AI services.</h2>
        <p class="lead light" v-reveal="160">
          Our work is organized into specialized centers, each addressing a distinct dimension
          of strategic policy and AI governance.
        </p>
      </div>

      <div class="cards">
        <article
          v-for="(c, i) in centers"
          :key="c.tag"
          class="card"
          :class="{ featured: i === 2 }"
          :style="{ '--card-img': `url(${c.image})` }"
          v-reveal="i * 120"
        >
          <div class="icon">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round">
              <path :d="c.icon" />
            </svg>
          </div>
          <div class="card-copy">
            <span class="tag">{{ c.tag }}</span>
            <h3>{{ c.title }}</h3>
            <p>{{ c.body }}</p>
          </div>
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
  background: var(--paper);
  color: var(--text);
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
.centers::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url('/bg/world-dots.svg') no-repeat right -120px top -80px / 55%;
  opacity: 0.12;
  pointer-events: none;
  mask-image: radial-gradient(110% 100% at 100% 0%, #000 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(110% 100% at 100% 0%, #000 20%, transparent 70%);
}
.section-title.on-ink {
  color: var(--text-strong);
}
.lead.light {
  color: var(--text-muted);
}
.centers-head {
  max-width: 840px;
  margin-bottom: 56px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
.card {
  min-height: 310px;
  border: 0;
  border-radius: 8px;
  padding: 26px 24px;
  box-shadow: 0 14px 36px rgba(16, 37, 105, 0.16);
  background:
    linear-gradient(180deg, rgba(5, 17, 62, 0.06) 0%, rgba(11, 29, 95, 0.76) 70%, rgba(4, 18, 72, 0.96) 100%),
    var(--card-img) center / cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
}
.card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(140deg, rgba(61, 99, 216, 0.35), transparent 48%);
  opacity: 0;
  transition: opacity 0.22s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 48px rgba(16, 37, 105, 0.22);
}
.card:hover::before,
.card.featured::before {
  opacity: 1;
}
.icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  margin-bottom: 18px;
  position: relative;
  z-index: 1;
}
.card.featured .icon {
  background: #fff;
  color: var(--gold);
}
.card-copy {
  position: relative;
  z-index: 1;
}
.tag {
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.72);
}
.card h3 {
  color: #fff;
  font-size: 1.12rem;
  margin: 10px 0 12px;
  letter-spacing: -0.01em;
}
.card p {
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.9rem;
  line-height: 1.65;
}
.more {
  margin-top: 44px;
  text-align: center;
}
@media (max-width: 900px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 620px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
