
<script setup>
import { getWhatsAppUrl } from '@/utils/whatsapp.js'

const whatsappUrl = getWhatsAppUrl(
  "Hello Jodiez Delight! I'd love to make a custom order."
)

const customOptions = [
  {
    id: 1,
    number: '01',
    title: 'Custom Cakes',
    description: 'Personalised cakes designed around your special moments.',
  },
  {
    id: 2,
    number: '02',
    title: 'Special Treats',
    description: 'Unique pastries and sweet treats made to suit your taste.',
  },
  {
    id: 3,
    number: '03',
    title: 'Gift Arrangements',
    description: 'Thoughtful and beautiful gift arrangements for your loved ones.',
  },
]
</script>

<template>
  <section class="bg-[#FFF8F1] px-5 py-20 sm:px-8 lg:px-16">

    <div
      class="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#D4A72C]/40 bg-white shadow-xl shadow-[#4A1D0C]/10"
    >

      <div class="grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-16">

        <!-- Left: Introduction -->
        <div>
          <span
            class="inline-block rounded-full bg-[#F0414A]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F0414A]"
          >
            Made Just for You
          </span>

          <h2
            class="mt-6 font-['Bowlby_One'] text-3xl leading-tight text-[#4A1D0C] sm:text-4xl lg:text-5xl"
          >
            Have Something
            <span class="text-[#F0414A]">Special</span>
            in Mind?
          </h2>

          <p class="mt-6 max-w-xl text-base leading-8 text-[#6B5145] sm:text-lg">
            Every special moment deserves something extraordinary. Whether
            you have a cake design in mind, a unique treat to request, or a
            beautiful gift arrangement, Jodiez Delight is ready to hear your
            ideas.
          </p>

          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#F0414A] px-7 py-4 font-bold text-white shadow-lg shadow-[#F0414A]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#4A1D0C] hover:shadow-xl"
          >
            <span>Request a Custom Order</span>

            <span class="material-symbols-outlined text-xl">
              arrow_forward
            </span>
          </a>

          <p class="mt-4 text-sm text-[#8B756A]">
            Let's bring your sweet ideas to life!
          </p>
        </div>

        <!-- Right: Custom order options -->
        <div class="relative">

          <div
            class="absolute -right-4 -top-5 h-24 w-24 rounded-full bg-[#D4A72C]/15 blur-2xl"
          ></div>

          <div class="relative space-y-4">

            <div
              v-for="option in customOptions"
              :key="option.id"
              class="group flex items-start gap-5 rounded-2xl border border-[#D4A72C]/30 bg-[#FFF8F1] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F0414A]/50 hover:shadow-lg"
            >

              <span
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4A1D0C] font-['Bowlby_One'] text-sm text-[#D4A72C] transition duration-300 group-hover:bg-[#F0414A]"
              >
                {{ option.number }}
              </span>

              <div>
                <h3
                  class="font-['Bowlby_One'] text-lg text-[#4A1D0C]"
                >
                  {{ option.title }}
                </h3>

                <p class="mt-2 text-sm leading-6 text-[#6B5145]">
                  {{ option.description }}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
      <div class="h-2 bg-gradient-to-r from-[#4A1D0C] via-[#D4A72C] to-[#F0414A]"></div>

    </div>
  </section>
</template>
