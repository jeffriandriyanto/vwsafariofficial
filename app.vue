<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const layout = "default";
</script>

<style>
html {
  scroll-behavior: smooth;
}

html.v-overlay-scroll-blocked {
  position: unset !important;
}

body {
  width: 100vw !important;
}


/* offset scroll behavior */
a.anchor {
  display: block;
  position: relative;
  top: -35px;
  visibility: hidden;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
