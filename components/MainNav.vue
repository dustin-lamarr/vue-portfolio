<template>
  <nav
    class="flex flex-row bg-black fixed top-0 left-0 border-b-4 border-punkash-dark w-screen items-end text-punkash tracking-tight text-2xl"
  >
    <div v-if="screen">
      <ul class="flex space-x-3 ml-4 mb-4">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
    <img
      :class="{ 'w-32 mr-0 ml-auto': screen }"
      class="h-auto w-24 mx-auto my-3"
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
