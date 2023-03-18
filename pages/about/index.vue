<template>
  <CardsContentCard
    :content-data="about"
    class="border-purple shadow-purple/50 mb-3"
  />
  <div class="flex flex-row space-x-2 w-100">
    <div class="flex flex-col">
      <CardsInfoCard
        :heading="'USN'"
        :data="navy"
        class="border-punkash shadow-punkash/50"
      />
      <CardsInfoCard
        :heading="'Beckett & Robb'"
        :data="navy"
        class="border-punkash shadow-punkash/50"
      />
      <CardsInfoCard
        :data="utah"
        :heading="'Education'"
        class="border-yellow shadow-yellow/50"
      />
      <CardsInfoCard
        :data="paidProjects"
        :heading="'Developer Projects'"
        class="border-orange shadow-orange/50"
      />
    </div>
    <div class="border-2 border-punkash"></div>
    <div class="flex flex-col">
      <CardsInfoCard
        :heading="'Electronics Technician'"
        :data="electronics"
        class="border-punkash shadow-punkash/50"
      />
      <CardsInfoCard
        :data="westminster"
        :heading="'Education'"
        class="border-yellow shadow-yellow/50"
      />
      <CardsInfoCard
        :data="personalProjects"
        :heading="'Developer Projects'"
        class="border-orange shadow-orange/50"
      />
    </div>
  </div>
  <CardsContentCard
    :content-data="interests"
    class="border-blue shadow-blue/50"
  />
</template>
<script setup>
import jobs from "~/json/jobs";
import projects from "~/json/projects.json";

const about = reactive({
  key: "about",
  heading: "About",
  title: "",
  content:
    "I'm Dustin. I was in the US Navy for six years. I have been to fifteen different countries. I have an awesome wife and two amazing, regular sized, adult kids.",
});
const interests = reactive({
  key: "interests",
  heading: "Interests & Hobbies",
  title: "",
  content:
    "I love movies, prestige television, and music. I'm a pretty big sports   nerd, too. I enjoy basketball (Go Jazz!), soccer (Liverpool FC & Real  Salt Lake), and pro Overwatch (Outlaws). I am renowned for the vibes in my home, my travels, fancy cocktails, and New Wave.",
});
const westminster = reactive({
  title: "Westminster College, BS - Business Management",
});
const utah = reactive({
  title: "University of Utah, Professional Certificate - Full Stack Developer",
});
const navy = computed(() => {
  return jobs.find(({ key }) => key === "navy");
});
const electronics = computed(() => {
  return jobs.find(({ key }) => key === "electronics");
});
const br = computed(() => {
  return jobs.find(({ key }) => key === "br");
});
const paidProjects = computed(() => {
  return projects.find(({ type }) => type === "professional");
});
const personalProjects = computed(() => {
  return projects.find(({ type }) => type !== "professional");
});

const route = useRoute();
</script>
