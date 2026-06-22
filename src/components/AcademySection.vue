<script setup>
const offerings = [
  'Research, policy briefs, case studies & empirical analysis',
  'Conferences, interviews & international forums',
  'Courses, hybrid training & mentoring',
  'Travel & accommodation covered + performance incentives',
]

// Content from the SPAIGI Academy "We are hiring" announcement.
const categories = ['Master’s & PhD holders', 'Researchers in related disciplines']
const lookingFor = [
  'Excellent command of English (written & spoken)',
  'Analytical, research & critical-thinking skills',
  'Academic, professional & result-oriented mindset',
  'Ability to work effectively independently & in a team',
]
</script>

<template>
  <section id="academy" class="section academy">
    <div class="container academy-grid">
      <div class="copy">
        <p class="eyebrow" v-reveal>SPAIGI Academy</p>
        <h2 class="section-title" v-reveal="80">
          Building the next generation of policy minds.
        </h2>
        <p class="lead" v-reveal="160">
          SPAIGI and its Academy offer members real opportunities and benefits — from
          research and international forums to training, mentoring, and performance-based
          incentives in a dynamic professional environment.
        </p>
        <ul class="offer" v-reveal="200">
          <li v-for="o in offerings" :key="o">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"><path d="m5 12 4.5 4.5L19 7" /></svg>
            {{ o }}
          </li>
        </ul>
        <router-link to="/academy" class="btn btn-primary" v-reveal="240">
          Visit the Academy <span class="arrow">→</span>
        </router-link>
      </div>

      <aside class="hiring" v-reveal="120">
        <p class="hiring-tag"><span class="dot"></span> We are hiring</p>
        <h3 class="hiring-title">Join our team</h3>
        <p class="hiring-intro">
          SPAIGI and its Academy are pleased to announce new job opportunities for highly
          qualified and motivated professionals. We welcome applications from Master’s and
          PhD holders, as well as researchers in related disciplines.
        </p>

        <div class="chips">
          <span v-for="c in categories" :key="c" class="chip">{{ c }}</span>
        </div>

        <p class="looking-label">We are looking for</p>
        <ul class="looking">
          <li v-for="l in lookingFor" :key="l">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
              stroke="currentColor" stroke-width="2.2" stroke-linecap="round"
              stroke-linejoin="round"><path d="m5 12 4.5 4.5L19 7" /></svg>
            {{ l }}
          </li>
        </ul>

        <p class="perk">★ Salary &amp; performance-based incentives in a dynamic environment</p>

        <div class="apply">
          <a href="mailto:president@spaigi.uz,contact@spaigi.uz?subject=SPAIGI%20Application" class="btn btn-primary">
            Apply now <span class="arrow">→</span>
          </a>
          <p class="send">Send your resume to
            <a href="mailto:president@spaigi.uz">president@spaigi.uz</a> ·
            <a href="mailto:contact@spaigi.uz">contact@spaigi.uz</a>
          </p>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.academy {
  background: var(--paper-2);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  position: relative;
  overflow: hidden;
}
.academy::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url('/bg/neural.svg');
  opacity: 0.35;
  pointer-events: none;
  mask-image: radial-gradient(120% 110% at 0% 0%, #000 25%, transparent 72%);
  -webkit-mask-image: radial-gradient(120% 110% at 0% 0%, #000 25%, transparent 72%);
}
.academy-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 60px;
  align-items: center;
}
.offer {
  list-style: none;
  padding: 0;
  margin: 30px 0 34px;
  display: grid;
  gap: 14px;
}
.offer li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  color: var(--text-strong);
}
.offer svg {
  flex: none;
  color: var(--gold-deep);
  background: var(--gold-bg);
  border-radius: 50%;
  padding: 4px;
  width: 28px;
  height: 28px;
}

/* ---- Hiring card (content from the announcement) ---- */
.hiring {
  position: relative;
  background: radial-gradient(130% 130% at 100% 0%, var(--ink-3), var(--ink));
  color: var(--text-on-ink);
  border-radius: var(--radius-lg);
  padding: 38px 36px;
  box-shadow: var(--shadow);
  border: 1px solid var(--line-ink);
  overflow: hidden;
}
.hiring::after {
  content: '';
  position: absolute;
  bottom: -70px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(195, 244, 153, 0.25), transparent 70%);
}
.hiring-tag {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold-soft);
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gold-soft);
  box-shadow: 0 0 0 0 rgba(214, 247, 176, 0.6);
  animation: blink 1.8s ease-out infinite;
}
@keyframes blink {
  0% {
    box-shadow: 0 0 0 0 rgba(214, 247, 176, 0.55);
  }
  70%,
  100% {
    box-shadow: 0 0 0 9px rgba(214, 247, 176, 0);
  }
}
.hiring-title {
  font-size: 1.9rem;
  color: var(--text-on-ink-strong);
  margin: 10px 0 12px;
}
.hiring-intro {
  font-size: 0.96rem;
  color: var(--text-on-ink);
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 22px 0;
}
.chip {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--gold-soft);
  background: var(--gold-bg);
  border: 1px solid rgba(214, 247, 176, 0.25);
  padding: 6px 14px;
  border-radius: 999px;
}
.looking-label {
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-on-ink);
  opacity: 0.8;
  margin-bottom: 12px;
}
.looking {
  list-style: none;
  padding: 0;
  margin: 0 0 22px;
  display: grid;
  gap: 11px;
}
.looking li {
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 0.95rem;
  color: var(--text-on-ink-strong);
}
.looking svg {
  flex: none;
  color: var(--gold-soft);
}
.perk {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--gold-soft);
  padding: 12px 0 22px;
  border-top: 1px solid var(--line-ink);
}
.apply {
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
}
.send {
  font-size: 0.86rem;
  color: var(--text-on-ink);
}
.send a {
  color: var(--gold-soft);
  font-weight: 600;
  border-bottom: 1px solid transparent;
  transition: border-color 0.18s ease;
}
.send a:hover {
  border-color: var(--gold-soft);
}
@media (max-width: 860px) {
  .academy-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
