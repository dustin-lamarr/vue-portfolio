<template>
  <nav
    class="flex flex-row bg-black border-b-4 border-punkash-dark w-screen items-end text-punkash tracking-tight text-2xl"
  >
    <div
      class="flex flex-col place-content-end"
      :class="{ 'flex flex-row ml-6 space-x-4 ': screen }"
    >
      <p class="text-blue">Dustin LaMarr</p>
      <p class="text-white">Full Stack Developer</p>
      <ul class="flex flex-row my-3 space-x-4">
        <CardSectionTop
          v-for="{ title, style } in sections"
          :title="title"
          :class="style"
          v-if="showNav"
          :screen="screen"
        />
      </ul>
    </div>
    <img
      :class="{ 'w-32 mr-6': screen }"
      class="h-auto w-20 ml-auto my-3"
      src="../../assets/punkash.png"
    />
  </nav>
</template>
<script setup>
defineProps({
  screen: Boolean,
  sections: Array,
  showNav: Boolean,
  pulse: Boolean,
});
</script>
