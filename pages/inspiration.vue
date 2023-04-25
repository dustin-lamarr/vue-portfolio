<template>
  <div class="flex flex-col">
    <ul class="space-y-6">
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

        <div v-if="img" class="bg-white p-2 max-w-fit mt-2">
          <img :src="`/img/${img}`" :alt="alt" />
        </div>

        <NuxtLink :to="url">
          <h3>{{ url }}</h3>
        </NuxtLink>
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
