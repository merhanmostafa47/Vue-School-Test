<script setup>
// Props
defineProps({
  routes: {
    type: Array,
    required: true,
  },
});

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
  <ul class="items-center hidden xl:flex gap-x-5">
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
</template>
