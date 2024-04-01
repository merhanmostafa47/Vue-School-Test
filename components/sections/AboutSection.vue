<script setup>
// Section Props
const props = defineProps({
  sectionData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section
    class="relative py-32 after:absolute after:content-[''] after:bg-[url('/images/shapes/shape-1.svg')] after:h-full after:w-full after:bg-coverv after:bg-no-repeat after:inset-0 before:absolute before:content-[''] before:bg-[url('/images/shapes/shape-2.svg')] before:h-full before:w-full before:bg-coverv before:bg-no-repeat before:inset-0 after:z-0 before:z-0 z-10"
  >
    <UContainer class="relative z-10">
      <!-- Start:: Section Content -->
      <div class="card-container">
        <div
          class="flex flex-col items-center gap-6 py-16 md:items-start lg:items-center md:gap-10 card md:flex-row"
        >
          <div class="md:min-w-24 lg:min-w-36 lg:mx-14">
            <NuxtImg
              :placeholder="[60, 8]"
              :src="sectionData.img"
              width="280"
              height="247"
              loading="lazy"
              fit="contain"
              quality="80"
              alt="About image"
              title="logo"
              class="h-auto lg:w-[280px] md:w-[152px] w-[85px]"
            />
          </div>

          <div class="flex flex-col gap-4 md:gap-8">
            <h2
              class="text-2xl font-bold text-white md:text-[40px] text-center md:text-start leading-tight"
            >
              {{ sectionData.title }}
            </h2>
            <p
              class="text-sm md:text-[22px] lg:w-[98%] font-normal !leading-8 text-center text-default-clr md:text-start"
            >
              {{ sectionData.description }}
            </p>
          </div>
        </div>
      </div>
      <!-- End:: Section Content -->

      <!-- Start:: Partners Section -->
      <PartnersSection :section-data="sectionData.partners" />
      <!-- End:: Partners Section -->

      <!-- Start:: About Section -->
      <StatisticsSection :section-data="sectionData.statistics" />
      <!-- End:: About Section -->
    </UContainer>
  </section>
</template>
