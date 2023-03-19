<template>
  <div class="border rounded-lg p-3 space-y-2 sm:space-y-4">
    <ul>
      <li>
        <h2 class="text-xl text-pink">{{ data.title }}</h2>
      </li>
      <li>
        <p>{{ data.dates }}</p>
      </li>
    </ul>
    <ul class="border-t-2 border-pink">
      <li class="mt-3">
        <p>{{ data.content }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup>
defineProps({
  data: {},
});
</script>
