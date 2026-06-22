<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
  { label: 'SPAIGI Think Tank', to: '/' },
  { label: 'Centers & Projects', to: '/centers' },
  { label: 'Research & Publications', to: '/research' },
  { label: 'SPAIGI Academy', to: '/academy' },
  { label: 'Collaboration', to: '/collaboration' },
]

const scrolled = ref(false)
const open = ref(false)

const onScroll = () => (scrolled.value = window.scrollY > 24)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const go = () => (open.value = false)
</script>

<template>
  <header class="hdr" :class="{ solid: scrolled }">
    <div class="container hdr-inner">
      <router-link :to="{ path: '/', hash: '#top' }" class="brand" @click="go">
        <img src="/img/logo-mark.png" alt="SPAIGI logo" class="brand-logo" />
        <span class="brand-text">
          <strong>SPAIGI</strong>
          <small>Strategic Policy &amp; AI Governance</small>
        </span>
      </router-link>

      <nav class="nav" :class="{ open }">
        <router-link v-for="l in links" :key="l.label" :to="l.to" @click="go">{{ l.label }}</router-link>
      </nav>

      <button class="burger" :class="{ open }" @click="open = !open" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.hdr {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  border-bottom: 1px solid transparent;
  /* keep the bar pinned on mobile (avoids fixed + backdrop-filter lag on iOS) */
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  will-change: transform;
}
.hdr.solid {
  background: rgba(246, 244, 238, 0.86);
  -webkit-backdrop-filter: saturate(140%) blur(14px);
  backdrop-filter: saturate(140%) blur(14px);
  border-bottom-color: var(--line);
}
.hdr-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 74px;
  max-width: 100%;
  padding-inline: 20px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--ink);
  margin-right: auto;
}
.brand-logo {
  height: 40px;
  width: auto;
  background: #fff;
  padding: 4px 9px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(47, 87, 77, 0.16);
}
.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}
.brand-text strong {
  font-family: var(--serif);
  font-size: 1.25rem;
  letter-spacing: 0.04em;
  color: var(--text-on-ink-strong);
}
.brand-text small {
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-on-ink);
  margin-top: 5px;
}
.hdr.solid .brand-text strong {
  color: var(--text-strong);
}
.hdr.solid .brand-text small {
  color: var(--text-muted);
}
.nav {
  display: flex;
  align-items: center;
  gap: 26px;
}
.nav a {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-on-ink);
  position: relative;
  transition: color 0.18s ease;
}
.hdr.solid .nav a {
  color: var(--text);
}
.nav a:not(.nav-cta)::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: var(--gold);
  transition: width 0.22s ease;
}
.nav a:not(.nav-cta):hover {
  color: var(--gold-soft);
}
.hdr.solid .nav a:not(.nav-cta):hover {
  color: var(--text-strong);
}
.nav a:not(.nav-cta):hover::after {
  width: 100%;
}
.nav-cta {
  padding: 9px 20px;
  border-radius: 999px;
  background: var(--ink);
  color: var(--text-on-ink-strong) !important;
  font-weight: 600;
  transition: background 0.18s ease, transform 0.18s ease;
}
.nav-cta:hover {
  background: var(--ink-3);
  transform: translateY(-1px);
}
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: 0;
  cursor: pointer;
  padding: 8px;
}
.burger span {
  width: 24px;
  height: 2px;
  background: var(--text-on-ink-strong);
  transition: transform 0.25s ease, opacity 0.25s ease, background 0.25s ease;
}
.hdr.solid .burger span {
  background: var(--ink);
}
.burger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 1024px) {
  .burger {
    display: flex;
  }
  .nav {
    position: fixed;
    inset: 74px 0 auto 0;
    flex-direction: column;
    gap: 4px;
    align-items: stretch;
    background: var(--paper);
    border-bottom: 1px solid var(--line);
    padding: 18px 28px 26px;
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }
  .nav.open {
    transform: none;
    opacity: 1;
    pointer-events: auto;
  }
  .nav a {
    padding: 12px 0;
    border-bottom: 1px solid var(--line);
    font-size: 1rem;
    color: var(--text); /* panel has a light background */
  }
  .nav-cta {
    text-align: center;
    margin-top: 10px;
    border-bottom: 0 !important;
  }
}
</style>
