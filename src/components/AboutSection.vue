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
        <div class="diamond-stage">
          <div class="diamond glass  tile-fl" aria-hidden="true"></div>
          <div class="diamond glass  tile-fr" aria-hidden="true"></div>
          <div class="diamond glass  tile-tr" aria-hidden="true"></div>

          <svg class="diamond-photo" viewBox="0 0 790 650" aria-hidden="true">
            <defs>
              <clipPath id="about-photo-clip">
                <polygon points="347.3,0 515.47,172.79 347.3,345.58 179.13,172.79" />
                <polygon points="470.42,247.92 580.81,358.31 470.42,468.7 360.03,358.31" />
                <polygon points="224.18,247.92 334.57,358.31 224.18,468.7 113.79,358.31" />
                <polygon points="347.3,371.04 486.78,510.52 347.3,650 207.82,510.52" />
              </clipPath>
            </defs>
            <image
              href="/img/team-mansur.jpg"
              x="92.72"
              y="0"
              width="509.17"
              height="650"
              preserveAspectRatio="xMidYMid meet"
              clip-path="url(#about-photo-clip)"
            />
          </svg>

          <div class="score">
            <strong>1.5K</strong>
            <span>Policy insights completed</span>
          </div>
          <span class="chevron chevron-one" aria-hidden="true"></span>
          <span class="chevron chevron-two" aria-hidden="true"></span>
<!--          <span class="bottom-bar" aria-hidden="true"></span>-->
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
  overflow: visible;
  isolation: isolate;
  z-index: 2;
  padding-bottom: 0;
}
.about::before {
  display: none;
}
.about-grid {
  display: grid;
  grid-template-columns: minmax(560px, 0.96fr) 1.04fr;
  gap: 64px;
  align-items: center;
  width: 1600px;
  max-width: 100%;
}
.about-visual {
  position: relative;
  min-height: 500px;
  overflow: visible;
}
.diamond-stage {
  position: absolute;
  left: 50%;
  top: 5px;
  width: 790px;
  height: 650px;
  transform: translateX(-50%) scale(0.9);
  transform-origin: top center;
  overflow: visible;
  z-index: 3;
}
.diamond {
  position: absolute;
  /* border-radius: 24px; */
  overflow: hidden;
  transform: rotate(45deg);
}
.glass {
  background: linear-gradient(135deg, #ffffff 0%, #eef2fd 45%, #d9e3fb 100%);
  box-shadow: 0 14px 30px rgba(40, 50, 120, 0.08);
}
.faded {
  box-shadow: none;
}
.tile-fl {
  width: 156px;
  height: 156px;
  left: 23px;
  top: 157px;
}
.tile-fr {
  width: 156px;
  height: 156px;
  left: 516px;
  top: 157px;
}
.tile-tr {
  width: 132px;
  height: 132px;
  left: 484px;
  top: 24px;
}
.diamond-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 14px 22px rgba(40, 50, 120, 0.12));
}
.score {
  position: absolute;
  left: -75px;
  top: 390px;
  width: 350px;
  height: 120px;
  padding: 14px 42px 14px 105px;
  z-index: 5;
  color: #fff;
  background: linear-gradient(135deg, #3b3f9e, #2c2f86);
  clip-path: polygon(0 0, 70% 0, 100% 100%, 30% 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 16px 28px rgba(35, 40, 110, 0.28);
}
.score strong {
  display: block;
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.5px;
}
.score span {
  display: block;
  margin-top: 6px;
  font-size: 16px;
  font-weight: 500;
  opacity: 0.92;
}
.chevron {
  position: absolute;
  top: 430px;
  width: 145px;
  height: 168px;
  z-index: 4;
  background: linear-gradient(135deg, #ec2c8a, #f24a9e);
  clip-path: polygon(0 0, 55% 0, 100% 50%, 55% 100%, 0 100%, 45% 50%);
}
.chevron-one {
  left: 205px;
}
.chevron-two {
  left: 285px;
  background: linear-gradient(135deg, #3b3f9e, #2c2f86);
}
.bottom-bar {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 24px;
  background: linear-gradient(90deg, #1e2470, #3b3f9e 60%, #4044a8);
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
  transform: translateY(-24px);
}
@media (max-width: 1050px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .about-visual {
    min-height: 470px;
  }
  .diamond-stage {
    transform: translateX(-50%) scale(0.76);
  }
}
@media (max-width: 760px) {
  .about-visual {
    min-height: 420px;
  }
  .diamond-stage {
    transform: translateX(-50%) scale(0.68);
  }
}
@media (max-width: 620px) {
  .about-visual {
    min-height: 370px;
  }
  .diamond-stage {
    transform: translateX(-50%) scale(0.6);
  }
  .pillars {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 420px) {
  .about-visual {
    min-height: 300px;
  }
  .diamond-stage {
    transform: translateX(-50%) scale(0.48);
  }
}
</style>
