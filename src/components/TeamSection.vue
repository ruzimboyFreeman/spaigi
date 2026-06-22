<script setup>
const director = {
  name: 'Dr. Mansur Omonov',
  role: 'Director · Founder & CEO',
  bio: 'DSc in Digital Technologies & AI and PhD in AI Policy & Governance (Hanyang University, Korea); MA in Global Public Administration (Sungkyunkwan); MA in China Studies (Zhejiang). 10+ years in government service, 45+ publications (SCI/Scopus), and 2 authored books.',
  photo: '/img/team-mansur.jpg',
}

// Strategic Advisory Board — shown separately, above the leadership.
const advisory = [
  { name: 'Mr. Sherzod Ziyoyev', role: 'Expert · Analyst', photo: '/img/team-sherzod.jpg' },
  { name: 'Mr. Muhiddin Omanov', role: 'Expert · Politician', photo: '/img/team-muhiddin.jpg' },
  { name: 'Ms. Dildora Omonova', role: 'President Prize Winner · Expert', photo: '/img/team-dildora.jpg' },
]

const team = [
  { name: 'Dr. Behzod Mukhiddinov', role: 'Manager · Center for AI Policy & Governance', photo: '/img/team-behzod.jpg' },
  { name: 'Ms. Saida Dariyeva', role: 'Senior Researcher · Public Policy Analyst', photo: '/img/team-saida.jpg' },
  { name: 'Mr. Sadik Arzumand Ahmad', role: 'Senior Researcher · AI Policy Analyst', photo: '/img/team-sadik.jpg' },
  { name: 'Mr. Muhammad Samadov', role: 'Researcher · Scholar / Analyst', photo: '/img/team-muhammad.jpg' },
  { name: 'Ms. Mehrangiz Samadova', role: 'Researcher · Scholar / Analyst', photo: '/img/team-mehrangiz.jpg' },
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

      <div class="advisory" v-reveal>
        <span class="sub-label">Strategic Advisory Board</span>
        <div class="advisory-row">
          <article v-for="a in advisory" :key="a.name" class="advisor">
            <img :src="a.photo" :alt="a.name" class="avatar" />
            <div>
              <h4>{{ a.name }}</h4>
              <p>{{ a.role }}</p>
            </div>
          </article>
        </div>
      </div>

      <article class="lead-card" v-reveal>
        <img :src="director.photo" :alt="director.name" class="avatar big" />
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
        >
          <div class="photo-wrap">
            <img :src="m.photo" :alt="m.name" class="photo" />
          </div>
          <h4>{{ m.name }}</h4>
          <p>{{ m.role }}</p>
        </article>
      </div>
      <p class="openings" v-reveal>
        Open positions: <strong>Deputy of Director</strong> ·
        <strong>Manager, Center for Strategic Policy &amp; Geopolitics</strong> —
        <a href="#academy">see opportunities ↓</a>
      </p>
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
.avatar {
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
  width: 56px;
  height: 56px;
  flex: none;
  background: var(--paper-2);
}
.avatar.big {
  width: 132px;
  height: 132px;
  box-shadow: var(--shadow);
}
.lead-card {
  display: flex;
  gap: 32px;
  align-items: center;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 38px 40px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 26px;
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

/* ---- Strategic Advisory Board (separate, on top) ---- */
.advisory {
  text-align: center;
  margin-bottom: 44px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--line);
}
.sub-label {
  display: inline-block;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold-deep);
  margin-bottom: 22px;
}
.advisory-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
}
.advisor {
  display: flex;
  align-items: center;
  gap: 16px;
  text-align: left;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 12px 26px 12px 12px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.advisor:hover {
  transform: translateY(-3px);
  border-color: var(--gold-soft);
  box-shadow: var(--shadow);
}
.advisor h4 {
  font-family: var(--serif);
  font-weight: 600;
  font-size: 1.04rem;
  color: var(--text-strong);
  margin: 0 0 2px;
}
.advisor p {
  font-size: 0.82rem;
  color: var(--text-muted);
}

/* ---- Static team grid (all members on one page) ---- */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 22px;
}
.member {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
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
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 18px;
}
.photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
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
@media (max-width: 900px) {
  .lead-card {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .bio {
    margin-inline: auto;
  }
}
</style>
