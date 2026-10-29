<template>
  <div class="bg-background text-on-background font-body-md">
    <Header />

    <main>
      <Hero />
      <Collections />
      <About />
      <CTA />
      <!-- <Testimonials /> -->
      <!-- <HowItWorks /> -->
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/navbar.vue'
import Hero from '@/components/hero.vue'
import Collections from '@/components/collections.vue'
import About from '@/components/about.vue'
import CTA from '@/components/CTA.vue'
// import Testimonials from '@/components/Testimonials.vue'
// import HowItWorks from '@/components/HowItWorks.vue'
</script>
