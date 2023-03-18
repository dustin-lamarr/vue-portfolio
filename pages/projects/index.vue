<template>
  <div class="flex flex-col">
    <ul class="space-y-6">
      <li
        class="border rounded-lg border-orange shadow-lg shadow-orange/50 px-4 py-3 space-y-2 divide-y divide-orange sm:space-y-4"
        v-for="{
          img,
          key,
          project,
          url,
          summary,
          tech,
          github,
          alt,
        } in state.projectData"
        :key="key"
        :id="key"
      >
        <h2 class="text-xl text-orange font-semibold">{{ project }}</h2>

        <ul class="pt-2">
          <li v-for="summaries in summary">
            <p>{{ summaries }}</p>
          </li>
        </ul>
        <NuxtLink :to="url" v-if="img">
          <div class="bg-white p-2 max-w-fit">
            <img :src="`/img/${img}`" :alt="alt" />
          </div>
        </NuxtLink>

        <div class="w-100 flex-nowrap">
          <p class="text-orange pt-2 text-lg">URL:</p>
          <NuxtLink :to="url"
            ><p class="mt-1">{{ url }}</p></NuxtLink
          >
        </div>

        <ul class="pt-2">
          <li><h3 class="text-orange text-lg">Built Using:</h3></li>
          <li v-for="techs in tech">
            <p>{{ techs }}</p>
          </li>
        </ul>

        <div class="w-100 flex-nowrap" v-if="github">
          <p class="text-orange pt-2 text-lg">Repo:</p>
          <NuxtLink :to="github"
            ><p class="mt-1">{{ github }}</p></NuxtLink
          >
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import projects from "~/json/projects";
const state = reactive({ projectData: {} });
onMounted(() => {
  state.projectData = projects;
});
</script>
