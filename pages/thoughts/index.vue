<template>
  <div class="flex flex-col">
    <h1 class="text-pink text-center text-xl font-bold mb-3">
      Digitized Electrical Impulses
    </h1>
    <ul>
      <li v-for="post in posts" class="mb-6">
        <CardsContentCard :data="post" class="border-pink" />
      </li>
    </ul>
  </div>
</template>
<script setup>
import thoughts from "~/json/thoughts";
const posts = computed(() => {
  return thoughts;
});
</script>
