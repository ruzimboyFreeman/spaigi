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
  background: #fff;
  transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  /* keep the bar pinned on mobile (avoids fixed + backdrop-filter lag on iOS) */
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  will-change: transform;
}
.hdr.solid {
  background: #fff;
}
.hdr-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 74px;
  width: 1720px;
  max-width: 100%;
  margin-inline: auto;
  padding-inline: 20px;
}
.brand {
  display: flex;
  align-items: center;
  color: var(--ink);
  margin-right: auto;
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
  color: var(--text-strong);
}
.hdr.solid .brand-text strong {
  color: var(--text-strong);
}
.brand-text small {
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-top: 5px;
}
.hdr.solid .brand-text small {
  color: var(--text-muted);
}
.nav {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  border-radius: 9px;
  background: #fff;
}
.nav a {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0;
  color: var(--text-strong);
  position: relative;
  padding: 9px 14px;
  border-radius: 6px;
  transition: color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;
}
.hdr.solid .nav a {
  color: var(--text-strong);
}
.nav a:hover {
  color: var(--gold-deep);
  background: #fff;
}
.hdr.solid .nav a:hover {
  color: var(--gold-deep);
}
.nav a.router-link-exact-active {
  color: var(--gold-deep);
  background: transparent;
  box-shadow: none;
}
.nav a.router-link-exact-active::after {
  content: '';
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 2px;
  height: 2px;
  background: var(--gold);
  border-radius: 2px;
}
.hdr.solid .nav a.router-link-exact-active {
  color: var(--gold-deep);
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
  background: var(--ink);
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
    gap: 6px;
    align-items: stretch;
    background: var(--paper);
    border-bottom: 1px solid var(--line);
    border-radius: 0;
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
    padding: 12px 14px;
    border: 0;
    font-size: 0.94rem;
    color: var(--text);
  }
}
</style>
