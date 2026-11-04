<script setup>
import cinnamonRolls from '../../../assets/images/cinnamon-rolls.webp'
import chocolateCake from '../../../assets/images/chocolate-cake.webp'
import moneyBouquet from '../../../assets/images/naira-bouquet.webp'
import meatPies from '../../../assets/images/meat-pies.webp'
import Cookies from '../../../assets/images/cookies.webp'
import pastries from '../../../assets/images/pastries.webp'

import { getWhatsAppUrl } from '@/utils/whatsapp.js'

const whatsappUrl = getWhatsAppUrl(
    "Hello Jodiez Delight! I'd like to make an enquiry and place an order."
)

const products = [
    {
        id: 1,
        name: 'Chocolate Cake',
        image: chocolateCake,
    },
    {
        id: 2,
        name: 'Small Chops',
        image: cinnamonRolls,
    },
    {
        id: 3,
        name: 'Money Bouquets',
        image: moneyBouquet,
    },
    {
        id: 4,
        name: 'Treats',
        image: meatPies,
    },
    {
        id: 5,
        name: 'Assorted Pastries',
        image: pastries,
    },
    {
        id: 6,
        name: 'Cookies',
        image: Cookies,
    },
]

</script>

<template>
    <section class="w-full bg-[#FFF8F1] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div class="mx-auto max-w-7xl">

            <!-- Section Heading -->
            <div class="mb-12 text-center">
                <p class="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#F0414A]">
                    Made with Love
                </p>

                <h2 class="font-['Bowlby_One'] text-3xl leading-tight text-[#4A1D0C] sm:text-4xl lg:text-5xl">
                    Our Sweet Creations
                </h2>

                <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#4A1D0C]/65 sm:text-base">
                    A little taste of the delightful creations we make
                    with love. Find your favourite and let us make
                    something special for you.
                </p>
            </div>

            <!-- Product Grid -->
            <div class="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <article v-for="product in products" :key="product.id"
                    class="group relative rounded-[1.5rem] border border-[#D4A72C]/50 bg-white p-2 shadow-[0_5px_20px_rgba(74,29,12,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#F0414A]/60 hover:shadow-[0_15px_35px_rgba(74,29,12,0.12)]">
                    <!-- Decorative Inner Border -->
                    <div class="overflow-hidden rounded-[1.1rem] border border-[#F0414A]/10 bg-[#FFF8F1]">
                        <!-- Product Image -->
                        <div class="relative aspect-[4/3] overflow-hidden">
                            <img :src="product.image" :alt="product.name" loading="lazy"
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />

                            <!-- Image Overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-[#4A1D0C]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            </div>
                        </div>

                        <!-- Product Name -->
                        <div class="px-4 py-5 text-center">
                            <h3
                                class="font-['Bowlby_One'] text-base text-[#4A1D0C] transition-colors duration-300 group-hover:text-[#F0414A] sm:text-lg">
                                {{ product.name }}
                            </h3>

                            <div
                                class="mx-auto mt-3 h-1 w-10 rounded-full bg-[#D4A72C] transition-all duration-300 group-hover:w-16 group-hover:bg-[#F0414A]">
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <!-- WhatsApp Order Button -->
            <div class="mt-12 flex justify-center">
                <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
                    class="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-5 text-center text-base font-bold text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1FBA59] hover:shadow-xl sm:w-auto sm:min-w-[340px] sm:text-lg">
                    <!-- WhatsApp Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"
                        aria-hidden="true">
                        <path
                            d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.65a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.46-8.41Z" />
                    </svg>

                    Order on WhatsApp
                </a>
            </div>

        </div>
    </section>
</template>
