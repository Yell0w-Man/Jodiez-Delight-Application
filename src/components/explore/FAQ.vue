
<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const faqs = [
  {
    question: 'How do I place an order?',
    answer:
      'Placing an order is simple! Browse our products and contact us through WhatsApp to discuss your order and get started.',
  },
  {
    question: 'Do you accept custom orders?',
    answer:
      'Yes! We welcome custom order enquiries. Tell us what you have in mind, and we can discuss your preferred design, treats or arrangement.',
  },
  {
    question: 'How far in advance should I place an order?',
    answer:
      'Order preparation times may vary depending on the product and the size of your order. Contact us on WhatsApp to discuss your preferred date.',
  },
  {
    question: 'Do you offer delivery?',
    answer:
      'Please contact us with your location so we can confirm the available delivery options for your order.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'Contact us when placing your order to confirm the available payment methods and payment details.',
  },
  {
    question: 'How can I make enquiries about your products?',
    answer:
      'You can reach out to us through our WhatsApp ordering link. We will be happy to discuss our products and answer your questions.',
  },
]

// Open or close a question
function toggleFaq(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
    <div class="mx-auto max-w-7xl">

      <!-- Section Heading -->
      <div class="mx-auto mb-12 max-w-2xl text-center">

        <span
          class="mb-4 inline-block rounded-full bg-[#F0414A]/10 px-5 py-2
          text-sm font-semibold tracking-wide text-[#F0414A]"
        >
          GOT QUESTIONS?
        </span>

        <h2
          class="font-['Bowlby_One'] text-3xl leading-tight
          text-[#4A1D0C] sm:text-4xl lg:text-5xl"
        >
          Frequently Asked
          <span class="text-[#F0414A]">Questions</span>
        </h2>

        <p class="mt-5 text-base leading-7 text-[#765D52] sm:text-lg">
          Have questions before placing your order?
          We've got answers to help you get started.
        </p>

      </div>

      <!-- FAQ Accordion -->
      <div class="mx-auto max-w-3xl space-y-4">

        <article
          v-for="(faq, index) in faqs"
          :key="faq.question"
          class="overflow-hidden rounded-2xl border transition-all duration-300"
          :class="
            openIndex === index
              ? 'border-[#F0414A]/40 bg-[#FFF8F1] shadow-md'
              : 'border-[#4A1D0C]/10 bg-white hover:border-[#F0414A]/40'
          "
        >

          <!-- Question Button -->
          <button
            type="button"
            class="flex w-full items-center justify-between gap-5 px-5 py-6
            text-left sm:px-7"
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
            @click="toggleFaq(index)"
          >

            <span
              class="text-base font-bold transition-colors duration-300 sm:text-lg"
              :class="
                openIndex === index
                  ? 'text-[#F0414A]'
                  : 'text-[#4A1D0C]'
              "
            >
              {{ faq.question }}
            </span>

            <!-- Plus / Minus Icon -->
            <span
              class="flex h-9 w-9 shrink-0 items-center justify-center
              rounded-full text-xl font-medium transition-all duration-300"
              :class="
                openIndex === index
                  ? 'rotate-180 bg-[#F0414A] text-white'
                  : 'bg-[#F0414A]/10 text-[#F0414A]'
              "
            >
              {{ openIndex === index ? '−' : '+' }}
            </span>

          </button>

          <!-- Answer -->
          <Transition name="faq">
            <div
              v-if="openIndex === index"
              :id="`faq-answer-${index}`"
              class="overflow-hidden"
            >
              <div class="px-5 pb-6 sm:px-7">
                <div class="mb-4 h-px w-full bg-[#4A1D0C]/10"></div>

                <p class="text-sm leading-7 text-[#765D52] sm:text-base">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </Transition>

        </article>

      </div>

      <!-- Additional Help -->
      <div class="mt-12 text-center">
        <p class="text-sm text-[#765D52]">
          Still have questions?
        </p>

        <p class="mt-2 font-semibold text-[#4A1D0C]">
          We'd love to hear from you.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition:
    opacity 0.25s ease,
    max-height 0.3s ease;
  max-height: 200px;
}

.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
