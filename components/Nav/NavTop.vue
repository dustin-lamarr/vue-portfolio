<template>
  <nav
    class="flex flex-row border-b-4 border-punkash-dark w-100 items-end text-punkash text-2xl mt-2 px-2"
  >
    <div
      class="flex flex-col content-end sm:flex sm:flex-row sm:mx-6 sm:space-x-8 sm:justify-around"
    >
      <div class="flex flex-col mb-1">
        <NuxtLink to="/">
          <p class="text-blue text-3xl tracking-tight -mb-2 sm:text-5xl">
            Dustin LaMarr
          </p>
          <p class="text-white text-lg tracking-tight sm:text-3xl">
            Full Stack Developer
          </p>
        </NuxtLink>
      </div>
      <ul class="flex flex-row mb-2 space-x-4 sm:space-x-8 sm:mb-1">
        <li
          class="self-center border-2 rounded-lg px-1"
          v-for="{ title, style, key } in sections"
          :title="title"
          :class="style"
          v-if="showLinks"
        >
          <NuxtLink :to="`/${key}`">
            <p class="text-sm p-1 sm:text-xl sm:p-2">{{ title }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtLink to="/" class="ml-auto">
      <img class="h-auto w-12 sm:w-32 sm:mr-6" src="/img/punkash.png" />
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
  if (route.name !== "index") {
    return true;
  } else return false;
});
</script>
