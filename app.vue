<script setup>
useSeoMeta({
  title: "Vue School",
  description:
    "School is the #1 training resource for Vue.js and has provided the most comprehensive Vue.js video library in the world to over 140,000 developers.",

  // OpenGraph Meta Tags
  ogTitle: "Vue School.io",
  ogDescription:
    "School is the #1 training resource for Vue.js and has provided the most comprehensive Vue.js video library in the world to over 140,000 developers.",
  ogSiteName: "Vue School.io",
  ogImage: "/images/logo.svg",
  ogUrl: "https://vue-school-test.vercel.app/",
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
  meta: [{
    name: 'theme-color',
    content: '#212435'
  }],
  link: [
    { rel: "canonical", href: "https://vue-school-test.vercel.app/" },
    {
      rel: "icon",
      href: "/favicon.ico",
      sizes: "any",
    },
    {
      rel: "icon",
      href: "/icon.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-icon.png",
      sizes: "180x180",
    },
  ],
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
