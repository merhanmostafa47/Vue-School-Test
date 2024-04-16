<script setup>
import { dummyData } from "@/helpers/dummyData";
const query = groq`*[_type == "data"]`;
const { data } = useSanityQuery(query);
</script>

<template>
  <main>
    <!-- Start:: Hero Section -->
    <HeroSection :section-data="data[0].hero" />
    <!-- End:: Hero Section -->

    <!-- Start:: About Section -->
    <AboutSection :section-data="dummyData.about" />
    <!-- End:: About Section -->

    <!-- Start:: Pricing Section -->
    <PricingSection :section-data="dummyData.pricing" />
    <!-- End:: Pricing Section -->

    <!-- Start:: Workshops Section -->
    <WorkshopsSection :section-data="dummyData.workshops" />
    <!-- End:: Workshops Section -->
  </main>
</template>
