<script setup>
// Section Props
const props = defineProps({
  sectionData: {
    type: Object,
    required: true,
  },
});

import CountUp from "vue-countup-v3";
</script>

<template>
  <div class="py-20">
    <div
      class="grid items-center justify-between grid-cols-1 gap-y-8 xl:grid-cols-2"
    >
      <!-- Start:: Section Title -->
      <div
        class="flex flex-col items-center xl:items-start gap-y-3"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <h2
          class="font-medium text-center text-base/tight md:text-2xl xl:text-start gradient-text"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="1000"
        >
          {{ sectionData.title }}
        </h2>
        <h3
          class="text-5xl font-bold text-center md:text-6xl/snug xl:text-start text-default-clr"
          v-html="sectionData.description"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="1000"
        ></h3>
      </div>
      <!-- End:: Section Title -->

      <!-- Start:: Section Statistics Items -->
      <div
        class="flex items-center justify-center gap-6 md:gap-x-16"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="1000"
      >
        <div
          v-for="(item, idx) in sectionData.items"
          :key="idx"
          class="flex flex-col items-center gap-3"
          data-aos="zoom-in"
          data-aos-duration="1200"
          :data-aos-delay="idx * 800"
        >
          <count-up
            :options="{ enableScrollSpy: true, scrollSpyOnce: true }"
            :end-val="item.number"
            :autoplay="true"
            :duration="10"
            :delay="idx * 1000"
            class="font-medium text-[64px] md:text-[90px] gradient-text"
          ></count-up>

          <div class="flex items-center gap-x-[10px] mx-auto">
            <Icon
              :name="item.icon"
              class="w-4 h-4 md:w-5 md:h-5 text-default-clr"
            />
            <span class="text-sm capitalize text-default-clr">
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>
      <!-- Start:: Section Statistics Items -->
    </div>
  </div>
</template>
