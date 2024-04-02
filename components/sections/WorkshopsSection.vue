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
  <section class="py-32">
    <UContainer>
      <!-- Start:: Section Header -->
      <div
        class="flex items-center justify-between mb-14 lg:mb-20"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h2
          class="text-[40px] font-bold text-center md:text-6xl/snug text-white"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
        >
          Available Workshops
        </h2>
        <NuxtLink
          class="hidden btn lg:flex"
          to="/"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
        >
          See all the workshops
        </NuxtLink>
      </div>
      <!-- End:: Section Header -->

      <!-- Start:: Workshops Slider -->
      <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="1"
        :spaceBetween="30"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :breakpoints="{
          '1024': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }"
      >
        <SwiperSlide v-for="(item, idx) in sectionData" :key="item.id">
          <div
            class="rounded-[30px] from-purple-clr/50 to-pink-clr/50 bg-gradient-to-r transition-all group duration-500 ease-linear overflow-hidden hover:from-purple-clr hover:to-pink-clr"
            data-aos="zoom-in"
            data-aos-duration="1200"
            :data-aos-delay="idx * 400"
          >
            <!-- Start: Workshop Date -->
            <div class="flex items-center py-6 px-9 gap-x-3">
              <Icon
                name="majesticons:calendar"
                width="18"
                height="20"
                class="text-default-clr"
              />
              <span class="text-base font-medium text-default-clr">
                {{ item.date }}
              </span>
            </div>
            <!-- End: Workshop Date -->

            <!-- Start: Workshop details -->
            <div
              class="flex flex-col p-9 gap-y-5 bg-[rgba(43,47,68,0.9)] group-hover:bg-[rgba(43,47,68,0.5)]"
            >
              <!--  Start: Workshop hours & type  -->
              <div class="flex items-center gap-x-9">
                <div class="flex items-center gap-x-2">
                  <Icon
                    name="icon-park-solid:play"
                    width="20"
                    height="20"
                    class="text-grey-clr group-hover:text-default-clr"
                  />
                  <span
                    class="text-sm text-grey-clr group-hover:text-default-clr"
                  >
                    {{ item.type }}
                  </span>
                </div>
                <div class="flex items-center gap-x-2">
                  <Icon
                    name="ph:clock-fill"
                    width="20"
                    height="20"
                    class="text-grey-clr group-hover:text-default-clr"
                  />
                  <span
                    class="text-sm text-grey-clr group-hover:text-default-clr"
                  >
                    {{ item.hours }}
                  </span>
                </div>
              </div>
              <!--  End: Workshop hours & type  -->

              <!--  Start: Workshop details  -->
              <div>
                <h3 class="mb-3 text-2xl font-medium text-default-clr">
                  {{ item.title }}
                </h3>
                <p
                  class="text-sm/relaxed text-grey-clr group-hover:text-default-clr"
                >
                  {{ item.description }}
                </p>
              </div>
              <!--  End: Workshop details  -->

              <!--  Start: Workshop Instructor details  -->
              <div class="flex items-center gap-x-3">
                <NuxtImg
                  :placeholder="[60, 8]"
                  :src="item.instructor_img"
                  width="24"
                  height="24"
                  loading="lazy"
                  fit="cover"
                  quality="80"
                  :alt="`${item.instructor} photo`"
                  :title="`${item.instructor} photo`"
                />
                <h4 class="text-sm text-grey-clr group-hover:text-default-clr">
                  {{ item.instructor }}
                </h4>
              </div>
              <!--  End: Workshop Instructor details  -->
            </div>
            <!-- End: Workshop details -->
          </div>
        </SwiperSlide>
      </Swiper>
      <!-- End:: Workshops Slider -->

      <!-- Start::  workshops button in responsive -->
      <NuxtLink
        class="flex w-64 mx-auto btn lg:hidden mt-14"
        to="/"
        data-aos="zoom-in-up"
        data-aos-duration="1200"
      >
        See all the workshops
      </NuxtLink>
      <!-- End::  workshops button in responsive -->
    </UContainer>
  </section>
</template>
