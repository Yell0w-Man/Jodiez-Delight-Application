<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import logoImg from '../../assets/images/jodiez-delight-logo.webp'

const route = useRoute()

const WHATSAPP_NUMBER = '2349130519189'
const WHATSAPP_MESSAGE =
  "Hello Jodiez Delight, I'd like to make an enquiry about your products."

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Explore More', to: '/explore' },
]
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-[#4A1D0C]/10 bg-[#FFF8F1]/95 shadow-sm backdrop-blur-md"
    @keydown.esc="closeMenu">
    <div
      class="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-6 lg:px-8">
      <!-- Brand logo -->
      <RouterLink to="/"
        class="flex min-w-0 shrink items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0414A]"
        aria-label="Jodiez Delight home" @click="closeMenu">
        <img :src="logoImg" alt="Jodiez Delight — Cakes, Pastries and Small Chops"
          class="h-14 w-auto max-w-full object-contain object-left sm:h-20 sm:max-w-[240px] lg:h-24 lg:max-w-[280px]" />
      </RouterLink>

      <!-- Desktop navigation -->
      <nav
        class="hidden shrink-0 items-center gap-1 rounded-full border border-[#4A1D0C]/10 bg-[#4A1D0C]/5 p-1.5 md:flex"
        aria-label="Main navigation">
        <RouterLink to="/" end class="rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300" :class="route.path === '/'
          ? 'bg-[#F0414A] text-white shadow-sm'
          : 'text-[#4A1D0C] hover:bg-[#D4A72C]/20'">
          Home
        </RouterLink>

        <RouterLink to="/explore" class="rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300" :class="route.path.startsWith('/explore')
          ? 'bg-[#F0414A] text-white shadow-sm'
          : 'text-[#4A1D0C] hover:bg-[#D4A72C]/20'">
          Explore More
        </RouterLink>
      </nav>

      <!-- WhatsApp CTA and mobile menu -->
      <div class="flex shrink-0 items-center gap-2 sm:gap-3">
        <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" aria-label="Contact Jodiez Delight on WhatsApp"
          class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-[#123B20] shadow-sm transition duration-200 hover:bg-[#1FBA59] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4A1D0C] sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3 lg:px-5">
          <!-- WhatsApp icon -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6 shrink-0"
            aria-hidden="true">
            <path
              d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.65a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.46-8.41ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.85 9.85 0 0 1-1.51-5.26c0-5.47 4.45-9.92 9.93-9.92a9.84 9.84 0 0 1 7.02 2.91 9.84 9.84 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.3 1.26.48 1.69.61.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>

          <span class="hidden whitespace-nowrap text-sm font-bold sm:inline">
            Contact on WhatsApp
          </span>
        </a>

        <!-- Mobile menu toggle -->
        <button type="button"
          class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#4A1D0C] transition hover:bg-[#4A1D0C]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0414A] md:hidden"
          :aria-expanded="isMenuOpen" aria-controls="mobile-menu"
          :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'" @click="isMenuOpen = !isMenuOpen">
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" class="h-6 w-6" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>

          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" class="h-6 w-6" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile navigation -->
    <nav v-if="isMenuOpen" id="mobile-menu"
      class="border-t border-[#4A1D0C]/10 bg-[#FFF8F1] px-4 py-3 shadow-lg md:hidden" aria-label="Mobile navigation">
      <RouterLink v-for="link in navLinks" :key="link.label" :to="link.to"
        class="mb-1 block rounded-full px-4 py-3 font-bold transition-colors duration-200" :class="route.path === link.to
          ? 'bg-[#F0414A] text-white'
          : 'text-[#4A1D0C] hover:bg-[#D4A72C]/15'" @click="closeMenu">
        {{ link.label }}
      </RouterLink>
    </nav>
  </header>
</template>
