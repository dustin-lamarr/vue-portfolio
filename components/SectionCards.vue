<template>
  <li
    class="text-center border-2 rounded-lg py-2 px-4"
    :class="`border-${color}`"
  >
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>
  </li>
</template>
<script setup>
defineProps({ title: String, subtitle: String, color: String });
</script>
