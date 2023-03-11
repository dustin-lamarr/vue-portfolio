<template>
  <div class="flex flex-col">
    <h1>Projects</h1>
    <ul class="space-y-6">
      <li
        class="border rounded-lg border-orange text-orange shadow-lg shadow-orange/50 p-2"
        v-for="{
          img,
          key,
          header,
          url,
          summary,
          tech,
          github,
          alt,
        } in projectsObj"
      >
        <h2>{{ header }}</h2>
        <p class="leading-normal">{{ summary }}</p>
        <img :src="`/img/${img}`" />
      </li>
    </ul>
  </div>
</template>
<script setup>
import projects from "~/json/projects";
const projectsObj = computed(() => {
  return projects;
});
</script>
