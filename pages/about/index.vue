<template>
  <div>
    <CardsInfoCard
      :data="about"
      :header="'About'"
      class="border-purple shadow-purple/50 mb-3"
    />

    <div class="grid grid-cols-2 w-100 mt-3">
      <div class="border-r border-purple px-4 grid grid-flow-row auto-rows-min">
        <CardsSpacer />
        <CardsInfoCard
          :data="navy"
          :header="navy[0].header"
          class="border-punkash shadow-punkash/50"
        />
        <CardsSpacer />
        <CardsSpacer />
        <CardsSpacer />
        <CardsInfoCard
          :data="br"
          :header="br[0].header"
          class="border-punkash shadow-punkash/50"
        />
        <CardsSpacer />
        <CardsInfoCard
          :data="utah"
          :header="utah[0].header"
          class="border-yellow shadow-yellow/50"
        />
      </div>

      <div class="border-l border-purple px-4 grid grid-flow-row auto-rows-min">
        <CardsSpacer />
        <CardsSpacer />
        <CardsInfoCard
          :data="electronics"
          :header="electronics[0].header"
          class="border-punkash shadow-punkash/50"
        />
        <CardsSpacer />
        <CardsInfoCard
          :data="westminster"
          :header="westminster[0].header"
          class="border-yellow shadow-yellow/50"
        />
        <CardsSpacer />
        <CardsSpacer />
        <CardsSpacer />
        <NuxtLink to="/projects">
          <CardsInfoCard
            :header="'Developer'"
            class="border-orange shadow-orange/50 text-orange hover:bg-orange hover:text-black"
          />
        </NuxtLink>
        <CardsSpacer />
      </div>
    </div>
  </div>
</template>
<script setup>
import jobs from "~/json/jobs";

const about = reactive([
  {
    key: "about",
    heading: "About",
    title: "",
    summary: [
      "I'm Dustin. I was in the US Navy for six years. I have been to fifteen different countries. I have an awesome wife and two amazing, regular sized, adult kids. I love movies, prestige television, and music. I'm a pretty big sports   nerd, too. I enjoy basketball (Go Jazz!), soccer (Liverpool FC & Real  Salt Lake), and pro Overwatch (Outlaws). I am renowned for the vibes in my home, my travels, fancy cocktails, and New Wave.",
    ],
  },
]);

const westminster = reactive([
  {
    header: "Westminster College",
    title: "BS - Business Management",
    location: "Salt Lake City, UT",
  },
]);
const utah = reactive([
  {
    header: "University of Utah",
    title: "Professional Certificate - Full Stack Developer",
    location: "Salt Lake City, UT",
  },
]);
const navy = computed(() => {
  const navyArr = [];
  navyArr.push(jobs.find(({ key }) => key === "navy"));
  return navyArr;
});
const electronics = computed(() => {
  const etArray = [];
  etArray.push(jobs.find(({ key }) => key === "electronics"));
  return etArray;
});
const br = computed(() => {
  const brArray = [];
  brArray.push(jobs.find(({ key }) => key === "br"));
  return brArray;
});
</script>
