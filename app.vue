<template>
  <NavTop v-if="!state.pulse" :sections="sections" />
  <NuxtPage :sections="sections" :pulse="state.pulse" class="p-3 sm:p-6" />
</template>
<script setup>
const state = reactive({ pulse: true, activeSection: null, showNav: false });

onMounted(() => {
  setTimeout(() => {
    state.pulse = false;
  }, 5000);
});

const sections = [
  {
    key: "projects",
    title: "Projects",
    subtitle: "Personal and Professional",
    style: "border-orange text-orange shadow-lg shadow-orange/50",
  },
  {
    key: "about",
    title: "About",
    subtitle: "More about Dustin",
    style: "border-purple text-purple shadow-lg shadow-purple/50",
  },
];
</script>
