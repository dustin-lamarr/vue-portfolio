<template>
  <nav
    class="flex flex-row bg-black border-b-4 border-punkash-dark w-screen items-end text-punkash tracking-tight text-2xl"
  >
    <ul
      class="text-sm flex space-x-4 text-center justify-center items-end w-full"
      :class="{ 'text-xl space-x-10 ml-10 mb-4': screen }"
      v-for="{ title } in sections"
    >
      <li class="flex">{{ title }}</li>
    </ul>
    <img
      :class="{ 'w-32 mr-0': screen }"
      class="h-auto w-20 ml-auto my-3"
      src="../../assets/punkash_bee_outline.png"
    />
  </nav>
</template>
<script setup>
defineProps({ screen: Boolean, sections: Array });
</script>
