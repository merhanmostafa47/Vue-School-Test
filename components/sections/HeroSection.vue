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
  <div>
    <UContainer>
      <div class="grid items-center grid-cols-1 pt-8 lg:grid-cols-2 gap-14">
        <!-- Start:: Section Content -->
        <div class="flex flex-col items-center lg:items-start gap-y-10">
          <h1
            class="text-5xl font-bold !leading-tight text-white md:text-6xl lg:text-start text-center"
            v-html="sectionData.title"
          ></h1>
          <p
            class="text-[22px] font-normal leading-8 text-center text-default-clr lg:text-start lg:w-[95%]"
          >
            {{ sectionData.description }}
          </p>
          <button class="w-44 btn">{{ sectionData.btnText }}</button>
        </div>
        <!-- End:: Section Content -->

        <!-- Start:: Section Image -->
        <div class="mx-auto">
          <NuxtImg
            :placeholder="[60, 8]"
            :src="sectionData.img"
            width="603"
            height="617"
            loading="lazy"
            fit="contain"
            quality="80"
            format="webp"
            alt="hero image"
            title="hero image"
          >
          </NuxtImg>
        </div>
        <!-- End:: Section Image -->
      </div>
    </UContainer>
  </div>
</template>
