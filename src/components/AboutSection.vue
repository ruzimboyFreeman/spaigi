<script setup>
const pillars = [
  {
    title: 'Experience',
    body: 'Expert team with years of policy, research, and governance experience.',
  },
  {
    title: 'Quick Support',
    body: 'Fast analytical support and practical recommendations for institutions.',
  },
]
</script>

<template>
  <section id="about" class="section about">
    <div class="container about-grid">
      <div class="about-visual" v-reveal>
        <div class="portrait">
          <img src="/img/hero-bg.jpg" alt="SPAIGI delegation at Global Forum on AI in Government" />
        </div>
        <span class="tile tile-a" aria-hidden="true"></span>
        <span class="tile tile-b" aria-hidden="true"></span>
        <span class="tile tile-c" aria-hidden="true"></span>
        <div class="score">
          <strong>1.5K</strong>
          <span>Policy insights completed</span>
        </div>
      </div>

      <div class="about-head">
        <p class="eyebrow" v-reveal>About Us</p>
        <h2 class="section-title" v-reveal="80">
          We deal with the aspects of professional AI governance.
        </h2>
        <p class="lead" v-reveal="160">
          The International Strategic Policy and AI Governance Institute (SPAIGI) is an
          independent, research-oriented policy think tank headquartered in Tashkent,
          Uzbekistan. We bridge technological transformation and public governance with
          rigorous research, strategic analysis, and practical policy solutions.
        </p>

        <div class="pillars">
          <article
            v-for="(p, i) in pillars"
            :key="p.title"
            class="pillar"
            v-reveal="i * 100"
          >
            <span class="pillar-no">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
                stroke="currentColor" stroke-width="1.7" stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M12 3 4 7v6c0 5 3.8 8.5 8 8.5s8-3.5 8-8.5V7l-8-4Z" />
                <path d="M9 12.5 11 14.5 15.5 9.5" />
              </svg>
            </span>
            <div>
              <h3>{{ p.title }}</h3>
              <p>{{ p.body }}</p>
            </div>
          </article>
        </div>

        <a href="#centers" class="btn btn-primary read-more" v-reveal="220">
          Read More <span class="arrow">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--paper);
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
.about::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url('/bg/grid-dots.svg') no-repeat left 3% center / 46%;
  opacity: 0.32;
  pointer-events: none;
  mask-image: radial-gradient(120% 100% at 50% 0%, #000 25%, transparent 75%);
  -webkit-mask-image: radial-gradient(120% 100% at 50% 0%, #000 25%, transparent 75%);
}
.about-grid {
  display: grid;
  grid-template-columns: 0.96fr 1.04fr;
  gap: 88px;
  align-items: center;
}
.about-visual {
  position: relative;
  min-height: 455px;
}
.portrait {
  position: absolute;
  left: 50%;
  top: 44px;
  width: 330px;
  height: 330px;
  transform: translateX(-50%) rotate(45deg);
  border-radius: 8px;
  overflow: hidden;
  border: 12px solid #fff;
  box-shadow: 0 24px 56px rgba(24, 45, 120, 0.16);
  z-index: 2;
}
.portrait img {
  width: 145%;
  height: 145%;
  object-fit: cover;
  object-position: center 66%;
  transform: rotate(-45deg) translate(-6%, -10%);
  max-width: none;
}
.tile {
  position: absolute;
  width: 118px;
  height: 118px;
  background: linear-gradient(135deg, rgba(61, 99, 216, 0.08), rgba(61, 99, 216, 0.2));
  border-radius: 10px;
  transform: rotate(45deg);
}
.tile-a {
  left: 118px;
  top: 190px;
}
.tile-b {
  right: 108px;
  top: 90px;
}
.tile-c {
  right: 44px;
  top: 236px;
  width: 76px;
  height: 76px;
}
.score {
  position: absolute;
  left: 185px;
  bottom: 42px;
  z-index: 4;
  min-width: 235px;
  padding: 19px 28px;
  color: #fff;
  background: linear-gradient(100deg, #315fd4 0%, #3f61d6 62%, #f25b9f 62%, #f25b9f 100%);
  clip-path: polygon(0 0, 82% 0, 100% 50%, 82% 100%, 0 100%);
  box-shadow: 0 16px 34px rgba(61, 99, 216, 0.24);
}
.score strong {
  display: block;
  font-size: 2rem;
  line-height: 1;
}
.score span {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
}
.pillars {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin-top: 30px;
}
.pillar {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 22px 22px;
  box-shadow: var(--shadow-sm);
  display: flex;
  gap: 16px;
  align-items: flex-start;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.pillar:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
  border-color: var(--gold-soft);
}
.pillar-no {
  color: var(--gold-deep);
  flex: none;
  background: var(--gold-bg);
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 8px;
}
.pillar h3 {
  font-size: 1.02rem;
  margin: 0 0 6px;
}
.pillar p {
  color: var(--text-muted);
  font-size: 0.88rem;
  line-height: 1.55;
}
.read-more {
  margin-top: 34px;
}
@media (max-width: 860px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .about-visual {
    min-height: 410px;
  }
}
@media (max-width: 620px) {
  .pillars {
    grid-template-columns: 1fr;
  }
  .portrait {
    width: 250px;
    height: 250px;
  }
  .score {
    left: 48px;
  }
}
</style>
