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
    <NuxtMarquee :autoFill="true" :speed="20" :pauseOnHover="true">
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
      />
    </NuxtMarquee>
  </div>
</template>
