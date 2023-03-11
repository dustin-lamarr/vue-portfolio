<template>
  <NuxtLayout :screen="screenWidth" :sections="sections" :pulse="state.pulse">
    <NuxtPage
      :screen="screenWidth"
      :sections="sections"
      :pulse="state.pulse"
      class="bg-black h-screen"
    />
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
