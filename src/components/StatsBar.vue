<script setup>
const stats = [
  { value: '3', label: 'Research centers' },
  { value: '5', label: 'Central Asian states' },
  { value: '10+', label: 'Experts & advisors' },
  { value: '1st', label: 'Of its kind in the region' },
]
</script>

<template>
  <section class="stats">
    <div class="container stats-grid">
      <div v-for="(s, i) in stats" :key="s.label" class="stat" v-reveal="i * 80">
        <span class="num">{{ s.value }}</span>
        <span class="lbl">{{ s.label }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  background: var(--paper);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 44px 32px;
  background: var(--paper-2);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-inline: 14px;
  position: relative;
}
.stat + .stat::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10%;
  height: 80%;
  width: 1px;
  background: var(--line);
}
.num {
  font-family: var(--serif);
  font-size: clamp(2.1rem, 4vw, 3rem);
  line-height: 1;
  background: var(--grad-soft);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.lbl {
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}
@media (max-width: 700px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px 0;
  }
  .stat:nth-child(odd)::before {
    display: none;
  }
}
</style>
