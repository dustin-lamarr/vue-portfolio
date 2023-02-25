<template>
  <MainNav v-if="!state.pulse" :screen="screenWidth" />
  <div class="flex flex-col bg-black h-screen">
    <img
      src="../assets/punkash.png"
      v-if="state.pulse"
      :class="{ 'animate-ping-slow': state.pulse }"
      class="flex self-center w-60 h-auto"
    />
    <div v-else class="space-y-4 self-center mt-6">
      <ul class="w-100">
        <SectionCards title="Dustin LaMarr" subtitle="Full Stack Developer" />
      </ul>
    </div>
  </div>
</template>
<script setup>
const state = reactive({ pulse: true });

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
