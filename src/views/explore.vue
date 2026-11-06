<script setup>
import Header from '@/components/navbar.vue'
import ExploreHero from '@/components/explore/exploreHero.vue'
import productGrid from '@/components/explore/productGrid.vue';
import Custom from '@/components/explore/custom.vue';
</script>

<template>
  <Header />

  <main>
    <ExploreHero />
    <productGrid />
    <Custom/>
  </main>
</template>