<script setup>
const whatsappNumber = '2349130519189'

const message = "Hello Jodiez Delight, I'd like to place an order."

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
</script>

<template>
    <section id="home"
        class="relative overflow-hidden bg-[#FFF8F1] px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-36">
        <div
            class="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12 lg:grid-cols-2 lg:gap-8 lg:px-14 lg:py-14">
            <!-- Left: Hero text -->
            <div class="relative z-10 flex flex-col items-start">
                <span
                    class="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F8E9DF] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#4A1D0C] sm:text-sm">
                    <span class="h-2 w-2 rounded-full bg-[#F0414A]"></span>
                    Baked with love
                </span>

                <h1
                    class="max-w-2xl text-5xl font-black uppercase leading-[0.98] tracking-tight text-[#4A1D0C] sm:text-6xl lg:text-7xl xl:text-8xl">
                    Sweetness in
                    <span class="text-[#F0414A]">every bite</span>
                    <span class="text-[#D4A72C]">.</span>
                </h1>

                <p class="mt-6 max-w-lg text-base leading-7 text-[#6F5143] sm:text-lg sm:leading-8">
                    Premium cakes and pastries made with sweetness in every bite.
                    Make your celebrations extra special with Jodiez Delight.
                </p>

                <div class="mt-8 flex flex-wrap items-center gap-4">
                    <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
                        class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F0414A] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#D92F38] hover:shadow-lg sm:px-8 sm:text-base">
                        <span>Order on WhatsApp</span>
                        <span class="material-symbols-outlined" aria-hidden="true">
                            arrow_forward
                        </span>
                    </a>

                    <a href="#explore"
                        class="inline-flex min-h-12 items-center gap-2 rounded-full px-3 py-3 text-sm font-bold text-[#4A1D0C] transition hover:text-[#F0414A] sm:text-base">
                        Explore our treats
                        <span class="material-symbols-outlined" aria-hidden="true">
                            east
                        </span>
                    </a>
                </div>

                <div class="mt-8 flex items-center gap-3">

                    <p class="text-sm font-medium text-[#6F5143]">
                        A little sweetness for every occasion
                    </p>
                </div>
            </div>

            <!-- Right: Featured cake -->
            <div class="relative mx-auto w-full max-w-xl">
                <!-- Decorative background -->
                <div
                    class="absolute inset-x-3 bottom-2 top-8 rotate-3 rounded-[2rem] bg-[#F7DE68] sm:inset-x-5 sm:top-10">
                </div>

                <div class="relative overflow-hidden rounded-[2rem] bg-[#F8E9DF] shadow-md">
                    <img src="/assets/images/hero-image-transparent.webp"
                        alt="Beautiful white anniversary cake decorated with red ribbons and hearts"
                        class="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/4]" />
                </div>

                <!-- Decorative label -->
                <div
                    class="absolute -left-2 top-8 -rotate-6 rounded-xl bg-[#F0414A] px-4 py-2 text-xs font-black uppercase tracking-wide text-white shadow-md sm:-left-5 sm:top-12 sm:text-sm">
                    Made with love
                </div>

                <div
                    class="absolute -bottom-4 right-3 rotate-3 rounded-2xl bg-white px-4 py-3 shadow-lg sm:right-6 sm:px-5">
                    <p class="text-xs font-bold uppercase tracking-wider text-[#8A6A58]">
                        Every occasion
                    </p>
                    <p class="mt-1 text-sm font-black text-[#4A1D0C] sm:text-base">
                        Deserves something sweet!
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
