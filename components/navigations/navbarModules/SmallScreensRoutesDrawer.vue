<script setup>
// Props
defineProps({
  routes: {
    type: Array,
    required: true,
  },

  routesDrawerIsOpen: {
    type: Boolean,
    required: true,
  },
});

// Emits
const emit = defineEmits(["close-menu"]);

const dropdownUIConfig = {
  background: "bg-main-bg/90",
  shadow: "shadow-none",
  ring: "ring-grey-clr",
  padding: "p-2",
  item: {
    padding: "px-2 py-1.5",
    label: "capitalize text-sm font-normal",
    active: "bg-grey-clr text-white",
    inactive: "text-default-clr ",
  },
};

const dropdownBtnUIConfig = {
  font: "font-normal",
  variant: {
    solid:
      "shadow-none capitalize outline-none text-base text-default-clr bg-transparent hover:text-main-clr hover:bg-transparent transition-all duration-300",
  },
};
</script>

<template>
  <div
    class="absolute inset-0 z-20 w-full h-0 overflow-hidden transition-all duration-300 bg-main-bg/90 backdrop-blur-sm"
    :class="{ 'h-screen overflow-auto': routesDrawerIsOpen }"
  >
    <button aria-label="Close menu" @click="$emit('close-menu')">
      <Icon
        name="mingcute:close-fill"
        alt="menu icon"
        width="20"
        height="20"
        class="mx-8 mt-8 text-white"
      />
    </button>

    <ul class="flex flex-col items-center justify-center gap-y-7">
      <li v-for="(route, idx) in routes" :key="route.idx">
        <UDropdown
          v-if="route.children"
          :items="route.children"
          :popper="{ placement: 'bottom-start' }"
          :ui="dropdownUIConfig"
        >
          <UButton :label="route.label" :ui="dropdownBtnUIConfig">
            <template #trailing>
              <Icon
                name="eva:arrow-down-fill"
                alt="arrow down"
                width="14"
                height="14"
              />
            </template>
          </UButton>
        </UDropdown>

        <NuxtLink
          v-else
          :to="route.to"
          class="text-base font-normal capitalize transition-all duration-300 bg-transparent outline-none text-default-clr hover:text-main-clr"
        >
          {{ route.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
