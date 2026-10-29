<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const ownerImage = ref(null)

// Update this path to match the owner's actual photo filename.
// Keep the photo inside assets/images.
import ownerPhoto from '../../assets/images/owner-photo.jpg'

const year = 2027

const brandBadges = [
    {
        text: 'FRESHLY\nBAKED',
        color: '#F0414A',
        icon: 'favorite',
    },
    {
        text: 'WITH\nLOVE',
        color: '#4A1D0C',
        icon: 'favorite',
    },
    {
        text: 'ALWAYS',
        color: '#D4A72C',
        icon: 'favorite',
    },
]

const specialties = [
    'Cakes',
    'Pastries',
    'Cinnamon Rolls',
    'Money Bouquets',
    'Celebration Treats',
    'Sweet Surprises',
]

const socialLinks = [
    {
        name: 'WhatsApp',
        icon: 'chat',
        url: 'https://wa.me/2349130519189',
    },
    {
        name: 'Instagram',
        icon: 'photo_camera',
        url: 'https://www.instagram.com/',
    },
    {
        name: 'Facebook',
        icon: 'thumb_up',
        url: 'https://www.facebook.com/',
    },
    {
        name: 'TikTok',
        icon: 'music_note',
        url: 'https://www.tiktok.com/',
    },
]
</script>

<template>
    <footer class="w-full" aria-label="Website footer">
        <div
            class="relative w-full overflow-hidden rounded-none bg-[#D4A72C] px-5 py-10 text-[#4A1D0C] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div aria-hidden="true"
                class="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#FFF8F1]/15 blur-3xl">
            </div>

            <div aria-hidden="true"
                class="pointer-events-none absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-[#F0414A]/10 blur-3xl">
            </div>

            <div class="relative z-10">
                <!-- Main footer content -->
                <div class="grid gap-10 lg:grid-cols-2 lg:gap-12">
                    <!-- Left side: Brand message and owner -->
                    <div class="flex flex-col justify-between gap-10">
                        <div>
                            <span class="material-symbols-outlined text-4xl" aria-hidden="true">
                                bakery_dining
                            </span>

                            <h2
                                class="mt-3 max-w-xl text-4xl leading-[1.05] font-black tracking-tight uppercase sm:text-5xl lg:text-6xl">
                                A Sweetness
                                <span class="block">in Every Bite.</span>
                            </h2>

                            <div class="mt-4 h-1.5 w-32 rotate-[-2deg] rounded-full bg-[#4A1D0C]"></div>

                            <p class="mt-5 max-w-md text-base leading-7 sm:text-lg">
                                Every creation is made to bring a little more sweetness,
                                warmth and happiness to your special moments.
                            </p>
                        </div>

                        <!-- Owner introduction -->
                        <div class="flex flex-col gap-5 sm:flex-row sm:items-center">
                            <div class="flex shrink-0 items-center gap-4">
                                <div
                                    class="h-20 w-20 overflow-hidden rounded-full border-[4px] border-[#FFF8F1] bg-[#FFF8F1] shadow-md sm:h-24 sm:w-24">
                                    <img :src="ownerPhoto" alt="Owner of Jodiez Delight"
                                        class="h-full w-full object-cover" loading="lazy" />
                                </div>

                                <div class="max-w-xs">
                                    <p class="font-bold leading-snug">
                                        A little love in every creation.
                                    </p>

                                    <p class="mt-1 text-sm leading-6 text-[#4A1D0C]/75">
                                        Thoughtfully made, just for you.
                                    </p>
                                </div>
                            </div>

                            <div class="hidden h-14 w-px bg-[#4A1D0C]/30 sm:block"></div>

                            <RouterLink to="/explore"
                                class="inline-flex items-center gap-2 font-bold underline decoration-2 underline-offset-4 transition hover:text-[#F0414A]">
                                Explore our delights
                                <span class="material-symbols-outlined">
                                    arrow_outward
                                </span>
                            </RouterLink>
                        </div>
                    </div>

                    <!-- Right side: Brand badges and specialties -->
                    <div class="border-t border-[#4A1D0C]/25 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                        <!-- Three circular badges -->
                        <div class="flex flex-wrap justify-center gap-3 sm:justify-end sm:gap-4">
                            <div v-for="badge in brandBadges" :key="badge.text"
                                class="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-full border-2 border-dashed border-[#FFF8F1]/80 text-center text-[#FFF8F1] shadow-sm transition duration-300 hover:-translate-y-1 sm:h-28 sm:w-28"
                                :style="{ backgroundColor: badge.color }">
                                <span
                                    class="whitespace-pre-line text-xs leading-tight font-black tracking-wide sm:text-sm">
                                    {{ badge.text }}
                                </span>

                                <span class="material-symbols-outlined mt-1 text-base" aria-hidden="true">
                                    {{ badge.icon }}
                                </span>
                            </div>
                        </div>

                        <!-- Specialties -->
                        <div class="mt-10">
                            <h3 class="text-center text-xl font-black sm:text-left sm:text-2xl">
                                What are we dishing out?
                            </h3>

                            <p class="mt-2 text-center text-sm text-[#4A1D0C]/75 sm:text-left">
                                A little something for every sweet tooth.
                            </p>

                            <div class="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
                                <span v-for="specialty in specialties" :key="specialty"
                                    class="rounded-full border border-[#4A1D0C]/60 px-4 py-2 text-sm font-bold transition duration-200 hover:bg-[#4A1D0C] hover:text-[#FFF8F1]">
                                    {{ specialty }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom footer bar -->
                <div
                    class="mt-10 flex flex-col gap-6 border-t border-[#4A1D0C]/30 pt-7 sm:mt-12 lg:flex-row lg:items-center lg:justify-between">
                    <!-- Social links -->
                    <div class="flex items-center justify-center gap-3 sm:gap-4 lg:justify-start">
                        <a v-for="social in socialLinks" :key="social.name" :href="social.url" :aria-label="social.name"
                            target="_blank" rel="noopener noreferrer"
                            class="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A1D0C] text-[#D4A72C] transition duration-300 hover:-translate-y-1 hover:bg-[#F0414A] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4A1D0C]">
                            <span class="material-symbols-outlined text-xl">
                                {{ social.icon }}
                            </span>
                        </a>
                    </div>

                    <!-- Copyright -->
                    <p class="text-center text-sm leading-6 font-medium sm:text-base">
                        © {{ year }} Jodiez Delight. All rights reserved.
                    </p>

                    <!-- Established badge -->
                    <div class="flex justify-center lg:justify-end">
                        <span
                            class="inline-flex items-center gap-2 rounded-full bg-[#4A1D0C] px-6 py-3 font-black tracking-wider text-[#D4A72C] shadow-sm">
                            <span class="material-symbols-outlined">
                                bakery_dining
                            </span>
                            EST. 2027
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
