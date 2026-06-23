<script setup>
const featured = {
  category: 'Research output',
  date: 'Peer-reviewed',
  title: '45+ publications and 2 authored books across AI policy and governance',
  excerpt:
    'Our researchers produce rigorous, evidence-based work — including SCI and Scopus-indexed papers — translating strategic analysis into practical recommendations for government institutions.',
}

const articles = [
  {
    category: 'AI Governance',
    title: 'Political, legal & ethical frameworks',
    excerpt: 'Expert assessments and policy guidance for responsible AI adoption.',
  },
  {
    category: 'Strategic Foresight',
    title: 'Risk models & early warning',
    excerpt: 'Identifying emerging AI-related opportunities, risks, and global trends.',
  },
  {
    category: 'Public Policy',
    title: 'Governance & digital government',
    excerpt: 'Data-driven analysis of governance reforms and policy effectiveness.',
  },
]
</script>

<template>
  <section id="research" class="section research">
    <div class="container">
      <div class="head">
        <div>
          <p class="eyebrow" v-reveal>Research &amp; Publications</p>
          <h2 class="section-title" v-reveal="80">Evidence that shapes decisions.</h2>
        </div>
        <router-link to="/research" class="btn btn-ghost see-all" v-reveal="120">
          All publications <span class="arrow">→</span>
        </router-link>
      </div>

      <div class="layout">
        <article class="feature" v-reveal>
          <div class="feature-body">
            <div class="meta">
              <span class="cat">{{ featured.category }}</span>
              <span class="dot">·</span>
              <span>{{ featured.date }}</span>
            </div>
            <h3>{{ featured.title }}</h3>
            <p>{{ featured.excerpt }}</p>
            <router-link to="/research" class="read">View publications <span class="arrow">→</span></router-link>
          </div>
        </article>

        <div class="list">
          <article
            v-for="(a, i) in articles"
            :key="a.title"
            class="item"
            v-reveal="i * 90"
          >
            <span class="cat">{{ a.category }}</span>
            <h4>{{ a.title }}</h4>
            <p>{{ a.excerpt }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.research {
  background: var(--paper);
  position: relative;
  overflow: hidden;
}
.research::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url('/bg/world-dots.svg') no-repeat right -160px top 50% / 68%;
  opacity: 0.14;
  pointer-events: none;
  mask-image: linear-gradient(90deg, transparent, #000 70%);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 70%);
}
.head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 50px;
}
.see-all {
  flex: none;
}
.layout {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 28px;
}
.feature {
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: linear-gradient(145deg, #1e2a78 0%, #3b5bff 52%, #8b5cf6 100%);
  color: var(--text-on-ink);
  display: flex;
  min-height: 380px;
  border: 1px solid transparent;
  box-shadow: var(--shadow);
}
.feature-body {
  padding: 42px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.82rem;
  color: var(--text-on-ink);
  margin-bottom: 16px;
}
.feature h3 {
  color: var(--text-on-ink-strong);
  font-size: clamp(1.5rem, 2.6vw, 2.1rem);
  line-height: 1.15;
}
.feature p {
  margin-top: 16px;
  color: var(--text-on-ink);
}
.cat {
  color: var(--gold-deep);
  font-weight: 700;
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.feature .cat {
  color: #dfe4ff;
}
.read {
  margin-top: 26px;
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-flex;
  gap: 8px;
}
.read:hover .arrow {
  transform: translateX(3px);
}
.arrow {
  transition: transform 0.18s ease;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.item {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 24px 26px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  flex: 1;
}
.item:hover {
  transform: translateX(4px);
  border-color: var(--gold-soft);
  box-shadow: var(--shadow);
}
.item h4 {
  font-family: var(--serif);
  font-size: 1.16rem;
  color: var(--text-strong);
  margin: 8px 0 6px;
  font-weight: 600;
}
.item p {
  color: var(--text-muted);
  font-size: 0.94rem;
}
@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .feature {
    min-height: 300px;
  }
  .see-all {
    display: none;
  }
}
</style>
