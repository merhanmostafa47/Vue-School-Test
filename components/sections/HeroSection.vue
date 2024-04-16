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
  <section>
    <UContainer>
      <div class="grid items-center grid-cols-1 pt-8 lg:grid-cols-2 gap-14">
        <!-- Start:: Section Content -->
        <div
          class="flex flex-col items-center lg:items-start gap-y-10"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <h1
            v-if="sectionData.title"
            class="text-5xl font-bold !leading-tight text-white md:text-6xl lg:text-start text-center"
            v-html="sectionData.title"
            data-aos="fade-up"
            data-aos-duration="1100"
          ></h1>
          <p
            class="text-[22px] font-normal leading-8 text-center text-default-clr lg:text-start lg:w-[95%]"
            data-aos="fade-up"
            data-aos-duration="1200"
            v-if="sectionData.description"
          >
            {{ sectionData.description }}
          </p>
          <button
            class="w-44 btn"
            data-aos="fade-up"
            data-aos-duration="1300"
            v-if="sectionData.btn"
          >
            {{ sectionData.btn }}
          </button>
        </div>
        <!-- End:: Section Content -->

        <!-- Start:: Section Image -->
        <div class="mx-auto" data-aos="fade-left" data-aos-duration="1200">
          <sanity-image
            :asset-id="sectionData.img.asset._ref"
            width="603"
            height="617"
            loading="eager"
            quality="80"
            format="webp"
            :alt="sectionData.img.attribution"
            :title="sectionData.img.attribution"
          />
        </div>
        <!-- End:: Section Image -->
      </div>
    </UContainer>
  </section>
</template>

<style>
h1 {
  span {
    @apply text-main-clr;
  }
}
</style>
