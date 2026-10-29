
<script setup>
const whatsappNumber = '2349130519189'

const message =
  "Hello Jodiez Delight, I'd like to make an enquiry about your products."

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
</script>

<template>
  <section class="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
    <div
      class="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#4A1D0C] px-6 py-14 text-center shadow-xl sm:px-12 sm:py-20 lg:px-20"
    >
      <!-- Decorative background accents -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F0414A]/15 blur-2xl sm:h-72 sm:w-72"
      ></div>

      <div
        aria-hidden="true"
        class="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[#D4A72C]/15 blur-2xl"
      ></div>
      <div class="relative z-10 mx-auto max-w-3xl">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-[#D4A72C]/40 bg-[#D4A72C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5CD69] sm:text-sm"
        >
          <span class="material-symbols-outlined text-lg">favorite</span>
          Made with love, just for you
        </span>

        <h2
          class="mt-7 text-4xl leading-tight font-bold text-[#FFF8F1] sm:text-5xl lg:text-6xl"
        >
          Every Sweet Moment
          <span class="mt-2 block text-[#F0414A]">
            Deserves Something Special.
          </span>
        </h2>

        <p
          class="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#FFF8F1]/75 sm:text-lg sm:leading-8"
        >
          From beautiful celebration cakes to delightful treats, let Jodiez
          Delight add a little sweetness to your special moments. Have something
          in mind? We'd love to hear from you!
        </p>

        <!-- WhatsApp ordering button -->
        <a
          :href="whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
          class="group mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#1FBA59] hover:shadow-xl focus-visible:ring-4 focus-visible:ring-[#25D366]/40 focus-visible:outline-none sm:w-auto sm:px-9 sm:text-lg"
        >
          <span class="material-symbols-outlined text-2xl">
            chat
          </span>

          Make your order now!

          <!-- <span
            class="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1"
          >
            arrow_forward
          </span> -->
        </a>

        <p class="mt-5 text-sm text-[#FFF8F1]/55">
          Your next favourite treat is just a message away.
        </p>
      </div>
    </div>
  </section>
</template>
