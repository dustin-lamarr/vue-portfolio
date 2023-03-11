<template>
  <ul class="space-y-6">
    <CardSectionMain
      v-for="{ title, subtitle, key, style } in sections"
      :class="style"
      :title="title"
      :subtitle="subtitle"
    />
  </ul>
</template>
<script setup>
defineProps({
  sections: Array,
});
const emit = defineEmits(["clicked-section"]);
</script>
