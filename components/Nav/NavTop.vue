<template>
  <nav
    class="flex flex-row bg-black border-b-4 border-punkash-dark w-screen items-end text-punkash tracking-tight text-2xl"
  >
    <div class="flex flex-col" :class="{ 'ml-6': screen }">
      <p class="text-blue text-l">Dustin LaMarr</p>
      <p class="text-white text-l">Full Stack Developer</p>
      <ul class="flex flex-row space-x-4 my-3">
        <CardSectionTop
          v-for="{ title, style } in sections"
          :title="title"
          :class="style"
          v-if="showNav"
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
defineProps({ screen: Boolean, sections: Array, showNav: Boolean });
</script>
