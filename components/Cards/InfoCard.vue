<template>
  <div
    class="border rounded-lg mb-2 py-2 sm:space-y-4 cursor-pointer"
    @click="openCard"
  >
    <h2 class="text-xl text-center leading-none">{{ header }}</h2>
    <ul v-if="state.isExpanded" class="border-t-2 border-punkash">
      <li class="my-1 px-2" v-for="{ title, location, dates, summary } in data">
        <h3 class="mt-2 text-lg">
          {{ title }}
        </h3>
        <h4>{{ location }}</h4>
        <h4>{{ dates }}</h4>
        <ul class="list-disc ml-4">
          <li v-for="points in summary">{{ points }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script setup>
defineProps({
  data: {},
  header: "",
});

const state = reactive({ isExpanded: false });
function openCard() {
  state.isExpanded = !state.isExpanded;
}
</script>
