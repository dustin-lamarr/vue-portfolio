<template>
  <div
    class="border rounded-lg shadow-lg px-4 py-3 mt-6 sm:space-y-4"
    @click="openCard"
  >
    <h2 class="text-xl text-center">
      {{ contentData.heading }}
    </h2>
    <ul v-if="state.isExpanded" class="border-t-2 border-punkash">
      <li class="my-1">
        <h3 class="mt-2 text-lg underline decoration-dotted decoration-punkash">
          {{ contentData.title }}
        </h3>
        <p>{{ contentData.content }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup>
defineProps({
  contentData: null,
});
const state = reactive({ isExpanded: false });
function openCard() {
  state.isExpanded = !state.isExpanded;
}
</script>
