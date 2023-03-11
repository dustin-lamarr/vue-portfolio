<template>
  <nav
    class="flex flex-row border-b-4 border-punkash-dark w-screen items-end text-punkash tracking-tight text-2xl"
  >
    <div
      class="flex flex-col content-end sm:flex sm:flex-row sm:mx-6 sm:space-x-8 sm:justify-around"
    >
      <div class="flex flex-col">
        <p class="text-blue">Dustin LaMarr</p>
        <p class="text-white">Full Stack Developer</p>
      </div>
      <ul class="flex flex-row my-3 space-x-4 sm:space-x-8">
        <li
          class="text-center border-2 rounded-lg px-2 py-2"
          v-for="{ title, style } in sections"
          :title="title"
          :class="style"
          v-if="showLinks"
        >
          <p class="text-sm sm:text-xl">{{ title }}</p>
        </li>
      </ul>
    </div>
    <NuxtLink to="/" class="ml-auto my-3">
      <img class="h-auto w-20 sm:w-32 sm:mr-6" src="/img/punkash.png" />
    </NuxtLink>
  </nav>
</template>
<script setup>
defineProps({
  sections: Array,
  pulse: Boolean,
});
const route = useRoute();
const showLinks = computed(() => {
  if (route.name === "projects" || route.name === "about") {
    return true;
  } else return false;
});
</script>
