<script setup>
import { ref } from 'vue'

const director = {
  name: 'Dr. Mansur Omonov',
  role: 'Director · Founder & CEO',
  bio: 'DSc in Digital Technologies & AI and PhD in AI Policy & Governance (Hanyang University, Korea); MA in Global Public Administration (Sungkyunkwan); MA in China Studies (Zhejiang). 10+ years in government service, 45+ publications (SCI/Scopus), and 2 authored books.',
  photo: '/img/team-mansur.jpg',
}

const selected = ref(null)

const advisory = [
  { name: 'Dr. Sherzod Ziyoyev', role: 'Expert · Analyst', photo: '/img/team-sherzod.jpg' },
  { name: 'Mr. Muhiddin Omanov', role: 'Expert · Politician', photo: '/img/team-muhiddin.jpg' },
  { name: 'Ms. Dildora Omonova', role: 'President Prize Winner · Expert', photo: '/img/team-dildora.jpg' },
]

const team = [
  {
    name: 'Dr. Behzod Mukhiddinov',
    role: 'Manager · Center for AI Policy & Governance',
    photo: '/img/team-behzod.jpg',
    functions:
      'Leads research on AI governance and regulatory frameworks; develops policy guidance for responsible AI implementation and public sector integration.',
    education: [
      'PhD in Computer Engineering, Shanghai Jiao Tong University, China',
      'MA in Computer Engineering, TUIT; Visiting Scholar, Hanyang University, Korea',
      'BA in Computer Engineering, Tashkent University of Information Technologies (TUIT)',
    ],
    experience:
      'Over 7 years of experience in the field, including Hardware Engineer at Huawei Technologies (China), Mobile Hardware Engineer at Samsung Electronics America (USA), and the Wyoming–Uzbekistan Partnership in Smart Energy Transition for Economic Growth. Speaks Uzbek, English, Chinese, and Russian.',
  },
  {
    name: 'Ms. Saida Dariyeva',
    role: 'Senior Researcher · Public Policy Analyst',
    photo: '/img/team-saida.jpg',
    functions:
      'Conducts policy analysis on governance reforms and public policy effectiveness; supports decision-making with research-based insights, analytical reports and strategies.',
    education: [
      'PhD candidate in History of ex-Yugoslavia and Arabic-Islamic countries, Belgrade University, Serbia',
      'MA in Islamic History and Philosophy, International Islamic Academy of Tashkent',
      'BS in Islamic History and Philosophy, International Islamic Academy of Tashkent',
    ],
    experience:
      'Translator and Social Analyst with 15+ years of experience translating books, articles, and documentary films. Fluent in Uzbek, Russian, Persian (Farsi and Dari), Turkish, Aramaic, Arabic (literary and Egyptian dialect), Hebrew, and Serbian.',
  },
  {
    name: 'Mr. Sadik Arzumand Ahmad',
    role: 'Senior Researcher · AI Policy Analyst',
    photo: '/img/team-sadik.jpg',
    functions:
      'Conducts advanced research on AI governance, risk assessment, and policy impact analysis; prepares analytical reports and strategic recommendations.',
    education: [
      'PhD researcher in Business Administration, Sejong University, South Korea',
      'MBA in Business Administration, Ajou University, South Korea',
      'BBA in Business Administration, Kyungdong University, South Korea',
    ],
    experience:
      'Over 10 years of living experience and 5+ years of expertise in banking, fintech, and as a marketing manager in cross-border remittance services in South Korea. Fluent in Bengali, English, Korean (intermediate), and Hindi (conversational). Content Creator — YouTube 41,000+ and Meta 21,000+ followers.',
  },
  {
    name: 'Mr. Muhammad Samadov',
    role: 'Researcher · Scholar / Analyst',
    photo: '/img/team-muhammad.jpg',
    functions:
      'Conducts policy analysis and reports on governance reforms and public policy effectiveness.',
    education: [
      'BA in International Management (Tourism), Kimyo International University in Tashkent',
      'Winner of the "History" Olympiad among lyceums, Tashkent, Uzbekistan',
    ],
    experience:
      'Young Scholar. Speaks English, Russian, and Italian.',
  },
  {
    name: 'Ms. Mehrangiz Samadova',
    role: 'Researcher · Scholar / Analyst',
    photo: '/img/team-mehrangiz.jpg',
    functions:
      'Conducts advanced research and reports on AI governance, risk assessment, and policy impact analysis.',
    education: [
      'BA in Philology and Teaching Languages, Uzbekistan State World Languages University',
    ],
    experience:
      'Young Scholar and English Language Tutor. Speaks English, Turkish, and Hindi.',
  },
]

const benefits = [
  {
    title: 'Professional Opportunities',
    items: [
      'Develop strategic and operational management skills',
      'Gain experience in research, policy briefs, case studies, and empirical analysis',
      'Participate in conferences, interviews, and international forums',
      'Access educational and professional development programs: courses, hybrid training, and mentoring',
    ],
  },
  {
    title: 'Financial & Support Benefits',
    items: [
      'Travel, accommodation, and transport expenses covered by the institute',
      'Bonuses or honorarium for ad-hoc projects',
      'Access to think tank materials, research resources, and certificates',
      'Financial incentives for each analytical output produced',
    ],
  },
  {
    title: 'Additional Perks',
    items: [
      'Opportunities for career advancement and higher positions',
      'Rewards based on annual plans and KPI achievements',
      'Recognition as an expert in media and publications',
    ],
  },
]
</script>

<template>
  <section id="team" class="section team">
    <div class="container">
      <div class="head">
        <p class="eyebrow" v-reveal>People</p>
        <h2 class="section-title" v-reveal="80">The minds behind the mission.</h2>
        <p class="lead" v-reveal="160">
          A multidisciplinary team of academics, analysts, and advisors — backed by a
          strategic advisory board of diplomats and digital-government experts.
        </p>
      </div>

      <section class="advisory" aria-labelledby="advisory-title" v-reveal>
        <div class="advisory-head">
          <div>
            <p class="sub-label">Strategic Advisory Board</p>
            <h3 id="advisory-title">Independent expertise for strategic decisions.</h3>
          </div>
          <p>
            Senior experts supporting SPAIGI’s research direction, policy relevance, and
            institutional partnerships.
          </p>
        </div>

        <div class="advisory-grid">
          <article v-for="a in advisory" :key="a.name" class="advisor">
            <div class="advisor-photo">
              <img
                :src="a.photo"
                :alt="a.name"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="advisor-info">
              <h4>{{ a.name }}</h4>
              <p>{{ a.role }}</p>
            </div>
          </article>
        </div>
      </section>

      <article class="lead-card" v-reveal>
        <img
          :src="director.photo"
          :alt="director.name"
          class="avatar big"
          loading="lazy"
          decoding="async"
        />
        <div class="lead-info">
          <span class="tag">Leadership</span>
          <h3>{{ director.name }}</h3>
          <p class="role">{{ director.role }}</p>
          <p class="bio">{{ director.bio }}</p>
          <a href="mailto:president@spaigi.uz" class="mail">president@spaigi.uz</a>
        </div>
      </article>

      <div class="grid" v-reveal>
        <article
          v-for="m in team"
          :key="m.name"
          class="member"
          :class="{ 'has-profile': m.functions }"
          :role="m.functions ? 'button' : null"
          :tabindex="m.functions ? 0 : null"
          @click="m.functions && (selected = m)"
          @keydown.enter="m.functions && (selected = m)"
        >
          <div class="photo-wrap">
            <img
              :src="m.photo"
              :alt="m.name"
              class="photo"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h4>{{ m.name }}</h4>
          <p>{{ m.role }}</p>
          <span v-if="m.functions" class="profile-link">View profile →</span>
        </article>
      </div>

      <Teleport to="body">
        <div v-if="selected" class="profile-overlay" @click.self="selected = null">
          <div class="profile-modal" role="dialog" aria-modal="true">
            <button class="profile-close" @click="selected = null" aria-label="Close">×</button>
            <div class="profile-top">
              <img :src="selected.photo" :alt="selected.name" class="profile-photo" />
              <div>
                <h3>{{ selected.name }}</h3>
                <p class="profile-role">{{ selected.role }}</p>
              </div>
            </div>
            <div class="profile-body">
              <template v-if="selected.functions">
                <h5>Functions</h5>
                <p>{{ selected.functions }}</p>
              </template>
              <template v-if="selected.education">
                <h5>Education</h5>
                <ul>
                  <li v-for="e in selected.education" :key="e">{{ e }}</li>
                </ul>
              </template>
              <template v-if="selected.experience">
                <h5>Professional Experience</h5>
                <p>{{ selected.experience }}</p>
              </template>
            </div>
          </div>
        </div>
      </Teleport>
      <p class="openings" v-reveal>
        Open positions: <strong>Deputy of Director</strong> ·
        <strong>Manager, Center for Strategic Policy &amp; Geopolitics</strong> —
        <a href="#academy">see opportunities ↓</a>
      </p>

      <section class="benefits" aria-labelledby="benefits-title" v-reveal>
        <div class="benefits-head">
          <p class="sub-label">For Our Team</p>
          <h3 id="benefits-title">Team Member's Opportunities &amp; Benefits</h3>
        </div>
        <div class="benefits-grid">
          <article v-for="b in benefits" :key="b.title" class="benefit-card">
            <h4>{{ b.title }}</h4>
            <ul>
              <li v-for="item in b.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.team {
  background: var(--paper);
  position: relative;
  overflow: hidden;
}
.team::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url('/bg/grid-dots.svg');
  opacity: 0.45;
  pointer-events: none;
  mask-image: radial-gradient(120% 100% at 50% 100%, #000 25%, transparent 78%);
  -webkit-mask-image: radial-gradient(120% 100% at 50% 100%, #000 25%, transparent 78%);
}
.head {
  max-width: 680px;
  margin-bottom: 48px;
}
.avatar.big {
  width: 230px;
  height: 100%;
  min-height: 260px;
  border-radius: 8px 0 0 8px !important;
  object-fit: cover;
  object-position: top center;
  flex: none;
  background: var(--paper-2);
  box-shadow: none;
}
.lead-card {
  display: grid;
  grid-template-columns: 230px 1fr;
  gap: 0;
  align-items: stretch;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  margin-bottom: 26px;
}
.lead-info {
  align-self: center;
  padding: 38px 40px;
}
.lead-info .tag {
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--gold-deep);
}
.lead-info h3 {
  font-size: 1.7rem;
  margin: 8px 0 4px;
}
.role {
  color: var(--text-strong);
  font-weight: 600;
}
.bio {
  color: var(--text-muted);
  margin-top: 12px;
  max-width: 60ch;
}
.mail {
  display: inline-block;
  margin-top: 14px;
  color: var(--gold-deep);
  font-weight: 600;
  border-bottom: 1px solid transparent;
  transition: border-color 0.18s ease;
}
.mail:hover {
  border-color: var(--gold-deep);
}

.advisory {
  margin-bottom: 36px;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
}
.advisory-head {
  display: grid;
  grid-template-columns: minmax(320px, 1fr) minmax(280px, 0.75fr);
  gap: 48px;
  align-items: end;
  margin-bottom: 28px;
}
.sub-label {
  display: block;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold-deep);
  margin-bottom: 10px;
}
.advisory-head h3 {
  font-size: clamp(1.45rem, 2.5vw, 2rem);
  max-width: 22ch;
}
.advisory-head > p {
  color: var(--text-muted);
  font-size: 0.94rem;
}
.advisory-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.advisor {
  min-width: 0;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.advisor:hover {
  transform: translateY(-3px);
  border-color: var(--gold-soft);
  box-shadow: var(--shadow);
}
.advisor-photo {
  position: relative;
  width: 190px;
  height: 190px;
  margin: 28px auto 0;
  border-radius: 50%;
  background: #fff;
  overflow: hidden;
  border: 6px solid #fff;
  box-shadow: 0 14px 32px rgba(30, 52, 130, 0.16);
}
.advisor-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  border-radius: 50%;
  transform: scale(1.08);
}
.advisor-info {
  padding: 20px 20px 24px;
}
.advisor h4 {
  font-family: var(--sans);
  font-weight: 800;
  font-size: 1.04rem;
  color: var(--text-strong);
  margin: 0 0 5px;
}
.advisor p {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.45;
}

/* ---- Static team grid (all members on one page) ---- */
.grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 22px;
}
.member {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 28px 22px 26px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}
.member:hover {
  transform: translateY(-6px);
  border-color: var(--gold-soft);
  box-shadow: var(--shadow);
}
.photo-wrap {
  width: 112px;
  height: 136px;
  border-radius: 8px;
  margin-bottom: 18px;
  overflow: hidden;
}
.photo {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  object-position: top center;
  background: var(--paper-2);
}
.member h4 {
  font-family: var(--serif);
  font-weight: 600;
  font-size: 1.08rem;
  color: var(--text-strong);
  margin: 0 0 4px;
}
.member p {
  font-size: 0.84rem;
  color: var(--text-muted);
  line-height: 1.4;
}
.member.has-profile {
  cursor: pointer;
}
.profile-link {
  margin-top: 12px;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--gold-deep);
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.member.has-profile:hover .profile-link,
.member.has-profile:focus-visible .profile-link {
  opacity: 1;
  transform: translateY(0);
}

/* ---- profile modal ---- */
.profile-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(12, 20, 50, 0.55);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}
.profile-modal {
  position: relative;
  width: min(640px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  background: #fff;
  border-radius: 14px;
  padding: 36px;
  box-shadow: 0 30px 80px rgba(15, 30, 80, 0.35);
}
.profile-close {
  position: absolute;
  top: 16px;
  right: 18px;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  background: var(--paper-2);
  color: var(--text-strong);
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.18s ease;
}
.profile-close:hover {
  background: var(--line);
}
.profile-top {
  display: flex;
  align-items: center;
  gap: 22px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--line);
}
.profile-photo {
  width: 96px;
  height: 96px;
  flex: none;
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
  background: var(--paper-2);
  border: 4px solid #fff;
  box-shadow: 0 10px 24px rgba(30, 52, 130, 0.16);
}
.profile-top h3 {
  font-size: 1.4rem;
  margin: 0 0 4px;
}
.profile-role {
  color: var(--gold-deep);
  font-weight: 600;
  font-size: 0.92rem;
}
.profile-body {
  margin-top: 22px;
}
.profile-body h5 {
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold-deep);
  margin: 22px 0 8px;
}
.profile-body h5:first-child {
  margin-top: 0;
}
.profile-body p {
  color: var(--text-muted);
  line-height: 1.65;
  font-size: 0.92rem;
}
.profile-body ul {
  margin: 0;
  padding-left: 18px;
}
.profile-body li {
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 0.92rem;
  margin-bottom: 4px;
}
.openings {
  margin-top: 18px;
  text-align: center;
  font-size: 0.92rem;
  color: var(--text-muted);
}
.openings strong {
  color: var(--text-strong);
  font-weight: 600;
}
.openings a {
  color: var(--gold-deep);
  font-weight: 600;
  border-bottom: 1px solid transparent;
  transition: border-color 0.18s ease;
}
.openings a:hover {
  border-color: var(--gold-deep);
}

/* ---- opportunities & benefits ---- */
.benefits {
  margin-top: 48px;
}
.benefits-head {
  margin-bottom: 24px;
}
.benefits-head h3 {
  font-size: clamp(1.45rem, 2.5vw, 2rem);
}
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.benefit-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 28px 26px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.benefit-card:hover {
  transform: translateY(-3px);
  border-color: var(--gold-soft);
  box-shadow: var(--shadow);
}
.benefit-card h4 {
  font-family: var(--sans);
  font-weight: 800;
  font-size: 1.04rem;
  color: var(--text-strong);
  margin: 0 0 16px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--line);
}
.benefit-card ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.benefit-card li {
  position: relative;
  padding-left: 22px;
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 12px;
}
.benefit-card li:last-child {
  margin-bottom: 0;
}
.benefit-card li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--gold);
  transform: rotate(45deg);
}
@media (max-width: 900px) {
  .advisory-head {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  .lead-card {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .avatar.big {
    width: 100%;
    height: 280px;
    min-height: 0;
    border-radius: 8px 8px 0 0 !important;
  }
  .lead-info {
    padding: 30px 28px 34px;
  }
  .bio {
    margin-inline: auto;
  }
}
@media (max-width: 700px) {
  .advisory {
    padding: 0;
  }
  .advisory-grid {
    grid-template-columns: 1fr;
  }
  .advisor {
    display: grid;
    grid-template-columns: 150px 1fr;
  }
  .advisor-photo {
    width: 130px;
    height: 130px;
    margin: 18px 0 18px 18px;
  }
  .advisor-info {
    padding: 20px;
    align-self: center;
  }
}
@media (max-width: 520px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
