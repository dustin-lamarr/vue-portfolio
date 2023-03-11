<template>
  <NavTop
    v-if="!pulse"
    :screen="screen"
    :sections="sections"
    :showNav="showNav"
  />
  <slot />
</template>
<script setup>
defineProps({
  screen: Boolean,
  sections: Array,
  showNav: Boolean,
  pulse: Boolean,
});
</script>
