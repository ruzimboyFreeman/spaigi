<script setup>
const cols = [
  {
    title: 'Institute',
    links: [
      { label: 'Think Tank', to: { path: '/', hash: '#about' } },
      { label: 'Centers & Projects', to: '/centers' },
      { label: 'Team', to: { path: '/', hash: '#team' } },
    ],
  },
  {
    title: 'Work',
    links: [
      { label: 'Research & Publications', to: '/research' },
      { label: 'SPAIGI Academy', to: '/academy' },
      { label: 'Collaboration', to: '/collaboration' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'contact@spaigi.uz', href: 'mailto:contact@spaigi.uz' },
      { label: 'president@spaigi.uz', href: 'mailto:president@spaigi.uz' },
      { label: 'Tashkent, Uzbekistan', to: { path: '/', hash: '#contact' } },
    ],
  },
]
</script>

<template>
  <footer class="ftr">
    <div class="container">
      <div class="top">
        <div class="brand-col">
          <router-link :to="{ path: '/', hash: '#top' }" class="brand">
            <strong>SPAIGI</strong>
          </router-link>
          <p>
            International Strategic Policy and AI Governance Institute — an independent think
            tank advancing strategic policy and responsible AI across Uzbekistan and Central
            Asia.
          </p>
        </div>

        <nav class="cols">
          <div v-for="c in cols" :key="c.title" class="col">
            <h5>{{ c.title }}</h5>
            <ul>
              <li v-for="l in c.links" :key="l.label">
                <router-link v-if="l.to" :to="l.to">{{ l.label }}</router-link>
                <a v-else :href="l.href">{{ l.label }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="bottom">
        <span>© 2026 International Institute for Strategic Policy and AI Governance. All rights reserved.</span>
        <span class="motto">Towards Strategic Policy · Governing AI · Securing the Sustainable Future</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ftr {
  position: relative;
  background: linear-gradient(120deg, #1a2470 0%, #3d63d8 52%, #ec2c8a 100%);
  color: var(--text-on-ink);
  padding: 84px 0 34px;
  overflow: hidden;
}
.ftr::before {
  content: '';
  position: absolute;
  top: -160px;
  right: -120px;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.45), transparent 65%);
  filter: blur(40px);
  pointer-events: none;
}
.ftr .container {
  position: relative;
}
.top {
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  gap: 60px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--line-ink);
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  margin-bottom: 18px;
}
.brand strong {
  font-family: var(--serif);
  font-size: 1.5rem;
  letter-spacing: 0.05em;
  color: var(--text-on-ink-strong);
}
.brand-col p {
  font-size: 0.95rem;
  max-width: 42ch;
}
.cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.col h5 {
  margin: 0 0 16px;
  font-family: var(--sans);
  font-size: 0.76rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #d6dcff;
}
.col ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 11px;
}
.col a {
  font-size: 0.93rem;
  color: var(--text-on-ink);
  transition: color 0.18s ease;
}
.col a:hover {
  color: #fff;
}
.bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 26px;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.62);
}
.motto {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.82);
}
@media (max-width: 860px) {
  .top {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
@media (max-width: 560px) {
  .cols {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
