<script setup>
const leadership = [
  {
    name: 'Ms. Dildora Omonova',
    role: 'Head of Academy · Co-founder',
    photo: '/img/team-dildora.jpg',
    notes: [
      'President’s State Prize Winner “Nihol 2015”',
      'BA & MA in Academic Vocal, Uzbekistan State Conservatory',
      'Languages: Russian, English, Korean, Arabic',
    ],
    email: 'contact@spaigi.org',
  },
  {
    name: 'Ms. Mehrangiz Samadova',
    role: 'Researcher-Assistant · Secretariat of the Academy',
    photo: '/img/team-mehrangiz.jpg',
    notes: [
      'English Language Tutor',
      'BA in Philology & Teaching Languages, Uzbekistan State World Languages University',
      'Languages: English, Turkish, Hindi',
    ],
    email: 'contact@spaigi.org',
  },
]

const blocks = [
  {
    no: '01',
    title: 'For Public & Private Sector Employees',
    courses: [
      'The Role & Effectiveness of Emerging Technologies in Governance and Business',
      'AI Policy and Governance · Emotional Intelligence',
      'Soft Skills — effective negotiations, communication and more',
      'Other professional development programs',
    ],
  },
  {
    no: '02',
    title: 'For University Students & Youth',
    courses: [
      'AI Coding & Development · Digital Skills',
      'Soft Skills — effective negotiations, communication and more',
      'Foreign Language Programs & Services',
      'Other professional development programs',
    ],
  },
]

const approach = [
  {
    title: 'Modular & interactive learning',
    desc: 'Hands-on, practice-oriented, and flexible programs that adapt to participants’ needs.',
  },
  {
    title: 'Personalized attention',
    desc: 'Group sessions ensure individualized support and effective mastery of in-demand skills.',
  },
  {
    title: 'Expert instructors',
    desc: 'Courses delivered by industry professionals and experienced educators.',
  },
  {
    title: 'Hybrid format',
    desc: 'Both online and offline learning. On request, programs run in English and Uzbek.',
  },
]
</script>

<template>
  <main class="academy-page">
    <!-- page hero -->
    <section class="page-hero">
      <div class="grid-bg" aria-hidden="true"></div>
      <div class="glow" aria-hidden="true"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="eyebrow on-ink" v-reveal>SPAIGI Academy</p>
          <h1 class="page-title" v-reveal="80">Academy for Perspective Professions</h1>
          <p class="page-intro" v-reveal="160">
            Part of SPAIGI’s long-term mission of investing in the future and nurturing the
            next generation of leaders and professionals. The APP is a dynamic educational
            center training public servants, private-sector employees, university students,
            and youth — building modern professional skills, innovative thinking, leadership
            capacity, and strong social competencies for a rapidly evolving labor market.
          </p>
        </div>
        <div class="hero-badge" v-reveal="200">
          <img src="/img/academy-emblem.jpg" alt="Academy for Perspective Professions emblem" />
        </div>
      </div>
    </section>

    <!-- leadership -->
    <section class="lead-sec">
      <div class="container">
        <p class="eyebrow" v-reveal>Leadership</p>
        <h2 class="sec-title" v-reveal="80">The team behind the Academy.</h2>
        <div class="lead-grid">
          <article v-for="(m, i) in leadership" :key="m.name" class="lead-card" v-reveal="i * 100">
            <img :src="m.photo" :alt="m.name" class="avatar" />
            <div class="lead-info">
              <h3>{{ m.name }}</h3>
              <p class="role">{{ m.role }}</p>
              <ul>
                <li v-for="n in m.notes" :key="n">{{ n }}</li>
              </ul>
              <a :href="`mailto:${m.email}`" class="mail">{{ m.email }}</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- programs -->
    <section class="programs">
      <div class="container">
        <p class="eyebrow" v-reveal>Programs</p>
        <h2 class="sec-title" v-reveal="80">Two learning blocks.</h2>
        <div class="prog-grid">
          <article v-for="(b, i) in blocks" :key="b.no" class="prog" v-reveal="i * 120">
            <span class="no">{{ b.no }}</span>
            <h3>{{ b.title }}</h3>
            <ul>
              <li v-for="c in b.courses" :key="c">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                  stroke="currentColor" stroke-width="2.2" stroke-linecap="round"
                  stroke-linejoin="round"><path d="m5 12 4.5 4.5L19 7" /></svg>
                {{ c }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- approach -->
    <section class="approach">
      <div class="container">
        <p class="eyebrow on-ink" v-reveal>Our approach</p>
        <h2 class="sec-title on-ink" v-reveal="80">How we teach.</h2>
        <div class="app-grid">
          <article v-for="(a, i) in approach" :key="a.title" class="app-card" v-reveal="i * 90">
            <h4>{{ a.title }}</h4>
            <p>{{ a.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- cta -->
    <section class="cta-band">
      <div class="container cta-inner" v-reveal>
        <div>
          <h2>Explore the professions of the future.</h2>
          <p>Contact us today to begin — or request the detailed list of our training programs.</p>
        </div>
        <a href="mailto:contact@spaigi.org?subject=SPAIGI%20Academy%20programs" class="btn btn-primary">
          Contact the Academy <span class="arrow">→</span>
        </a>
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
  padding: 168px 0 88px;
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
  background: radial-gradient(circle, rgba(195, 244, 153, 0.3), transparent 65%);
  filter: blur(20px);
  z-index: -1;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1.6fr 0.9fr;
  gap: 50px;
  align-items: center;
}
.page-title {
  font-family: var(--serif);
  font-weight: 600;
  font-size: clamp(2.1rem, 4.6vw, 3.4rem);
  color: var(--text-on-ink-strong);
  margin: 18px 0 0;
  letter-spacing: -0.01em;
}
.page-intro {
  margin-top: 22px;
  font-size: 1.08rem;
  color: var(--text-on-ink);
  max-width: 64ch;
}
.hero-badge {
  display: flex;
  justify-content: center;
}
.hero-badge img {
  width: 100%;
  max-width: 300px;
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 22px;
  box-shadow: var(--shadow);
}

/* ---- shared ---- */
.sec-title {
  font-family: var(--serif);
  font-weight: 600;
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  margin: 16px 0 40px;
  color: var(--text-strong);
}
.sec-title.on-ink {
  color: var(--text-on-ink-strong);
}

/* ---- leadership ---- */
.lead-sec {
  background: var(--paper);
  padding-block: 90px;
  position: relative;
  overflow: hidden;
}
.lead-sec::before {
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
.lead-sec .container {
  position: relative;
  z-index: 1;
}
.lead-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}
.lead-card {
  display: flex;
  gap: 22px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 28px 28px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.lead-card:hover {
  transform: translateY(-4px);
  border-color: var(--gold-soft);
  box-shadow: var(--shadow);
}
.avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
  flex: none;
  background: var(--paper-2);
}
.lead-info h3 {
  font-size: 1.25rem;
}
.lead-info .role {
  color: var(--gold-deep);
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 3px;
}
.lead-info ul {
  list-style: none;
  margin: 14px 0 14px;
  padding: 0;
  display: grid;
  gap: 6px;
}
.lead-info li {
  font-size: 0.9rem;
  color: var(--text-muted);
  padding-left: 16px;
  position: relative;
}
.lead-info li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
}
.mail {
  color: var(--gold-deep);
  font-weight: 600;
  font-size: 0.9rem;
  border-bottom: 1px solid transparent;
  transition: border-color 0.18s ease;
}
.mail:hover {
  border-color: var(--gold-deep);
}

/* ---- programs ---- */
.programs {
  background: var(--paper-2);
  border-block: 1px solid var(--line);
  padding-block: 90px;
}
.prog-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}
.prog {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 34px 32px;
  box-shadow: var(--shadow-sm);
}
.prog .no {
  font-family: var(--serif);
  font-size: 2rem;
  font-weight: 600;
  color: var(--gold);
  line-height: 1;
}
.prog h3 {
  font-size: 1.3rem;
  margin: 12px 0 20px;
}
.prog ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 13px;
}
.prog li {
  display: flex;
  gap: 12px;
  font-size: 0.98rem;
  color: var(--text-strong);
  line-height: 1.45;
}
.prog svg {
  flex: none;
  margin-top: 3px;
  color: var(--gold-deep);
  background: var(--gold-bg);
  border-radius: 50%;
  padding: 4px;
  width: 26px;
  height: 26px;
}

/* ---- approach ---- */
.approach {
  background: var(--ink);
  color: var(--text-on-ink);
  padding-block: 90px;
  position: relative;
  overflow: hidden;
}
.approach::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: url('/bg/neural.svg');
  opacity: 0.22;
  pointer-events: none;
  mask-image: radial-gradient(120% 110% at 100% 0%, #000 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(120% 110% at 100% 0%, #000 20%, transparent 70%);
}
.approach .container {
  position: relative;
  z-index: 1;
}
.app-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.app-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid var(--line-ink);
  border-radius: var(--radius);
  padding: 26px 22px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.app-card:hover {
  transform: translateY(-4px);
  border-color: var(--gold);
}
.app-card h4 {
  font-family: var(--serif);
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-on-ink-strong);
  margin: 0 0 8px;
}
.app-card p {
  font-size: 0.9rem;
  color: var(--text-on-ink);
}

/* ---- cta ---- */
.cta-band {
  background: var(--paper-2);
  border-top: 1px solid var(--line);
  padding-block: 64px;
}
.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
.cta-inner h2 {
  font-size: clamp(1.5rem, 2.6vw, 2rem);
}
.cta-inner p {
  margin-top: 8px;
  color: var(--text-muted);
  max-width: 52ch;
}

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .hero-badge img {
    max-width: 220px;
  }
  .lead-grid,
  .prog-grid {
    grid-template-columns: 1fr;
  }
  .app-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 560px) {
  .app-grid {
    grid-template-columns: 1fr;
  }
  .lead-card {
    flex-direction: column;
  }
  .cta-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
