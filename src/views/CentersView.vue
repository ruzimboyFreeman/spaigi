<script setup>
const centers = [
  {
    no: '01',
    tag: 'Geopolitics',
    name: 'Center for Strategic Policy & Geopolitics',
    desc: 'Conducts in-depth research and strategic analysis of emerging geopolitical, security, and technological trends shaping international relations. The Center examines the growing intersection between geopolitics and digital technologies — how technological advances reshape global power dynamics, security environments, and international cooperation — supporting governments, international organizations, and regional stakeholders in developing forward-looking strategies for global stability, technological governance, and regional cooperation.',
    activities: [
      'Strategic assessments of geopolitical and technological risks affecting regional stability.',
      'Evidence-based policy analysis on AI governance, international technology regulation, and digital sovereignty.',
      'Strategic foresight and scenario planning on emerging technologies and security challenges.',
      'Regional and international policy dialogues, expert consultations, and strategic forums.',
      'Data-driven analysis of geopolitical, technological, and economic trends influencing global governance.',
    ],
    projects: [
      {
        title: 'AI Risk Outlook for Central Asia',
        desc: 'Strategic assessment of geopolitical and security risks associated with AI development and deployment in the region.',
      },
      {
        title: 'Comparative Study of Global AI Governance Frameworks',
        desc: 'Analysis of regulatory approaches across major economies and international organizations.',
      },
      {
        title: 'Technology & Security Early-Warning System',
        desc: 'Policy recommendations for addressing technology-driven security threats and geopolitical disruptions.',
      },
    ],
  },
  {
    no: '02',
    tag: 'AI Governance',
    name: 'Center for AI Policy & Governance',
    desc: 'Focuses on AI governance, digital government, and data policy. The Center examines how AI technologies can enhance government effectiveness, public service delivery, and institutional transparency — while ensuring ethical, legal, and accountable use of emerging technologies. It supports governments and public institutions in building AI-ready governance systems, strengthening regulatory frameworks, and developing human capacity for digital transformation.',
    activities: [
      'Research on AI governance, digital government, and data policy systems.',
      'Assessing AI’s impact on public service delivery, governance efficiency, and institutional accountability.',
      'Helping governments reduce risks using AI and data analytics; digitizing governance in emerging markets.',
      'Developing ethical guidelines and regulatory frameworks for responsible AI use in government.',
      'Designing capacity-building and training programs for civil servants on AI governance and digital innovation.',
      'Implementing pilot projects and policy experiments on AI-enabled public sector solutions.',
    ],
    projects: [
      {
        title: 'AI Readiness Assessment for Public Institutions',
        desc: 'Evaluation of technological, organizational, and regulatory preparedness for AI adoption.',
      },
      {
        title: 'Framework for Ethical AI in Public Administration',
        desc: 'Governance principles and policy guidelines for responsible AI deployment in government.',
      },
      {
        title: 'Evaluation of AI Chatbots in Public Service Delivery',
        desc: 'Empirical assessment of chatbot-based services for citizen engagement and administrative efficiency.',
      },
    ],
  },
]
</script>

<template>
  <main class="centers-page">
    <!-- page hero -->
    <section class="page-hero">
      <div class="grid-bg" aria-hidden="true"></div>
      <div class="glow" aria-hidden="true"></div>
      <div class="container">
        <p class="eyebrow on-ink" v-reveal>Centers &amp; Projects</p>
        <h1 class="page-title" v-reveal="80">Where strategy, AI, and governance meet.</h1>
        <p class="page-intro" v-reveal="160">
          SPAIGI is an independent research and policy institution focused on the intersection
          of geopolitics, artificial intelligence, digital governance, and public sector
          transformation — with particular attention to Central Asia and beyond. The Institute
          operates through its research centers and academy.
        </p>
      </div>
    </section>

    <!-- centers -->
    <section
      v-for="(c, i) in centers"
      :key="c.no"
      class="center"
      :class="{ alt: i % 2 === 1 }"
    >
      <div class="container">
        <div class="center-head" v-reveal>
          <span class="no">{{ c.no }}</span>
          <div>
            <span class="eyebrow">{{ c.tag }}</span>
            <h2>{{ c.name }}</h2>
          </div>
        </div>
        <p class="desc" v-reveal="80">{{ c.desc }}</p>

        <div class="cols">
          <div class="activities" v-reveal="120">
            <h3>Key activities</h3>
            <ul>
              <li v-for="a in c.activities" :key="a">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                  stroke="currentColor" stroke-width="2.2" stroke-linecap="round"
                  stroke-linejoin="round"><path d="m5 12 4.5 4.5L19 7" /></svg>
                {{ a }}
              </li>
            </ul>
          </div>

          <div class="projects">
            <h3 v-reveal="120">Example projects</h3>
            <article v-for="(p, j) in c.projects" :key="p.title" class="project"
              v-reveal="160 + j * 80">
              <span class="p-no">P{{ j + 1 }}</span>
              <div>
                <h4>{{ p.title }}</h4>
                <p>{{ p.desc }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- academy / training -->
    <section class="academy-band">
      <div class="container academy-inner">
        <div v-reveal>
          <span class="no light">03</span>
          <h2>Training Programs through the Academy</h2>
          <p>
            SPAIGI also offers internships and training programs through its
            <strong>Academy for Perspective Professions (APP)</strong> — developing skills for
            future-oriented fields such as digital transformation and emerging technologies,
            including AI, emotional intelligence, project management, data analysis, soft
            skills, and oratory — training a new generation of professionals with strategic
            knowledge.
          </p>
          <router-link to="/academy" class="btn btn-primary">
            Explore the Academy <span class="arrow">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- cta -->
    <section class="cta-band">
      <div class="container cta-inner" v-reveal>
        <div>
          <h2>Let’s work together.</h2>
          <p>
            If you have proposals or collaboration projects within the mission of SPAIGI,
            we’d be glad to hear from you.
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
  background: radial-gradient(circle, rgba(195, 244, 153, 0.3), transparent 65%);
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
  max-width: 18ch;
}
.page-intro {
  margin-top: 22px;
  font-size: 1.1rem;
  color: var(--text-on-ink);
  max-width: 70ch;
}

/* ---- center block ---- */
.center {
  padding-block: 96px;
  background: var(--paper);
  position: relative;
  overflow: hidden;
}
.center.alt {
  background: var(--paper-2);
  border-block: 1px solid var(--line);
}
.center::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: url('/bg/circuit.svg');
  opacity: 0.18;
  pointer-events: none;
  mask-image: radial-gradient(110% 100% at 100% 0%, #000 15%, transparent 65%);
  -webkit-mask-image: radial-gradient(110% 100% at 100% 0%, #000 15%, transparent 65%);
}
.center .container {
  position: relative;
  z-index: 1;
}
.center-head {
  display: flex;
  align-items: flex-start;
  gap: 22px;
}
.no {
  font-family: var(--serif);
  font-size: clamp(2.4rem, 5vw, 3.4rem);
  font-weight: 600;
  line-height: 1;
  color: var(--gold);
  flex: none;
}
.center-head h2 {
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  margin-top: 6px;
}
.desc {
  margin: 26px 0 44px;
  font-size: 1.06rem;
  color: var(--text-muted);
  max-width: 90ch;
}
.cols {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 48px;
}
.cols h3 {
  font-family: var(--sans);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold-deep);
  margin-bottom: 20px;
}
.activities ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 15px;
}
.activities li {
  display: flex;
  gap: 12px;
  font-size: 0.98rem;
  color: var(--text-strong);
  line-height: 1.5;
}
.activities svg {
  flex: none;
  margin-top: 3px;
  color: var(--gold-deep);
  background: var(--gold-bg);
  border-radius: 50%;
  padding: 4px;
  width: 26px;
  height: 26px;
}
.projects {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.project {
  display: flex;
  gap: 16px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 22px 24px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.project:hover {
  transform: translateY(-3px);
  border-color: var(--gold-soft);
  box-shadow: var(--shadow);
}
.p-no {
  font-family: var(--mono, monospace);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--gold);
  background: var(--gold-bg);
  border-radius: 7px;
  padding: 4px 8px;
  height: fit-content;
  flex: none;
}
.project h4 {
  font-family: var(--serif);
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-strong);
  margin: 0 0 5px;
}
.project p {
  font-size: 0.92rem;
  color: var(--text-muted);
}

/* ---- academy band ---- */
.academy-band {
  background: var(--ink);
  color: var(--text-on-ink);
  padding-block: 80px;
  position: relative;
  overflow: hidden;
}
.academy-band::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: url('/bg/neural.svg');
  opacity: 0.22;
  pointer-events: none;
  mask-image: radial-gradient(120% 110% at 0% 0%, #000 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(120% 110% at 0% 0%, #000 20%, transparent 70%);
}
.academy-inner {
  position: relative;
  z-index: 1;
  max-width: 760px;
}
.no.light {
  color: var(--gold-soft);
}
.academy-band h2 {
  color: var(--text-on-ink-strong);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  margin: 8px 0 16px;
}
.academy-band p {
  color: var(--text-on-ink);
  font-size: 1.04rem;
  margin-bottom: 28px;
}
.academy-band strong {
  color: var(--gold-soft);
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

@media (max-width: 880px) {
  .cols {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .cta-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
