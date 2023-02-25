<template>
  <MainNav v-if="!state.pulse" :screen="screenWidth" :sections="sections" />
  <div class="flex flex-col bg-black h-screen px-1">
    <img
      src="../assets/punkash.png"
      v-if="state.pulse"
      :class="{ 'animate-ping-slow': state.pulse }"
      class="flex self-center w-60 h-auto"
    />
    <div v-else class="self-center mt-6 text-center">
      <h1 class="text-blue text-2xl">Dustin LaMarr</h1>
      <h2>Full Stack Developer</h2>
      <ul class="space-y-4 mt-5" v-for="{ title, subtitle, color } in sections">
        <SectionCards :title="title" :subtitle="subtitle" :color="color" />
      </ul>
    </div>
  </div>
</template>
<script setup>
const state = reactive({ pulse: true });
const sections = [
  { title: "Skilzzz", subtitle: "The tools I've used", color: "punkash" },
  {
    title: "Projects",
    subtitle: "The personal and professional projects I've worked on",
    color: "purple",
  },
  {
    title: "About",
    subtitle: "Find out more about Dustin",
    color: "pink",
  },
];
onMounted(() => {
  setTimeout(() => {
    console.log("mounted timeout");
    state.pulse = false;
  }, 5000);
});

const screenWidth = computed(() => {
  return window.innerWidth > 640 ? true : false;
});
</script>
