<script setup>
defineProps({ size: { type: Number, default: 38 } })
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden="true"
    class="brand-mark"
  >
    <circle cx="24" cy="24" r="23" stroke="currentColor" stroke-width="1.4" opacity="0.35" />
    <path
      d="M24 4c8 6 8 34 0 40C16 38 16 10 24 4Z"
      stroke="currentColor"
      stroke-width="1.4"
      opacity="0.55"
    />
    <path d="M4 24h40M9 14h30M9 34h30" stroke="currentColor" stroke-width="1.4" opacity="0.35" />
    <path
      d="M24 15l3.4 6.1 6.8 1.1-4.9 4.9 1.1 6.8L24 30.8 17.6 34l1.1-6.8-4.9-4.9 6.8-1.1L24 15Z"
      fill="currentColor"
    />
  </svg>
</template>
