<script setup>
import BrandMark from './BrandMark.vue'
import CentralAsiaMap from './CentralAsiaMap.vue'
</script>

<template>
  <section id="top" class="hero">
    <div class="grid-bg" aria-hidden="true"></div>
    <div class="glow" aria-hidden="true"></div>

    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="eyebrow on-ink" v-reveal>Tashkent · Uzbekistan · Central Asia</p>

        <h1 class="hero-title" v-reveal="80">
          Towards strategic policy.<br />
          <span class="accent">Governing</span> artificial intelligence.
        </h1>

        <p class="hero-sub" v-reveal="160">
          SPAIGI is an independent, research- and practice-oriented policy think tank with
          government engagement, headquartered in Tashkent — analyzing international and
          regional policy and the opportunities and risks of artificial intelligence to
          secure a sustainable future.
        </p>

        <div class="hero-cta" v-reveal="240">
          <a href="#research" class="btn btn-primary">
            Explore our research
            <span class="arrow">→</span>
          </a>
          <a href="#about" class="btn btn-ghost on-ink">About the institute</a>
        </div>
      </div>

      <div class="hero-visual" v-reveal="200">
        <div class="visual-frame">
          <CentralAsiaMap />
        </div>
        <div class="visual-badge">
          <img src="/img/logo-mark.png" alt="SPAIGI logo" />
          <span>Central Asia-focused think tank</span>
        </div>
      </div>
    </div>

    <div class="container motto-wrap">
      <div class="motto" v-reveal="320">
        <BrandMark :size="22" />
        <span>Towards Strategic Policy&nbsp;&rsaquo;&nbsp; Governing AI&nbsp;&rsaquo;&nbsp; Securing the Sustainable Future</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background: radial-gradient(120% 120% at 80% 0%, var(--ink-3) 0%, var(--ink) 55%);
  color: var(--text-on-ink);
  padding: 170px 0 110px;
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
  top: -180px;
  right: -120px;
  width: 540px;
  height: 540px;
  background: radial-gradient(circle, rgba(195, 244, 153, 0.32), transparent 65%);
  filter: blur(20px);
  z-index: -1;
}
.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
}
.hero-visual {
  position: relative;
}
.visual-frame {
  aspect-ratio: 1 / 1;
}
.visual-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.visual-badge {
  position: absolute;
  left: -18px;
  bottom: -18px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(47, 87, 77, 0.55);
  backdrop-filter: blur(8px);
  border-radius: 999px;
  padding: 8px 18px 8px 8px;
}
.visual-badge img {
  height: 30px;
  width: auto;
  background: #fff;
  padding: 3px 7px;
  border-radius: 8px;
}
.visual-badge span {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--gold-soft);
}
.motto-wrap {
  position: relative;
}
.hero-title {
  font-size: clamp(2.6rem, 6.2vw, 5rem);
  color: var(--text-on-ink-strong);
  margin-top: 22px;
  letter-spacing: -0.02em;
  line-height: 1.04;
}
.accent {
  color: var(--gold-soft);
  font-style: italic;
}
.hero-sub {
  margin-top: 28px;
  font-size: clamp(1.05rem, 1.7vw, 1.28rem);
  max-width: 62ch;
  color: var(--text-on-ink);
}
.hero-cta {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.motto {
  margin-top: 64px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--gold-soft);
  font-size: 0.84rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 600;
  padding-top: 28px;
  border-top: 1px solid var(--line-ink);
}
.motto :deep(.brand-mark) {
  color: var(--gold);
  flex: none;
}

@media (max-width: 900px) {
  .hero {
    padding-top: 130px;
  }
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 44px;
  }
  .hero-visual {
    max-width: 420px;
  }
  .visual-badge {
    left: 12px;
  }
}
@media (max-width: 560px) {
  .motto {
    margin-top: 48px;
    font-size: 0.72rem;
    flex-wrap: wrap;
  }
}
</style>
