<template>
  <NavTop
    v-if="!state.pulse"
    :screen="screenWidth"
    :sections="sectionContent"
  />
  <div class="flex flex-col bg-black h-screen px-1">
    <img
      src="../assets/punkash.png"
      v-if="state.pulse"
      :class="{ 'animate-ping-slow': state.pulse }"
      class="flex self-center w-60 h-auto"
    />
    <div v-else class="self-center mt-6 text-center">
      <h1 class="text-blue text-5xl">Dustin LaMarr</h1>
      <h2 class="text-3xl">Full Stack Developer</h2>
      <ul
        class="space-y-4 mt-5"
        v-for="{ title, subtitle, outerStyle } in sectionContent"
      >
        <li
          class="text-center border-2 rounded-lg px-2 py-2"
          :class="outerStyle"
        >
          <h3 class="text-2xl">{{ title }}</h3>
          <h4>{{ subtitle }}</h4>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import sections from "../json/sections.json";
const sectionContent = computed(() => {
  return sections;
});
const state = reactive({ pulse: true });
onMounted(() => {
  setTimeout(() => {
    state.pulse = false;
  }, 5000);
});

const screenWidth = computed(() => {
  return window.innerWidth > 640 ? true : false;
});
</script>
