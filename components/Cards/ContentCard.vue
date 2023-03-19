<template>
  <div class="border rounded-lg sm:space-y-4" @click="openCard">
    <h2 class="text-xl text-center">
      {{ data.heading }}
    </h2>
    <ul class="border-t-2 border-punkash">
      <li class="my-1 px-2">
        <h3 class="mt-2 text-lg underline decoration-dotted decoration-punkash">
          {{ data.title }}
        </h3>
        <p>{{ data.content }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup>
defineProps({
  data: {},
});
const state = reactive({ isExpanded: false });
function openCard() {
  state.isExpanded = !state.isExpanded;
}
</script>
