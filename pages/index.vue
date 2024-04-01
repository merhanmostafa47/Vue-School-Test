<script setup>
import { dummyData } from "@/helpers/dummyData";
</script>

<template>
  <main>
    <!-- Start:: Hero Section -->
    <HeroSection :section-data="dummyData.hero" />
    <!-- End:: Hero Section -->

    <!-- Start:: About Section -->
    <AboutSection :section-data="dummyData.about" />
    <!-- End:: About Section -->

    <!-- Start:: Pricing Section -->
    <PricingSection :section-data="dummyData.pricing" />
    <!-- End:: Pricing Section -->
  </main>
</template>
