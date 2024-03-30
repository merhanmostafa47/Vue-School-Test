<script setup>
useSeoMeta({
  title: "Vue School",
  description:
    "School is the #1 training resource for Vue.js and has provided the most comprehensive Vue.js video library in the world to over 140,000 developers.",

  // OpenGraph Meta Tags
  ogTitle: "Vue School",
  ogDescription:
    "School is the #1 training resource for Vue.js and has provided the most comprehensive Vue.js video library in the world to over 140,000 developers.",
  ogImage: "/images/logo.svg",
  ogUrl: "https://vue-school.com/",
  ogType: "website",

  // Twitter Meta Tags
  twitterCard: "summary_large_image",
  twitterTitle: "Vue School.io",
  twitterDescription:
    "School is the #1 training resource for Vue.js and has provided the most comprehensive Vue.js video library in the world to over 140,000 developers.",
  twitterImage: "/images/logo.svg",
});

useHead({
  htmlAttrs: { lang: "en" },
  link: [{ rel: "canonical", href: "https://vue-school.com/" }],
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
