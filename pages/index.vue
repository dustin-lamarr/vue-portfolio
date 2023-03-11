<template>
  <div class="self-center mt-6 text-center">
    <SectionMain :sections="sections" />
  </div>
</template>
<script setup>
defineProps({
  screen: Boolean,
  sections: Array,
});
</script>
