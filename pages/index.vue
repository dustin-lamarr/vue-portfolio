<template>
  <div class="flex flex-col px-1">
    <img
      src="/img/punkash.png"
      v-if="pulse"
      :class="{ 'animate-ping-slow': pulse }"
      class="flex self-center w-60 h-auto"
    />
    <div v-else class="self-center mt-6 text-center space-y-6">
      <ul
        v-for="{ title, subtitle, key, style } in sections"
        :class="style"
        :title="title"
        :subtitle="subtitle"
      >
        <li class="text-center border-2 rounded-lg px-2 py-2">
          <NuxtLink :to="`/${key}`">
            <h3 class="text-3xl">{{ title }}</h3>
            <h4 class="text-2xl">{{ subtitle }}</h4>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
defineProps({
  sections: Array,
  pulse: Boolean,
});
</script>
