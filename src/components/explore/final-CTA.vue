
<script setup>
import { getWhatsAppUrl } from '@/utils/whatsapp.js'

// WhatsApp message for customers
const whatsappUrl = getWhatsAppUrl(
  "Hello Jodiez Delight! I'd love to place an order or make an enquiry."
)
</script>

<template>
  <section class="bg-[#FFF8F1] px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
    <div
      class="relative mx-auto max-w-7xl overflow-hidden rounded-3xl
      bg-[#F0414A] px-6 py-16 text-center shadow-lg
      sm:px-12 lg:px-20 lg:py-24"
    >

      <!-- Decorative Background Elements -->
      <div
        class="pointer-events-none absolute -right-16 -top-20
        h-64 w-64 rounded-full border-[35px] border-white/10"
      ></div>

      <div
        class="pointer-events-none absolute -bottom-24 -left-16
        h-72 w-72 rounded-full border-[40px] border-white/10"
      ></div>

      <!-- CTA Content -->
      <div class="relative z-10 mx-auto max-w-3xl">

        <span
          class="mb-6 inline-block rounded-full border border-white/30
          bg-white/10 px-5 py-2 text-xs font-semibold
          tracking-[0.2em] text-white sm:text-sm"
        >
          LET'S MAKE SOMETHING DELICIOUS
        </span>

        <h2
          class="font-['Bowlby_One'] text-3xl leading-tight
          text-white sm:text-4xl lg:text-5xl"
        >
          Ready to Make Your Moments
          <span class="text-[#FFE1A8]">Sweeter?</span>
        </h2>

        <p
          class="mx-auto mt-6 max-w-2xl text-sm leading-7
          text-white/90 sm:text-lg sm:leading-8"
        >
          From delicious treats to beautifully crafted custom creations,
          Jodiez Delight is ready to make your next occasion special.
        </p>

        <!-- WhatsApp Button -->
        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-9 inline-flex items-center justify-center gap-3
          rounded-full bg-white px-8 py-4 font-bold
          text-[#4A1D0C] shadow-md transition-all duration-300
          hover:-translate-y-1 hover:bg-[#FFE1A8] hover:shadow-xl
          focus-visible:outline-2 focus-visible:outline-offset-4
          focus-visible:outline-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-6 w-6"
          >
            <path
              d="M20.52 3.48A11.87 11.87 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55
               4.15 1.6 5.96L.05 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.48h.01c6.58 0 11.93-5.35 
               11.93-11.93 0-3.19-1.24-6.19-3.5-8.43ZM12.09 21.8h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.71.97.99-3.62-.23-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.47 4.45-9.92 9.92-9.92a9.84 9.84 0 0 1 7.02 2.91 9.84 9.84 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.95 9.92Zm5.45-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"
            />
          </svg>

          Order on WhatsApp

        </a>

        <p class="mt-6 text-sm font-medium text-white/80">
          Have something special in mind? We'd love to hear from you.
        </p>

      </div>
    </div>
  </section>
</template>
