<template>
  <li class="text-center border-2 rounded-lg px-2 py-2">
    <p class="text-sm">{{ title }}</p>
  </li>
</template>
<script setup>
defineProps({ title: String });
</script>
