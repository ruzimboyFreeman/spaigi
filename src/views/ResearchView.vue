<script setup>
const featured = {
  type: 'Peer-reviewed · Journal Article',
  title:
    'Towards Smart Public Administration: A TOE-Based Empirical Study of AI-Chatbot Adoption in a Transitioning Government Context',
  authors: 'Mansur Omonov & Yonghan Ahn',
  abstract:
    'As governments pursue digital transformation to improve service delivery and administrative efficiency, AI chatbots have emerged as a promising innovation in smart public administration. Yet adoption remains limited, particularly in transitioning countries where institutional, organizational, and technological conditions are complex and evolving. Using an extended technology–organization–environment (TOE) framework, this study surveyed 501 public employees and applied partial least squares structural equation modeling. Perceived usefulness, compatibility, organizational readiness, effective accountability, and ethical AI regulation emerge as key enablers — while system complexity, traditional leadership, resistance to change, and data-management and security concerns pose major barriers.',
  keywords: [
    'AI chatbots',
    'digital government',
    'innovation management',
    'smart public administration',
    'TOE framework',
    'transitioning countries',
    'Uzbekistan',
  ],
  citation: 'Adm. Sci. 2025, 15(8), 324',
  doi: 'https://doi.org/10.3390/admsci15080324',
}

const publications = [
  {
    type: 'Book',
    cover: '/img/pub-diplomacy.jpg',
    title: 'Public Diplomacy & Modern Cooperation in Central Asia',
    author: 'Mansur Omonov',
    desc: 'A systematic analysis of public diplomacy and cultural relations in strengthening cooperation among Central Asian states — examining soft-power instruments for regional security and stability within Uzbekistan’s foreign-policy framework.',
    tags: ['Regional integration', 'Cultural relations', 'Foreign policy'],
    action: { label: 'Request details', href: 'mailto:contact@spaigi.uz?subject=Public%20Diplomacy%20book' },
  },
  {
    type: 'Expert Analysis',
    cover: '/img/pub-usiran.jpg',
    title: 'Tension between the US and Iran',
    author: 'Sh. Ziyoyev · Political Scientist, SPAIGI Expert',
    desc: 'An assessment of US–Iran tensions in the Middle East and their implications for Central Asia — including mediation dynamics, energy and logistics stability, and Uzbekistan’s strategic-partnership and survival interests.',
    tags: ['Geopolitics', 'Security', 'Central Asia'],
    action: { label: 'Read more', href: 'mailto:contact@spaigi.uz?subject=US-Iran%20analysis' },
  },
  {
    type: 'Book',
    cover: '/img/pub-innovation.jpg',
    title: 'Innovation in Public Administration',
    author: 'Mansur S. Omonov',
    desc: 'Based on an international research project on effective management and innovation in public-sector organizations — covering digital transformation, leadership, motivation, and global best practices across three parts and six chapters.',
    tags: ['Digital transformation', 'Leadership', 'Best practices'],
    action: { label: 'Request details', href: 'mailto:contact@spaigi.uz?subject=Innovation%20book' },
  },
  {
    type: 'Report',
    cover: '/img/pub-uzus.jpg',
    title: 'Deepening Uzbekistan–U.S. Strategic Partnership',
    author: 'Dr. Mansur Omonov · SPAIGI Expert',
    desc: 'Analysis of geo-economic opportunities and institutional reforms in the Uzbekistan–U.S. strategic partnership. The full version is available as a PDF on request.',
    tags: ['Geo-economics', 'Reforms', 'Partnership'],
    action: { label: 'Request the PDF', href: 'mailto:contact@spaigi.uz?subject=Uzbekistan-US%20report%20PDF' },
  },
]
</script>

<template>
  <main class="research-page">
    <!-- page hero -->
    <section class="page-hero">
      <div class="grid-bg" aria-hidden="true"></div>
      <div class="glow" aria-hidden="true"></div>
      <div class="container">
        <p class="eyebrow on-ink" v-reveal>Research &amp; Publications</p>
        <h1 class="page-title" v-reveal="80">Evidence-based work for a sustainable future.</h1>
        <p class="page-intro" v-reveal="160">
          Our publications and research papers are scientifically grounded — examining how
          modern technologies, especially artificial intelligence, shape international
          relations and public governance, assessing their opportunities and risks, and
          providing early warnings. Every solution our team proposes matters for today and
          for a sustainable future.
        </p>
      </div>
    </section>

    <!-- featured paper -->
    <section class="featured-wrap">
      <div class="container">
        <article class="featured" v-reveal>
          <div class="f-side">
            <span class="f-type">{{ featured.type }}</span>
            <svg class="f-icon" viewBox="0 0 24 24" width="40" height="40" fill="none"
              stroke="currentColor" stroke-width="1.4" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M4 4h11l5 5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
              <path d="M14 4v5h5M8 13h8M8 17h6" />
            </svg>
            <div class="cite">
              <span>{{ featured.citation }}</span>
              <a :href="featured.doi" target="_blank" rel="noopener">doi.org →</a>
            </div>
          </div>
          <div class="f-body">
            <h2>{{ featured.title }}</h2>
            <p class="authors">{{ featured.authors }}</p>
            <p class="abstract">{{ featured.abstract }}</p>
            <div class="keywords">
              <span v-for="k in featured.keywords" :key="k" class="kw">{{ k }}</span>
            </div>
            <a :href="featured.doi" target="_blank" rel="noopener" class="btn btn-primary">
              Read the paper <span class="arrow">→</span>
            </a>
          </div>
        </article>
      </div>
    </section>

    <!-- publications grid -->
    <section class="pubs">
      <div class="container">
        <h2 class="pubs-title" v-reveal>Books, analyses &amp; reports</h2>
        <div class="grid">
          <article v-for="(p, i) in publications" :key="p.title" class="pub" v-reveal="i * 90">
            <div class="cover">
              <img :src="p.cover" :alt="p.title" loading="lazy" />
              <span class="badge">{{ p.type }}</span>
            </div>
            <div class="pub-body">
              <h3>{{ p.title }}</h3>
              <p class="by">{{ p.author }}</p>
              <p class="desc">{{ p.desc }}</p>
              <div class="tags">
                <span v-for="t in p.tags" :key="t">{{ t }}</span>
              </div>
              <a :href="p.action.href" class="link">{{ p.action.label }} <span class="arrow">→</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- cta -->
    <section class="cta-band">
      <div class="container cta-inner" v-reveal>
        <div>
          <h2>Let’s work together.</h2>
          <p>For publications, collaboration, or research partnerships within the mission of SPAIGI, get in touch.</p>
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
  background: radial-gradient(circle, rgba(47, 143, 255, 0.3), transparent 65%);
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
  max-width: 72ch;
}

/* ---- featured paper ---- */
.featured-wrap {
  background: var(--paper);
  padding-block: 80px 50px;
}
.featured {
  display: grid;
  grid-template-columns: 0.8fr 2.2fr;
  gap: 0;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  background: var(--panel);
}
.f-side {
  background: radial-gradient(130% 130% at 0% 0%, var(--ink-3), var(--ink));
  color: var(--text-on-ink);
  padding: 34px 30px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.f-type {
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--gold-soft);
}
.f-icon {
  color: var(--gold-soft);
}
.cite {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.85rem;
  color: var(--text-on-ink);
}
.cite a {
  color: var(--gold-soft);
  font-weight: 600;
}
.f-body {
  padding: 34px 36px;
}
.f-body h2 {
  font-size: clamp(1.3rem, 2.2vw, 1.7rem);
  line-height: 1.25;
}
.authors {
  margin-top: 8px;
  color: var(--gold-deep);
  font-weight: 600;
  font-size: 0.95rem;
}
.abstract {
  margin-top: 16px;
  color: var(--text-muted);
  font-size: 0.98rem;
}
.keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 20px 0 24px;
}
.kw {
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--gold-deep);
  background: var(--gold-bg);
  border-radius: 999px;
  padding: 5px 12px;
}

/* ---- publications grid ---- */
.pubs {
  background: var(--paper);
  padding-block: 40px 100px;
  position: relative;
  overflow: hidden;
}
.pubs::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: url('/bg/grid-dots.svg');
  opacity: 0.5;
  pointer-events: none;
  mask-image: radial-gradient(120% 100% at 50% 100%, #000 25%, transparent 78%);
  -webkit-mask-image: radial-gradient(120% 100% at 50% 100%, #000 25%, transparent 78%);
}
.pubs .container {
  position: relative;
  z-index: 1;
}
.pubs-title {
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  margin-bottom: 36px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.pub {
  display: flex;
  flex-direction: column;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.pub:hover {
  transform: translateY(-5px);
  border-color: var(--gold-soft);
  box-shadow: var(--shadow);
}
.cover {
  position: relative;
  aspect-ratio: 16 / 10;
  background: var(--ink-2);
  overflow: hidden;
}
.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}
.badge {
  position: absolute;
  top: 14px;
  left: 14px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-on-ink-strong);
  background: rgba(10, 19, 34, 0.72);
  backdrop-filter: blur(6px);
  padding: 6px 12px;
  border-radius: 999px;
}
.pub-body {
  padding: 24px 26px 26px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.pub-body h3 {
  font-size: 1.2rem;
  line-height: 1.25;
}
.by {
  margin-top: 7px;
  color: var(--gold-deep);
  font-weight: 600;
  font-size: 0.88rem;
}
.desc {
  margin-top: 12px;
  color: var(--text-muted);
  font-size: 0.95rem;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 18px 0 20px;
}
.tags span {
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--text-muted);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 4px 11px;
}
.link {
  margin-top: auto;
  color: var(--gold-deep);
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-flex;
  gap: 8px;
}
.link .arrow {
  transition: transform 0.18s ease;
}
.link:hover .arrow {
  transform: translateX(3px);
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
  .featured {
    grid-template-columns: 1fr;
  }
  .f-side {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .f-icon {
    display: none;
  }
  .cite {
    margin-top: 0;
    text-align: right;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  .cta-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
