<script setup>
// Section Props
const props = defineProps({
  sectionData: {
    type: Object,
    required: true,
  },
});

// Range UI Config
const rangeValueRefs = ref(props.sectionData.map((e) => e.range));
const min = ref(5);
const max = ref(20);

const rangeUIConfig = {
  ring: "focus-visible:ring-main-clr focus-visible:ring-offset-2",
  progress: {
    background: "bg-main-clr",
  },
  thumb: {
    color: "text-main-clr ",
    background:
      "[&::-webkit-slider-thumb]:bg-main-clr  [&::-moz-range-thumb]:bg-main-clr",
  },
  track: {
    background:
      "[&::-webkit-slider-runnable-track]:bg-grey-clr [&::-moz-range-track]:bg-main-clr",
  },
};
</script>

<template>
  <section
    class="py-12 relative before:absolute after:absolute after:content-[''] after:bg-[url('/images/shapes/shape-3.svg')] after:w-full after:bg-cover after:bg-no-repeat after:inset-0 after:top-0 md:after:top-[4%] lg:after:top-[8%] before:content-[''] before:bg-[url('/images/shapes/shape-4.svg')] before:w-full before:top-[22%] md:before:top-[26%] lg:before:top-[35%] before:bg-cover before:bg-no-repeat before:inset-0 after:z-0 before:z-0 z-10"
  >
    <UContainer class="relative z-10">
      <h3
        class="mx-auto mb-12 md:mb-16 xl:mb-32 text-[40px] font-bold text-center md:text-6xl/snug text-default-clr lg:max-w-[70%]"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        Discounted <span class="gradient-text">Corporate Training</span> Bundles
      </h3>

      <!-- Start:: Section Content -->
      <div class="grid justify-center grid-cols-1 gap-8 xl:grid-cols-3">
        <div
          class="card-container"
          v-for="(item, idx) in sectionData"
          data-aos="fade-up"
          data-aos-duration="1200"
          :data-aos-delay="idx * 400"
        >
          <!--  Start:: Pricing Card -->
          <div class="flex flex-col !px-6 gap-y-10 card !py-10">
            <!-- Start:: Card Header -->
            <div class="flex items-center gap-4">
              <NuxtImg
                :placeholder="[60, 8]"
                :src="item.icon"
                width="32"
                height="32"
                loading="lazy"
                fit="contain"
                quality="80"
                :alt="`${item.name} plan icon`"
                :title="`${item.name} plan icon`"
              />

              <h4 class="font-bold text-[22px] text-default-clr">
                {{ item.name }}
              </h4>
            </div>
            <!-- End:: Card Header -->

            <!-- Start:: Card Body -->
            <div>
              <p class="mb-6 text-base text-main-clr">
                Includes 1 year access to:
              </p>

              <!-- Start:: Card Features -->
              <ul class="flex flex-col gap-4">
                <li
                  v-for="(feature, idx) in item.features"
                  :key="idx"
                  class="flex items-start justify-between text-base text-default-clr"
                  :class="{
                    'opacity-20': !feature.content,
                  }"
                >
                  <div class="flex gap-4">
                    <Icon
                      :name="
                        feature.content
                          ? 'icon-park-solid:check-one'
                          : 'icon-park-solid:close-one'
                      "
                      class="w-5 h-5 text-main-clr"
                    />

                    <span
                      class="text-sm text-default-clr"
                      :class="{ 'font-bold': feature.featured }"
                    >
                      {{ feature.title }}
                    </span>
                  </div>
                  <UTooltip
                    :text="feature.content"
                    :popper="{ offsetDistance: 8 }"
                    v-if="feature.content"
                  >
                    <Icon
                      name="heroicons:exclamation-circle-16-solid"
                      alt="menu icon"
                      width="18"
                      height="18"
                      class="text-grey-clr"
                    />
                  </UTooltip>
                </li>
              </ul>
              <!-- End:: Card Features -->

              <!-- Start:: Item Course-->
              <div
                v-if="item.featuredCourse"
                class="rounded-[10px] my-6 bg-main-clr/20 px-6 py-4 flex items-center justify-start gap-4"
              >
                <NuxtImg
                  :placeholder="[60, 8]"
                  :src="item.featuredCourse.img"
                  width="48"
                  height="48"
                  loading="lazy"
                  fit="contain"
                  quality="80"
                  :alt="`${item.featuredCourse.name} image`"
                  :title="`${item.featuredCourse.name}image`"
                />

                <div class="flex flex-col items-start">
                  <p class="font-medium text-grey-clr">Enough time to watch:</p>
                  <h4 class="text-lg font-medium text-white">
                    {{ item.featuredCourse.name }}
                  </h4>
                </div>
              </div>
              <!-- End:: Item Course-->

              <!-- Start:: Card price-->
              <div
                class="flex flex-col items-start justify-center p-6 my-6 rounded-2xl bg-main-bg gap-y-6"
              >
                <h4 class="flex items-center gap-[10px]">
                  <span class="font-bold text-white text-[40px]">
                    {{ item.price }}
                  </span>
                  <span class="text-grey-clr"> / seat / month </span>
                </h4>

                <div class="w-full">
                  <span class="block mb-4 text-base font-bold text-white">
                    How many licenses do you need?
                  </span>

                  <URange
                    v-model="rangeValueRefs[idx]"
                    size="sm"
                    :min="min"
                    :max="max"
                    :ui="rangeUIConfig"
                    aria-label="range slider"
                  />
                  <div class="flex items-center justify-between mt-2">
                    <span class="text-sm font-medium text-grey-clr">{{
                      min
                    }}</span>
                    <span class="text-sm font-medium text-grey-clr">{{
                      max
                    }}</span>
                  </div>
                </div>

                <div class="flex items-center w-full gap-x-5">
                  <div
                    class="bg-[#0E0E1033] py-1 px-3.5 rounded-lg flex items-center justify-center gap-x-2.5"
                  >
                    <NuxtImg
                      :placeholder="[60, 8]"
                      src="/images/icons/seats.svg"
                      width="18"
                      height="18"
                      loading="lazy"
                      fit="contain"
                      quality="80"
                      alt="seats icon"
                      title="seats icon"
                    />

                    <span class="text-2xl font-bold text-light-clr">
                      {{ item.seats }}
                    </span>
                    <span class="text-base text-grey-clr"> seat </span>
                  </div>
                  <span class="text-base font-medium text-main-clr">
                    {{ item.discount }} discount
                  </span>
                </div>
              </div>
              <!-- End:: Card price-->

              <!-- Start:: Card Action Buttons -->
              <div class="flex flex-col items-center gap-y-6">
                <button class="w-full btn">Start Learning</button>
                <NuxtLink to="/" class="font-medium text-center text-main-clr">
                  Refer your manager
                </NuxtLink>
              </div>

              <!-- End:: Card Action Buttons -->
            </div>
            <!-- End:: Card Body -->
          </div>
          <!--  End:: Pricing Card -->
        </div>
      </div>
      <!-- End:: Section Content -->
    </UContainer>
  </section>
</template>
