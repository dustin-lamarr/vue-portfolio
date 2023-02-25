<template>
  <nav
    class="flex flex-row bg-black fixed top-0 left-0 border-b-4 border-punkash-dark w-screen items-end text-punkash tracking-tight text-2xl"
  >
    <ul
      class="text-sm flex space-x-4 text-center"
      :class="{ 'text-xl space-x-10 ml-10 mb-4': screen }"
    >
      <li>Projects</li>
      <li>Mission</li>
      <li>TBD</li>
    </ul>

    <img
      :class="{ 'w-32 mr-0': screen }"
      class="h-auto w-20 ml-auto my-3"
      src="../assets/punkash_bee_outline.png"
    />
  </nav>
</template>
<script>
export default {
  props: {
    screen: null,
  },
};
</script>
