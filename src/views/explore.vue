<script setup>
import Header from '@/components/navbar.vue'
import ExploreHero from '@/components/explore/exploreHero.vue'
import productGrid from '@/components/explore/productGrid.vue';
</script>

<template>
  <Header />

  <main>
    <ExploreHero />
    <productGrid />
  </main>
</template>