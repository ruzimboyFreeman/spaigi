<script setup>
const channels = [
  { label: 'General enquiries', value: 'contact@spaigi.uz', href: 'mailto:contact@spaigi.uz' },
  { label: 'Office of the Director', value: 'president@spaigi.uz', href: 'mailto:president@spaigi.uz' },
  { label: 'Web', value: 'www.spaigi.uz · www.spaigi.org', href: 'https://www.spaigi.uz' },
  { label: 'Location', value: 'Tashkent, Uzbekistan', href: null },
]
</script>

<template>
  <section id="contact" class="section collab">
    <div class="photo-bg" aria-hidden="true"></div>
    <div class="grid-bg" aria-hidden="true"></div>
    <div class="container collab-grid">
      <div class="left">
        <p class="eyebrow on-ink" v-reveal>Collaboration</p>
        <h2 class="section-title on-ink" v-reveal="80">
          Let’s work together.
        </h2>
        <p class="lead light" v-reveal="160">
          Get in touch so we can start working together. If you have any proposals or
          collaboration projects within the mission of SPAIGI, please contact us — or donate
          now and become a partner.
        </p>
        <div class="cta" v-reveal="220">
          <a href="mailto:contact@spaigi.uz" class="btn btn-primary">
            Start a conversation <span class="arrow">→</span>
          </a>
        </div>
      </div>

      <div class="cards">
        <a
          v-for="(c, i) in channels"
          :key="c.label"
          class="ch"
          :class="{ static: !c.href }"
          :href="c.href || undefined"
          v-reveal="i * 80"
        >
          <span class="lbl">{{ c.label }}</span>
          <span class="val">{{ c.value }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.collab {
  position: relative;
  background: var(--paper-2);
  color: var(--text);
  overflow: hidden;
  isolation: isolate;
}
.grid-bg {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(30, 42, 120, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(30, 42, 120, 0.035) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(100% 100% at 100% 0%, #000 20%, transparent 75%);
  z-index: -1;
}
.photo-bg {
  position: absolute;
  top: -160px;
  right: -120px;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.22), transparent 65%);
  filter: blur(40px);
  z-index: -2;
}
.collab-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
}
.section-title.on-ink {
  color: var(--text-strong);
}
.lead.light {
  color: var(--text-muted);
}
.cta {
  margin-top: 32px;
}
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.ch {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 26px 24px;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.ch:not(.static):hover {
  transform: translateY(-3px);
  border-color: var(--gold);
  box-shadow: var(--shadow);
}
.lbl {
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold-deep);
  font-weight: 600;
}
.val {
  color: var(--text-strong);
  font-weight: 500;
  font-size: 1.02rem;
  word-break: break-word;
}
@media (max-width: 860px) {
  .collab-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
@media (max-width: 460px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
