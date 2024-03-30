<template>
  <div class="logo_wrapper">
    <NuxtLink to="/">
      <NuxtImg
        :placeholder="[60, 8]"
        presets="default"
        src="/images/logo.svg"
        width="170"
        height="56"
        loading="eager"
        alt="logo"
        title="vue school logo"
      />
    </NuxtLink>
  </div>
</template>
