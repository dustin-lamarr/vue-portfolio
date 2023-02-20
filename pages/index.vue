<template>
  <div class="flex flex-col md:flex-row bg-black h-screen place-content-center">
    <MainNav v-show="!logoPulse" />
    <img
      src="../assets/punkash.png"
      v-if="logoPulse"
      :class="{ 'animate-pulse': logoPulse }"
    />
    <div
      class="flex flex-col items-center bg-punkash-dark opacity-50 shadow-inner shadow-punkash"
    >
      <NuxtLink
        to="https://www.ashlylamarr.com"
        target="_blank"
        class="text-punkash text-2xl"
      >
        Ashly LaMarr
      </NuxtLink>
      <NuxtLink to="" target="_blank" class="text-punkash text-2xl">
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
};
</script>
