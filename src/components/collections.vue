<script setup>
import { RouterLink } from 'vue-router'

import vintageCake from '../../assets/images/vintage-cake.webp'
import cinnamonRolls from '../../assets/images/cinnamon-rolls.webp'
import moneyBouquet from '../../assets/images/money-bouquet.webp'

const collections = [
    {
        title: 'Cakes',
        description: 'Beautifully crafted cakes for your sweetest celebrations.',
        image: vintageCake,
        alt: 'A beautifully decorated celebration cake',
        accent: 'bg-[#F0414A]',
    },
    {
        title: 'Pastries',
        description: 'Deliciously baked treats for every craving and occasion.',
        image: cinnamonRolls,
        alt: 'Freshly baked cinnamon rolls',
        accent: 'bg-[#D4A72C]',
    },
    {
        title: 'Money Bouquet',
        description: 'Beautifully crafted money bouquets for your events and surprises.',
        image: moneyBouquet,
        alt: 'A beautiful money bouquet gift',
        accent: 'bg-[#4A1D0C]',
    },
]
</script>

<template>
    <section id="collections" class="bg-[#FFF8F1] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div class="mx-auto max-w-7xl">
            <!-- Section heading -->
            <div class="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
                <span
                    class="inline-flex items-center gap-2 rounded-full bg-[#F8E9DF] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#F0414A] sm:text-sm">
                    <span class="h-2 w-2 rounded-full bg-[#F0414A]"></span>
                    Made with love
                </span>

                <h2
                    class="mt-5 text-3xl font-black uppercase leading-tight tracking-tight text-[#4A1D0C] sm:text-4xl lg:text-5xl">
                    A Little Something
                    <span class="text-[#F0414A]">Sweet</span>
                </h2>

                <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6F5143] sm:text-base">
                    Discover your next favourite treat. From unforgettable cakes to
                    delicious pastries, all party-perfect and affordable, there's
                    something for every occasion at Jodiez Delight.
                </p>
            </div>

            <!-- Collection cards -->
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <article v-for="(collection, index) in collections" :key="collection.title"
                    class="group relative overflow-hidden rounded-3xl border border-[#4A1D0C]/10 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <!-- Product image -->
                    <div class="relative overflow-hidden rounded-2xl bg-[#F8E9DF]">
                        <img :src="collection.image" :alt="collection.alt" loading="lazy"
                            class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />

                        <span :class="collection.accent"
                            class="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-md">
                            0{{ index + 1 }}
                        </span>
                    </div>

                    <!-- Card content -->
                    <div class="px-3 pb-4 pt-5 sm:px-4">
                        <h3
                            class="text-xl font-bold text-[#4A1D0C] transition-colors duration-300 group-hover:text-[#F0414A] sm:text-2xl">
                            {{ collection.title }}
                        </h3>

                        <p class="mt-2 min-h-12 text-sm leading-6 text-[#6F5143]">
                            {{ collection.description }}
                        </p>

                        <RouterLink to="/explore"
                            class="mt-5 inline-flex items-center gap-2 rounded-full border border-[#4A1D0C]/15 px-5 py-2.5 text-sm font-bold text-[#4A1D0C] transition duration-300 hover:border-[#F0414A] hover:bg-[#F0414A] hover:text-white">
                            Explore collection
                            <span class="material-symbols-outlined text-lg" aria-hidden="true">
                                arrow_forward
                            </span>
                        </RouterLink>
                    </div>
                </article>
            </div>

            <!-- Bottom CTA -->
            <div class="mt-10 text-center sm:mt-14">
                <RouterLink to="/explore"
                    class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#4A1D0C] px-7 py-3 text-sm font-bold text-white transition duration-300 hover:bg-[#F0414A] sm:text-base">
                    Discover all our treats
                    <span class="material-symbols-outlined" aria-hidden="true">
                        east
                    </span>
                </RouterLink>
            </div>
        </div>
    </section>
</template>
