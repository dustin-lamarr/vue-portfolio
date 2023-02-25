<template>
  <li class="text-center">
    <h1 class="text-blue text-2xl">{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </li>
</template>
<script setup>
defineProps({ title: String, subtitle: String });
</script>
