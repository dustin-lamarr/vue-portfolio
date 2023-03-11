<template>
  <li class="text-center border-2 rounded-lg px-2 py-2">
    <NuxtLink :to="title">
      <h3 class="text-3xl">{{ title }}</h3>
      <h4 class="text-2xl">{{ subtitle }}</h4>
    </NuxtLink>
  </li>
</template>
<script setup>
defineProps({ title: String, subtitle: String });
</script>
