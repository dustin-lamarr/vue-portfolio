<template>
  <li class="text-center border-2 rounded-lg px-2 py-2">
    <h3 class="text-2xl">{{ title }}</h3>
    <h4>{{ subtitle }}</h4>
  </li>
</template>
<script setup>
defineProps({ title: String, subtitle: String });
</script>
