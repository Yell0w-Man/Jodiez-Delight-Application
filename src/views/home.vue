<template>
  <div class="bg-background text-on-background font-body-md">
    <Header />

    <main>
      <Hero />
      <Collections />
      <About />
      <Testimonial />
      <CTA />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/navbar.vue'
import Hero from '@/components/hero.vue'
import Collections from '@/components/collections.vue'
import About from '@/components/about.vue'
import Testimonial from '@/components/testimonial.vue'
import CTA from '@/components/CTA.vue'
import Footer from '@/components/footer.vue'
</script>
