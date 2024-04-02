<script setup>
// Section Props
const props = defineProps({
  sectionData: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="hidden my-16 lg:block">
    <NuxtMarquee :speed="20" :pauseOnHover="true" :autoFill="true">
      <NuxtImg
        v-for="(item, idx) in sectionData"
        :key="idx"
        :placeholder="[60, 8]"
        :src="item.img"
        width="118"
        height="40"
        loading="lazy"
        fit="contain"
        quality="80"
        :alt="item.name"
        :title="item.name"
        class="mx-8"
        data-aos="zoom-in"
        data-aos-duration="1200"
        :data-aos-delay="idx * 400"
      />
    </NuxtMarquee>
  </div>
</template>
