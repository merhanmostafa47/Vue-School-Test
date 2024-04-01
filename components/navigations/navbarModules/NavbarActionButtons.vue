<template>
  <div class="items-center hidden md:flex gap-x-8">
    <NuxtLink
      to="/"
      class="text-base font-normal text-white capitalize transition-all duration-300 bg-transparent outline-none hover:text-main-clr"
    >
      Log in
    </NuxtLink>

    <div
      class="p-[2px] rounded-[10px] overflow-hidden hover:text-main-clr bg-gradient-to-r from-[#0BD88F] to-[#00C2FF] w-[140px] h-14 flex items-center justify-center group hover:bg-gradient-to-b transition-all duration-300"
    >
      <NuxtLink
        to="/"
        class="h-full w-full text-base flex items-center justify-center font-medium capitalize bg-main-bg group-hover:bg-transparent group-hover:text-dark-clr rounded-[8px] text-main-clr transition-all duration-300"
      >
        sign up
      </NuxtLink>
    </div>
  </div>
</template>
