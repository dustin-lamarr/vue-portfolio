<template>
  <div class="flex flex-row">
    <ul class="grid grid-cols-2 gap-6 justify-items-center">
      <li
        class="border rounded-lg shadow-lg px-4 py-3 space-y-2 divide-y sm:space-y-4"
        :class="{
          'border-orange, shadow-orange/50, divide-orange, text-orange ':
            category === 'd',
          'border-purple, shadow-purple/50, divide-purple, text-purple ':
            category === 'a',
        }"
        v-for="{
          img,
          src,
          title,
          url,
          summary,
          index,
          category,
        } in state.inspiration"
        :key="index"
      >
        <h2 class="text-xl font-semibold">{{ title }}</h2>

        <p>{{ summary }}</p>

        <div v-if="img || src" class="bg-white p-2 max-w-fit mt-2">
          <img :src="img ? `/img/${img}` : src" :alt="alt" />
        </div>

        <div class="w-100 flex-nowrap">
          <p class="pt-2 text-lg">URL:</p>
          <NuxtLink :to="url"
            ><p class="mt-1">{{ url }}</p></NuxtLink
          >
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import inspirations from "~/json/inspiration";

const state = reactive({ inspiration: {} });
onMounted(() => {
  state.inspiration = inspirations;
});
</script>
