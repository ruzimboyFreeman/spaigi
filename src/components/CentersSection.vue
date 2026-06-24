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
        <div class="head-title">
          <p class="eyebrow on-ink" v-reveal>Our Services</p>
          <h2 class="section-title on-ink" v-reveal="80">
            We offer a wide variety of policy and AI services.
          </h2>
        </div>
        <p class="lead light" v-reveal="160">
          We leverage proven research methods, regional expertise, and practical policy
          experience to support responsible AI governance.
        </p>
        <router-link to="/centers" class="btn btn-primary head-button" v-reveal="200">
          All Services <span class="arrow">→</span>
        </router-link>
      </div>

      <div class="services-row">
        <div class="cards">
          <article
            v-for="(c, i) in centers"
            :key="c.tag"
            class="card"
            :class="{ featured: i === 2 }"
            v-reveal="i * 120"
          >
            <img :src="c.image" :alt="c.title" class="card-image" />
            <span class="card-shade" aria-hidden="true"></span>

            <div v-if="i === 2" class="featured-panel">
              <div class="featured-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
                  stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path :d="c.icon" />
                </svg>
              </div>
              <h3>{{ c.tag }}</h3>
              <p>{{ c.body }}</p>
            </div>

            <div v-else class="card-caption">
              <div class="icon">
                <svg viewBox="0 0 24 24" width="25" height="25" fill="none"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path :d="c.icon" />
                </svg>
              </div>
              <h3>{{ c.tag }}</h3>
            </div>
          </article>
        </div>

        <div class="slider-controls" aria-label="Service navigation" v-reveal="320">
          <button type="button" aria-label="Next service">›</button>
          <button type="button" class="prev" aria-label="Previous service">‹</button>
        </div>
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
.centers .container {
  width: 1720px;
  max-width: 100%;
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
  display: grid;
  grid-template-columns: minmax(380px, 1.15fr) minmax(300px, 0.85fr) auto;
  gap: 54px;
  align-items: center;
  margin-bottom: 52px;
}
.head-title .section-title {
  max-width: 19ch;
}
.centers-head .lead {
  margin-top: 24px;
  max-width: 43ch;
}
.head-button {
  align-self: center;
}
.services-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 46px;
  gap: 18px;
  align-items: end;
  width: 100%;
  transform: none;
}
.cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}
.card {
  aspect-ratio: 1.28 / 1;
  min-height: 0;
  border: 0;
  border-radius: 8px;
  padding: 0;
  box-shadow: 0 14px 36px rgba(16, 37, 105, 0.16);
  color: #fff;
  position: relative;
  overflow: hidden;
  background: #dfe5f2;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}
.card-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.card-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(7, 22, 74, 0.02) 24%,
    rgba(20, 51, 132, 0.3) 58%,
    rgba(13, 39, 113, 0.96) 100%
  );
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 48px rgba(16, 37, 105, 0.22);
}
.card-caption {
  position: absolute;
  right: 22px;
  bottom: 24px;
  left: 22px;
  z-index: 2;
}
.icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  margin-bottom: 13px;
}
.card h3 {
  color: #fff;
  font-size: 1.04rem;
  margin: 0;
  letter-spacing: -0.01em;
}
.featured-panel {
  position: absolute;
  z-index: 3;
  right: 22px;
  bottom: 22px;
  left: 22px;
  padding: 25px 28px 24px;
  border-radius: 7px;
  background: #fff;
  color: var(--text);
  box-shadow: 0 16px 34px rgba(10, 26, 79, 0.2);
}
.featured-icon {
  color: var(--gold);
  margin-bottom: 14px;
}
.featured-panel h3 {
  color: var(--text-strong);
  font-size: 1.03rem;
  margin-bottom: 10px;
}
.featured-panel p {
  color: var(--text-muted);
  font-size: 0.86rem;
  line-height: 1.65;
}
.slider-controls {
  display: grid;
  gap: 8px;
}
.slider-controls button {
  width: 42px;
  height: 42px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: var(--gold);
  color: #fff;
  font: 700 1.5rem/1 var(--sans);
  cursor: pointer;
  box-shadow: var(--shadow-gold);
}
.slider-controls .prev {
  background: #fff;
  color: var(--text-muted);
  border-color: var(--line);
  box-shadow: var(--shadow-sm);
}
@media (max-width: 1050px) {
  .centers-head {
    grid-template-columns: 1fr 1fr;
  }
  .head-button {
    justify-self: start;
  }
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
  .card {
    aspect-ratio: 1.35 / 1;
  }
}
@media (max-width: 700px) {
  .centers-head {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .centers-head .lead {
    margin-top: 0;
  }
  .services-row {
    grid-template-columns: 1fr;
    width: 100%;
    transform: none;
  }
  .cards {
    grid-template-columns: 1fr;
  }
  .slider-controls {
    grid-template-columns: repeat(2, 42px);
    justify-content: end;
  }
}
</style>
