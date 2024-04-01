<script setup>
defineEmits(["toggle-menu"]);
</script>

<template>
  <button
    aria-label="Toggle mobile menu"
    @click="$emit('toggle-menu')"
    class="flex xl:hidden"
  >
    <Icon
      name="mingcute:menu-fill"
      alt="menu icon"
      width="28"
      height="28"
      class="text-white"
      @click="$emit('toggle-menu')"
    />
  </button>
</template>
