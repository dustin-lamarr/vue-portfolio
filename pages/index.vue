<template>
  <MainNav v-if="!logoPulse" :screen="screenWidth" />
  <div class="flex flex-col bg-black h-screen place-content-center">
    <img
      src="../assets/punkash.png"
      v-if="logoPulse"
      :class="{ 'animate-ping-slow': logoPulse }"
      class="flex self-center w-60 h-auto"
    />
    <div
      v-if="!logoPulse"
      class="flex flex-col text-center items-center space-y-4"
    >
      <img class="h-auto w-3/4 sm:w-1/2" src="../assets/punkash_wordmark.png" />
      <p class="text-2xl">IS</p>
      <div class="flex"></div>
      <NuxtLink
        to="https://www.ashlylamarr.com"
        target="_blank"
        class="text-3xl tracking-tight sm:text-6xl hover:text-purple"
      >
        Ashly LaMarr
      </NuxtLink>
      <div class="flex"></div>
      <NuxtLink
        to=""
        target="_blank"
        class="text-3xl tracking-tight sm:text-6xl hover:text-blue"
      >
        Dustin LaMarr
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.logoPulse = false;
    }, 5000);
  },
  data() {
    return {
      logoPulse: true,
    };
  },
  computed: {
    screenWidth() {
      return window.innerWidth > 640 ? true : false;
    },
  },
};
</script>
