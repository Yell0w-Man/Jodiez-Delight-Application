<script setup>
import { ref } from 'vue'

const testimonials = ref([])
</script>

<template>
    <section id="testimonials" class="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div class="mx-auto max-w-7xl">
            <!-- Section heading -->
            <div class="mx-auto max-w-2xl text-center">
                <span
                    class="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-[#F0414A] uppercase">
                    <span class="material-symbols-outlined">favorite</span>
                    The love behind every order
                </span>

                <h2 class="mt-4 text-3xl leading-tight font-bold text-[#4A1D0C] sm:text-4xl lg:text-5xl">
                    Sweet Words,
                    <span class="text-[#F0414A]">Happy Hearts.</span>
                </h2>

                <p class="mt-5 text-base leading-7 text-[#4A1D0C]/70 sm:text-lg">
                    Every special creation deserves a special story. We're looking
                    forward to sharing the lovely experiences of our customers here.
                </p>
            </div>

            <!-- Real reviews -->
            <div v-if="testimonials.length" class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <article v-for="testimonial in testimonials" :key="testimonial.id"
                    class="rounded-3xl border border-[#4A1D0C]/10 bg-[#FFF8F1] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div class="flex items-center gap-1 text-[#D4A72C]"
                        :aria-label="`${testimonial.rating} out of 5 stars`">
                        <span v-for="star in 5" :key="star" class="material-symbols-outlined text-xl"
                            :class="star <= testimonial.rating ? 'text-[#D4A72C]' : 'text-[#4A1D0C]/20'">
                            star
                        </span>
                    </div>

                    <span aria-hidden="true" class="material-symbols-outlined mt-5 text-4xl text-[#F0414A]/40">
                        format_quote
                    </span>

                    <blockquote class="mt-2 leading-7 text-[#4A1D0C]/80">
                        {{ testimonial.review }}
                    </blockquote>

                    <div class="mt-6 border-t border-[#4A1D0C]/10 pt-5">
                        <p class="font-bold text-[#4A1D0C]">
                            {{ testimonial.name }}
                        </p>
                    </div>
                </article>
            </div>

            <!-- Empty state: displayed until genuine reviews are added -->
            <div v-else
                class="mx-auto mt-12 max-w-2xl rounded-3xl border border-[#D4A72C]/30 bg-[#FFF8F1] px-6 py-10 text-center sm:px-10 sm:py-12">
                <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F0414A]/10">
                    <span class="material-symbols-outlined text-3xl text-[#F0414A]">
                        favorite
                    </span>
                </div>

                <h3 class="mt-5 text-xl font-bold text-[#4A1D0C] sm:text-2xl">
                    Your Kind Words Belong Here.
                </h3>

                <p class="mx-auto mt-3 max-w-lg leading-7 text-[#4A1D0C]/70">
                    As we create more delightful moments, this space will grow with
                    genuine stories and feedback from our lovely customers.
                </p>

                <div class="mx-auto mt-6 h-1 w-16 rounded-full bg-[#D4A72C]"></div>
            </div>
        </div>
    </section>
</template>
