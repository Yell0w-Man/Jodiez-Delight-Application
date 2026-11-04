<!-- eslint-disable no-unused-vars -->
<script setup>
import heroImage from '../../../assets/images/chocolate-cake.webp'

import { getWhatsAppUrl } from '@/utils/whatsapp.js'

const whatsappLink = getWhatsAppUrl(
    "Hello Jodiez Delight, I'd like to make an enquiry about your products."
)

</script>

<template>
    <section class="relative w-full overflow-hidden bg-[#FFF8F1] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pt-36">
        <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <!-- Left: Hero Content -->
            <div class="relative z-10 max-w-2xl">

                <!-- Small Label -->
                <div
                    class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4A72C]/40 bg-[#D4A72C]/10 px-4 py-2">
                    <span class="h-2 w-2 rounded-full bg-[#F0414A]"></span>
                    <span class="text-xs font-bold uppercase tracking-[0.18em] text-[#4A1D0C]">
                        Baked with love
                    </span>
                </div>
                <h1
                    class="font-['Bowlby_One'] text-4xl leading-tight text-[#4A1D0C] sm:text-5xl lg:text-6xl xl:text-7xl">
                    Explore Our
                    <span class="block text-[#F0414A]">
                        Sweet
                    </span>
                    Creations.
                </h1>

                <!-- Description -->
                <p class="mt-6 max-w-lg text-base leading-8 text-[#4A1D0C]/75 sm:text-lg">
                    From deliciously baked cakes to irresistible pastries and
                    delightful treats, discover something special for every craving
                    at Jodiez Delight.
                </p>

                <!-- Buttons -->
                <div class="mt-8 flex flex-wrap items-center gap-4">

                    <a href="#categories"
                        class="inline-flex items-center justify-center gap-2 rounded-full bg-[#F0414A] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#F0414A]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#D9343D]">
                        Explore Collections
                        <span class="text-lg">→</span>
                    </a>

                    <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center justify-center rounded-full border-2 border-[#4A1D0C]/20 px-7 py-4 text-sm font-bold text-[#4A1D0C] transition duration-300 hover:border-[#D4A72C] hover:bg-[#D4A72C]/10">
                        Make an Enquiry
                    </a>

                </div>

                <!-- Bottom Highlight -->
                <div class="mt-12 flex flex-wrap items-center gap-6 border-t border-[#4A1D0C]/10 pt-6">

                    <div>
                        <p class="font-['Bowlby_One'] text-xl text-[#F0414A]">
                            Made with Love
                        </p>
                        <p class="mt-1 text-xs text-[#4A1D0C]/60">
                            Every treat, every time.
                        </p>
                    </div>

                    <div class="h-10 w-px bg-[#4A1D0C]/15"></div>

                    <div>
                        <p class="font-['Bowlby_One'] text-xl text-[#D4A72C]">
                            Pure Delight
                        </p>
                        <p class="mt-1 text-xs text-[#4A1D0C]/60">
                            Sweetness in every bite.
                        </p>
                    </div>

                </div>
            </div>

            <!-- Right: Hero Image -->
            <div class="relative mx-auto w-full max-w-xl">

                <!-- Decorative Background -->
                <div class="absolute inset-5 rounded-[3rem] bg-[#D4A72C]/20 rotate-6"></div>

                <div class="absolute inset-5 rounded-[3rem] border-2 border-[#F0414A]/20 -rotate-3"></div>

                <!-- Image -->
                <div class="relative z-10 flex min-h-[350px] items-center justify-center sm:min-h-[480px]">
                    <img :src="heroImage" alt="Delicious creations from Jodiez Delight"
                        class="relative z-10 max-h-[520px] w-full object-contain drop-shadow-2xl" />
                </div>

                <!-- Floating Badge -->
                <div
                    class="absolute -bottom-2 -left-2 z-20 flex h-24 w-24 rotate-[-10deg] flex-col items-center justify-center rounded-full bg-[#F0414A] text-center text-white shadow-xl sm:-left-5 sm:h-28 sm:w-28">
                    <span class="text-xs font-bold uppercase tracking-wider">
                        Always
                    </span>
                    <span class="font-['Bowlby_One'] text-lg">
                        Fresh!
                    </span>
                </div>

            </div>
        </div>

        <!-- Bottom Decorative Text -->
        <div
            class="pointer-events-none absolute bottom-3 right-8 hidden font-['Bowlby_One'] text-5xl text-[#4A1D0C]/5 lg:block">
            JODIEZ DELIGHT
        </div>

    </section>
</template>
