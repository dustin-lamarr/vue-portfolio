<template>
  <NuxtLayout
    :screen="screenWidth"
    :sections="sections"
    :showNav="state.showNav"
    :pulse="state.pulse"
  >
    <div class="flex flex-col bg-black h-screen px-1">
      <img
        src="./assets/punkash.png"
        v-if="state.pulse"
        :class="{ 'animate-ping-slow': state.pulse }"
        class="flex self-center w-60 h-auto"
      />
      <NuxtPage
        :screen="screenWidth"
        :sections="sections"
        :showNav="state.showNav"
        v-if="!state.pulse"
      />
    </div>
  </NuxtLayout>
</template>
<script setup>
const state = reactive({ pulse: true, activeSection: null, showNav: false });

onMounted(() => {
  setTimeout(() => {
    state.pulse = false;
  }, 5000);
});
const screenWidth = computed(() => {
  return window.innerWidth > 640 ? true : false;
});
const sections = [
  {
    key: "tools",
    title: "Tools",
    subtitle: "The tools I've used",
    style: "border-orange text-orange shadow-lg shadow-orange/50",
  },
  {
    key: "projects",
    title: "Projects",
    subtitle: "My personal and professional projects",
    style: "border-purple text-purple shadow-lg shadow-purple/50",
  },
  {
    key: "about",
    title: "About",
    subtitle: "Find out more about Dustin",
    style: "border-pink text-pink shadow-lg shadow-pink/50",
  },
];
</script>
