<script setup>
const socials = [
  {
    label: "facebook",
    icon: "mdi:facebook",
    to: "https://facebook.com/",
  },
  {
    label: "twitter",
    icon: "mdi:twitter",
    to: "https://twitter.com/",
  },
  {
    label: "github",
    icon: "mdi:github",
    to: "https://github.com/",
  },
  {
    label: "linkedin",
    icon: "mdi:linkedin",
    to: "https://linkedin.com/",
  },
  {
    label: "youtube",
    icon: "mdi:youtube",
    to: "https://youtube.com/",
  },
];

const footerLinks = [
  {
    title: "PRODUCTS",
    routes: [
      {
        id: 1,
        label: "Courses",
      },
      {
        id: 2,
        label: "Workshops",
      },
      {
        id: 3,
        label: "Vue Masterclass",
      },
      {
        id: 4,
        label: "Mastering Nuxt",
      },
    ],
  },
  {
    title: "PRICING",
    routes: [
      {
        id: 1,
        label: "Plans",
      },
    ],
  },
  {
    title: "CONNECT WITH US",
    routes: [
      {
        id: 1,
        label: "About Us",
      },
      {
        id: 2,
        label: "Careers",
      },
      {
        id: 3,
        label: "Contact Us",
      },
    ],
  },
  {
    title: "EVENTS",
    routes: [
      {
        id: 1,
        label: "Vue.js Nation",
      },
      {
        id: 2,
        label: "Nuxt Nation",
      },
      {
        id: 3,
        label: "Vue.js Forge",
      },
    ],
  },
  {
    title: "CORPORATE",
    routes: [
      {
        id: 1,
        label: "Corporate Training",
      },
      {
        id: 2,
        label: "Developer Recruitment",
      },
      {
        id: 3,
        label: "Course Development",
      },
      {
        id: 4,
        label: "On-site Workshops",
      },
      {
        id: 5,
        label: "Consulting",
      },
      {
        id: 6,
        label: "Affiliate Programs",
      },
    ],
  },
  {
    title: "RESOURCES",
    routes: [
      {
        id: 1,
        label: "Articles",
      },
    ],
  },
];

const footerLinks1 = footerLinks.slice(0, 3);
const footerLinks2 = footerLinks.slice(3, 6);
</script>

<template>
  <footer class="py-20">
    <UContainer>
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
        <!-- Start:: Footer Logo & Description & Social Links -->
        <div class="flex flex-col items-center lg:col-span-2 lg:items-start">
          <NuxtLink to="/">
            <NuxtImg
              :placeholder="[60, 8]"
              src="/images/logo.svg"
              width="268"
              height="88"
              loading="lazy"
              fit="contain"
              quality="80"
              alt="logo"
              title="vue school logo"
            />
          </NuxtLink>
          <p
            class="lg:max-w-[82%] text-base text-center text-white lg:text-start my-10 lg:mt-[85px] lg:mb-[60px]"
          >
            Thanks to fine people like you, Vue School can proudly sponsor Evan
            and the future of Vue.js by being a Platinum Patreon
          </p>

          <div
            class="flex flex-col items-center lg:items-start gap-y-6 md:gap-y-8"
          >
            <p class="text-base font-medium uppercase text-grey-clr">
              FOLLOW US IN SOCIAL MEDIA
            </p>
            <ul class="flex items-center gap-x-4 md:gap-x-9">
              <li
                v-for="(social, idx) in socials"
                :key="idx"
                class="w-14 h-14 rounded-full bg-[#2B2F44] flex items-center justify-center group hover:from-[#0bd88f] hover:to-[#00C2FF] transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_5px_rgba(11,216,143,0.3)] hover:bg-gradient-to-r"
              >
                <NuxtLink
                  :to="social.to"
                  target="_blank"
                  :aria-label="`${social.label} social link`"
                >
                  <Icon
                    :name="social.icon"
                    width="28"
                    height="28"
                    class="text-grey-clr text-grey-dlr group-hover:text-dark-clr"
                  />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <!-- End:: Footer Logo & Description & Social Links -->

        <!-- Start:: Footer Links -->
        <div
          class="flex flex-col flex-wrap justify-between gap-8 lg:justify-start md:flex-row lg:flex-col md:gap-y-12"
        >
          <div
            v-for="(list, idx) in footerLinks1"
            :key="idx"
            class="flex flex-col items-center md:items-start"
          >
            <h3 class="routes_list_title">
              {{ list.title }}
            </h3>
            <ul class="route_list">
              <li v-for="(route, idx) in list.routes" :key="route.id">
                <NuxtLink to="/" class="route_list_item">{{
                  route.label
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="flex flex-col flex-wrap justify-between gap-8 lg:justify-start lg md:flex-row lg:flex-col md:gap-y-12"
        >
          <div
            v-for="(list, idx) in footerLinks2"
            :key="idx"
            class="flex flex-col items-center md:items-start"
          >
            <h3 class="routes_list_title">
              {{ list.title }}
            </h3>
            <ul class="route_list">
              <li v-for="(route, idx) in list.routes" :key="route.id">
                <NuxtLink to="/" class="route_list_item">
                  {{ route.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <!-- End:: Footer Links -->
      </div>
    </UContainer>
  </footer>
</template>

<style scoped>
.routes_list_title {
  @apply font-medium text-[22px] text-grey-clr uppercase mb-5;
}

.route_list {
  @apply flex flex-col gap-3.5 md:items-start items-center;
}
.route_list_item {
  @apply text-white text-base capitalize transition-none md:text-start text-center duration-300  hover:text-main-clr;
}
</style>
