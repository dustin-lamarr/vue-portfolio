<template>
  <NavTop v-if="!state.pulse" :sections="sections" />
  <NuxtPage
    :sections="sections"
    :pulse="state.pulse"
    class="p-3 sm:w-4/5 sm:m-auto"
    :class="{ 'sm:m-0': fullWidth }"
  />
</template>
<script setup>
const state = reactive({ pulse: true, activeSection: null, showNav: false });
const route = useRoute();
onMounted(() => {
  if (route.name === "/") {
    setTimeout(() => {
      state.pulse = false;
    }, 5000);
  } else state.pulse = false;
});
const fullWidth = computed(() => {
  if (route.name === "inspiration") {
    return true;
  } else return false;
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
  {
    key: "thoughts",
    title: "Thoughts",
    subtitle: "Dustin, on things",
    style: "border-pink text-pink shadow-lg shadow-pink/50",
  },
];
</script>
