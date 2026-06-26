<script setup>
const partners = [
  'Governments',
  'International organizations',
  'Development agencies',
  'Academic institutions',
]

const areas = [
  {
    title: 'Strategic policy analysis & advisory',
    icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2',
  },
  {
    title: 'Geopolitical & regional studies',
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.5 2.6 2.5 15.4 0 18M3 12h18',
  },
  {
    title: 'AI policy, ethics & governance frameworks',
    icon: 'M12 3a4 4 0 0 1 4 4v1a4 4 0 0 1-2 7 4 4 0 0 1-8 0 4 4 0 0 1-2-7V7a4 4 0 0 1 4-4Zm0 0v18',
  },
  {
    title: 'Digital government & public-service transformation',
    icon: 'M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M15 9h.01M15 13h.01',
  },
  {
    title: 'Data-driven research, analytics & evidence-based policy',
    icon: 'M4 19V5M4 19h16M8 19v-6M12 19V9M16 19v-9',
  },
]
</script>

<template>
  <main class="collab-page">
    <!-- page hero -->
    <section class="page-hero">
      <div class="grid-bg" aria-hidden="true"></div>
      <div class="glow" aria-hidden="true"></div>
      <div class="container">
        <p class="eyebrow on-ink" v-reveal>Collaboration &amp; Partnership</p>
        <h1 class="page-title" v-reveal="80">Let’s build the future, together.</h1>
        <p class="page-intro" v-reveal="160">
          We welcome strategic collaboration with governments, international organizations,
          development agencies, and academic institutions — co-developing impactful research,
          innovative policy solutions, and capacity-building initiatives for sustainable
          development and digital transformation.
        </p>
        <div class="partners" v-reveal="220">
          <span v-for="p in partners" :key="p" class="partner">{{ p }}</span>
        </div>
      </div>
    </section>

    <!-- areas of cooperation -->
    <section class="areas-sec">
      <div class="container">
        <p class="eyebrow" v-reveal>Areas of cooperation</p>
        <h2 class="sec-title" v-reveal="80">Where we work with partners.</h2>
        <div class="areas-grid">
          <article v-for="(a, i) in areas" :key="a.title" class="area" v-reveal="i * 80">
            <div class="icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
                stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                stroke-linejoin="round"><path :d="a.icon" /></svg>
            </div>
            <h3>{{ a.title }}</h3>
          </article>
        </div>
        <p class="note" v-reveal>
          We are also open to <strong>interdisciplinary and cross-sector collaboration</strong>
          aligned with the Institute’s broader strategic priorities.
        </p>
      </div>
    </section>

    <!-- partnership & sponsorship -->
    <section class="partnership">
      <div class="container partnership-grid">
        <div class="p-copy">
          <p class="eyebrow" v-reveal>Partners &amp; sponsors</p>
          <h2 class="sec-title" v-reveal="80">Scale our mission — regionally &amp; globally.</h2>
          <p class="lead" v-reveal="160">
            We seek strategic partners and sponsors to support our research, policy analysis,
            and educational initiatives in AI governance and strategic policy. SPAIGI develops
            knowledge-based solutions, convenes expert forums, and publishes impactful policy
            recommendations through collaborative efforts.
          </p>
          <p class="lead" v-reveal="200">
            We welcome <strong>partnership proposals</strong>, <strong>joint project
            development</strong>, and <strong>funding support</strong> to scale our mission
            regionally and globally.
          </p>
          <div class="p-cta" v-reveal="240">
            <router-link :to="{ path: '/', hash: '#contact' }" class="btn btn-primary">
              Explore partnership <span class="arrow">→</span>
            </router-link>
            <router-link :to="{ path: '/', hash: '#contact' }" class="btn btn-ghost">Become a partner</router-link>
          </div>
        </div>
        <aside class="p-visual" v-reveal="120">
          <img src="/img/collab-logo.jpg" alt="International Strategic Policy and AI Governance Institute" />
          <p>An independent think tank — Tashkent, Uzbekistan &amp; Central Asia.</p>
        </aside>
      </div>
    </section>

    <!-- cta -->
    <section class="cta-band">
      <div class="container cta-inner" v-reveal>
        <div>
          <h2>Let’s work together.</h2>
          <p>
            Have a proposal or collaboration project within the mission of SPAIGI? Get in
            touch — or donate now and become a partner.
          </p>
        </div>
        <router-link :to="{ path: '/', hash: '#contact' }" class="btn btn-primary">
          Get in touch <span class="arrow">→</span>
        </router-link>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ---- page hero ---- */
.page-hero {
  position: relative;
  background: radial-gradient(120% 120% at 80% 0%, var(--ink-3) 0%, var(--ink) 55%);
  color: var(--text-on-ink);
  padding: 170px 0 90px;
  overflow: hidden;
  isolation: isolate;
}
.grid-bg {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(120% 90% at 50% 10%, #000 30%, transparent 80%);
  z-index: -1;
}
.glow {
  position: absolute;
  top: -160px;
  right: -120px;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(59, 91, 255, 0.3), transparent 65%);
  filter: blur(20px);
  z-index: -1;
}
.page-title {
  font-family: var(--serif);
  font-weight: 600;
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  color: var(--text-on-ink-strong);
  margin: 18px 0 0;
  letter-spacing: -0.01em;
}
.page-intro {
  margin-top: 22px;
  font-size: 1.1rem;
  color: var(--text-on-ink);
  max-width: 70ch;
}
.partners {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.partner {
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--gold-soft);
  background: var(--gold-bg);
  border: 1px solid rgba(125, 146, 255, 0.25);
  border-radius: 999px;
  padding: 7px 16px;
}

/* ---- shared ---- */
.sec-title {
  font-family: var(--serif);
  font-weight: 600;
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  margin: 16px 0 40px;
  color: var(--text-strong);
}

/* ---- areas ---- */
.areas-sec {
  background: var(--paper);
  padding-block: 90px;
  position: relative;
  overflow: hidden;
}
.areas-sec::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: url('/bg/grid-dots.svg');
  opacity: 0.5;
  pointer-events: none;
  mask-image: radial-gradient(120% 100% at 50% 0%, #000 25%, transparent 75%);
  -webkit-mask-image: radial-gradient(120% 100% at 50% 0%, #000 25%, transparent 75%);
}
.areas-sec .container {
  position: relative;
  z-index: 1;
}
.areas-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}
.area {
  display: flex;
  align-items: center;
  gap: 18px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 26px 26px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.area:hover {
  transform: translateY(-4px);
  border-color: var(--gold-soft);
  box-shadow: var(--shadow);
}
.icon {
  width: 52px;
  height: 52px;
  flex: none;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: var(--gold-bg);
  color: var(--gold-deep);
}
.area h3 {
  font-size: 1.05rem;
  line-height: 1.3;
  color: var(--text-strong);
}
.note {
  margin-top: 30px;
  font-size: 1.02rem;
  color: var(--text-muted);
  max-width: 76ch;
}
.note strong {
  color: var(--text-strong);
}

/* ---- partnership ---- */
.partnership {
  background: var(--paper-2);
  border-block: 1px solid var(--line);
  padding-block: 90px;
}
.partnership-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 56px;
  align-items: center;
}
.lead {
  font-size: 1.05rem;
  color: var(--text-muted);
  margin-bottom: 18px;
  max-width: 64ch;
}
.lead strong {
  color: var(--text-strong);
}
.p-cta {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.p-visual {
  text-align: center;
}
.p-visual img {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  display: block;
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow);
}
.p-visual p {
  margin-top: 16px;
  font-size: 0.88rem;
  color: var(--text-muted);
}

/* ---- cta ---- */
.cta-band {
  background: var(--ink);
  color: var(--text-on-ink);
  padding-block: 64px;
  position: relative;
  overflow: hidden;
}
.cta-band::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: url('/bg/neural.svg');
  opacity: 0.2;
  pointer-events: none;
  mask-image: radial-gradient(120% 110% at 100% 0%, #000 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(120% 110% at 100% 0%, #000 20%, transparent 70%);
}
.cta-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
.cta-inner h2 {
  font-size: clamp(1.5rem, 2.6vw, 2rem);
  color: var(--text-on-ink-strong);
  font-family: var(--serif);
  font-weight: 600;
}
.cta-inner p {
  margin-top: 8px;
  color: var(--text-on-ink);
  max-width: 56ch;
}

@media (max-width: 900px) {
  .areas-grid {
    grid-template-columns: 1fr;
  }
  .partnership-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .cta-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
