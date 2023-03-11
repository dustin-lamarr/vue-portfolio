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
        <li
          class="text-center border-2 rounded-lg px-2 py-2"
          v-for="{ title, style } in sections"
          :title="title"
          :class="style"
          v-if="showLinks"
          :screen="screen"
        >
          <p class="text-sm" :class="{ 'text-xl': screen }">{{ title }}</p>
        </li>
      </ul>
    </div>
    <NuxtLink to="/" class="ml-auto my-3">
      <img
        :class="{ 'w-32 mr-6': screen }"
        class="h-auto w-20"
        src="../../assets/punkash.png"
      />
    </NuxtLink>
  </nav>
</template>
<script setup>
defineProps({
  screen: Boolean,
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
