<template>
  <div
    class="border rounded-lg shadow-lg px-4 py-3 mt-6 sm:space-y-4"
    @click="openCard"
  >
    <h2 class="text-xl text-center">
      {{ heading }}
    </h2>
    <ul v-if="state.isExpanded" class="border-t-2 border-punkash">
      <li class="my-1">
        <h3 class="mt-2 text-lg underline decoration-dotted decoration-punkash">
          {{ data.title }}
        </h3>

        <ul class="list-disc ml-4 marker:text-punkash">
          <li v-for="points in data.summary">{{ points }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script setup>
defineProps({
  data: {},
  heading: null,
});
const state = reactive({ isExpanded: false });
function openCard() {
  state.isExpanded = !state.isExpanded;
}
</script>
