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
  background: var(--ink-2);
  color: var(--text-on-ink);
  border-top: 1px solid var(--line-ink);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-block: 38px;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-inline: 8px;
  position: relative;
}
.stat + .stat::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10%;
  height: 80%;
  width: 1px;
  background: var(--line-ink);
}
.num {
  font-family: var(--serif);
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: var(--gold-soft);
  line-height: 1;
}
.lbl {
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-on-ink);
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
