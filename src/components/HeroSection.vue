<template>
  <section id="top" class="hero">
    <div class="hero-dots hero-dots-a" aria-hidden="true"></div>
    <div class="hero-dots hero-dots-b" aria-hidden="true"></div>

    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="eyebrow" v-reveal>Growth Your Business</p>

        <h1 class="hero-title" v-reveal="80">
          Strategic Policy<br />
          <span class="grad-text">AI Governance</span>
        </h1>

        <p class="hero-sub" v-reveal="160">
          We provide end-to-end policy research, AI governance analysis, and strategic
          foresight that help institutions make evidence-based decisions.
        </p>

        <div class="hero-cta" v-reveal="240">
          <a href="#research" class="btn btn-primary">
            Get Started
            <span class="arrow">→</span>
          </a>
        </div>
      </div>

      <div class="hero-visual" v-reveal="200">
        <div class="shape shape-blue" aria-hidden="true"></div>
        <div class="shape shape-light" aria-hidden="true"></div>
        <div class="shape shape-divider" aria-hidden="true"></div>
        <div class="shape shape-corner" aria-hidden="true"></div>
        <div class="photo-frame">
          <img src="/img/hero-bg.jpg" alt="SPAIGI experts at the Global Forum on AI in Government" />
        </div>
      </div>
    </div>

    <div class="container motto-wrap">
      <div class="motto" v-reveal="320">
        <span>Towards Strategic Policy&nbsp;&rsaquo;&nbsp; Governing AI&nbsp;&rsaquo;&nbsp; Securing the Sustainable Future</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background: var(--paper);
  color: var(--text);
  padding: 128px 0 76px;
  overflow: hidden;
  isolation: isolate;
}
.hero-dots {
  position: absolute;
  z-index: -1;
  background: url('/bg/world-dots.svg') no-repeat center / contain;
  opacity: 0.12;
  pointer-events: none;
}
.hero-dots-a {
  width: 560px;
  height: 420px;
  left: -120px;
  top: 180px;
  transform: rotate(-20deg);
}
.hero-dots-b {
  width: 520px;
  height: 360px;
  right: 260px;
  top: 42px;
  transform: rotate(18deg);
}
.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(360px, 0.78fr) minmax(520px, 1.1fr);
  gap: 52px;
  align-items: center;
  width: 1720px;
  max-width: 100%;
}
/* ---- copy ---- */
.hero-title {
  font-size: clamp(3.2rem, 6vw, 5.7rem);
  color: var(--text-strong);
  margin-top: 14px;
  letter-spacing: -0.045em;
  line-height: 0.98;
}
.grad-text {
  background: var(--grad-soft);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-sub {
  margin-top: 28px;
  font-size: 1rem;
  max-width: 48ch;
  color: var(--text-muted);
  line-height: 1.75;
}
.hero-cta {
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.hero-visual {
  position: relative;
  min-height: 560px;
}
.photo-frame {
  position: absolute;
  left: 100px;
  right: 0;
  top: 28px;
  bottom: 0;
  height: auto;
  border-radius: 8px 0 0 8px;
  box-shadow: 0 28px 70px rgba(12, 37, 122, 0.18);
  overflow: hidden;
  background: #eef2ff;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 95px),
    calc(100% - 116px) 100%,
    0 100%
  );
  z-index: 2;
}
.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 78% center;
  filter: saturate(1.03) contrast(1.02);
}
.photo-frame::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 118%;
  height: 16px;
  background: #fff;
  transform: rotate(-39deg);
  transform-origin: 0 100%;
  pointer-events: none;
  z-index: 3;
}
.shape {
  position: absolute;
  pointer-events: none;
}
.shape-blue {
  top: -105px;
  left: -260px;
  width: 780px;
  height: 450px;
  background: linear-gradient(135deg, #3d63d8, #284fca);
  clip-path: polygon(70% 15%, 100% 15%, 40% 100%, 40% 55%);
  z-index: 5;
}
.shape-light {
  right: auto;
  left: -218px;
  bottom: 0;
  width: 270px;
  height: 220px;
  background: linear-gradient(135deg, #3d63d80f, #1017331f);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  z-index: 3;
}
.shape-divider {
  top: -26px;
  bottom: 20px;
  left: 100px;
  width: 20px;
  background: #fff;
  z-index: 4;
}
.shape-corner {
  top: 28px;
  left: 100px;
  width: 150px;
  height: 150px;
  background: #fff;
  z-index: 4;
}
/* ---- motto ---- */
.motto-wrap {
  position: relative;
}
.motto {
  margin-top: 42px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--text-muted);
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 600;
  padding-top: 28px;
  border-top: 1px solid var(--line);
}
@media (max-width: 900px) {
  .hero {
    padding-top: 112px;
  }
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero-visual {
    min-height: 360px;
  }
  .photo-frame {
    inset: 40px 0 auto;
    width: 100%;
    height: 280px;
    bottom: auto;
    border-radius: 8px;
    clip-path: none;
  }
  .photo-frame::after,
  .shape {
    display: none;
  }
}
@media (max-width: 560px) {
  .motto {
    margin-top: 44px;
    font-size: 0.72rem;
    flex-wrap: wrap;
  }
  .hero-title {
    font-size: 3rem;
  }
}
</style>
