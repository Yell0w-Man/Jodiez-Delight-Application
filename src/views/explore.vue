<script setup>
import Header from '@/components/navbar.vue'
import ExploreHero from '@/components/explore/exploreHero.vue'
import productGrid from '@/components/explore/productGrid.vue'
import Custom from '@/components/explore/custom.vue'
import whyChoose from '@/components/explore/whyChooseUs.vue'
import FAQ from '@/components/explore/FAQ.vue'
import finalCTA from '@/components/explore/final-CTA.vue'
import Footer from '@/components/footer.vue'
</script>

<template>
  <Header />

  <main>
    <ExploreHero />
    <productGrid />
    <Custom/>
    <whyChoose /> 
    <FAQ />
    <finalCTA />
  </main>

   <Footer />
</template>