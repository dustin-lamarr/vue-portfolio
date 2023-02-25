<template>
  <nav
    class="flex flex-row bg-black border-b-4 border-punkash-dark w-screen items-end text-punkash tracking-tight text-2xl"
  >
    <ul
      class="text-sm flex space-x-4 text-center justify-center items-end w-full"
      :class="{ 'text-xl space-x-10 ml-10 mb-4': screen }"
    >
      <li class="flex">Projects</li>
      <li>
        <img
          :class="{ 'w-32 mr-0': screen }"
          class="h-auto w-20 ml-auto my-3"
          src="../assets/punkash_green_bee_dark.png"
        />
      </li>
      <li class="flex">About</li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    screen: null,
  },
};
</script>
