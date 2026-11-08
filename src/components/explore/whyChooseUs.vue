
<script setup>
const reasons = [
  {
    number: '01',
    title: 'Made with Love',
    description:
      'Every order is prepared with care and attention to detail, making every bite a delightful experience.',
    icon: 'heart',
  },
  {
    number: '02',
    title: 'Quality Ingredients',
    description:
      'We focus on creating delicious treats with carefully selected ingredients and attention to quality.',
    icon: 'award',
  },
  {
    number: '03',
    title: 'Beautifully Crafted',
    description:
      'From everyday treats to special celebrations, every creation receives a beautiful finishing touch.',
    icon: 'cake',
  },
  {
    number: '04',
    title: 'Made for Your Moments',
    description:
      'Have a special occasion in mind? We create custom treats that suit your preferences and celebrations.',
    icon: 'gift',
  },
]
</script>

<template>
  <section
    class="bg-[#FFF8F1] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
  >
    <div class="mx-auto max-w-7xl">

      <!-- Section Heading -->
      <div class="mx-auto mb-14 max-w-2xl text-center">
        <span
          class="mb-4 inline-block rounded-full bg-[#F0414A]/10 px-5 py-2
          text-sm font-semibold tracking-wide text-[#F0414A]"
        >
          THE JODIEZ EXPERIENCE
        </span>

        <h2
          class="font-['Bowlby_One'] text-3xl leading-tight
          text-[#4A1D0C] sm:text-4xl lg:text-5xl"
        >
          Why Choose
          <span class="text-[#F0414A]">Jodiez Delight?</span>
        </h2>

        <p class="mt-5 text-base leading-7 text-[#765D52] sm:text-lg">
          It's more than just a treat. It's the care, creativity and
          little details that make every Jodiez Delight experience special.
        </p>
      </div>

      <!-- Reasons Grid -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <article
          v-for="reason in reasons"
          :key="reason.number"
          class="group rounded-2xl border border-[#4A1D0C]/10
          bg-white p-7 shadow-sm transition-all duration-300
          hover:-translate-y-2 hover:border-[#F0414A]/30
          hover:shadow-xl"
        >

          <!-- Icon Container -->
          <div
            class="mb-7 flex h-14 w-14 items-center justify-center
            rounded-2xl bg-[#F0414A]/10 text-[#F0414A]
            transition-colors duration-300
            group-hover:bg-[#F0414A] group-hover:text-white"
          >

            <!-- Heart Icon -->
            <svg
              v-if="reason.icon === 'heart'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              class="h-7 w-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
              />
            </svg>

            <!-- Quality Icon -->
            <svg
              v-else-if="reason.icon === 'award'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              class="h-7 w-7"
            >
              <circle cx="12" cy="8" r="6" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.2 13-1.2 9 5-3 5 3-1.2-9M12 5v6m-3-3h6"
              />
            </svg>

            <!-- Cake Icon -->
            <svg
              v-else-if="reason.icon === 'cake'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              class="h-7 w-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 11h16v10H4zM4 15h16M8 11V8a2 2 0 0 1 4 0v3m0-3a2 2 0 0 1 4 0v3M12 3v2m-7 6a2 2 0 0 1 4 0m6 0a2 2 0 0 1 4 0"
              />
            </svg>

            <!-- Gift Icon -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              class="h-7 w-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20 12v10H4V12m18-5H2v5h20V7Zm-10 0H7.5a2.5 2.5 0 1 1 2.5-2.5V7Zm0 0h2.5a2.5 2.5 0 1 0-2.5-2.5V7Z"
              />
            </svg>
          </div>

          <span class="text-sm font-bold tracking-widest text-[#D4A72C]">
            {{ reason.number }}
          </span>

          <h3 class="mt-3 text-xl font-bold text-[#4A1D0C]">
            {{ reason.title }}
          </h3>

          <p class="mt-3 text-sm leading-7 text-[#765D52]">
            {{ reason.description }}
          </p>

          <div
            class="mt-6 h-1 w-10 rounded-full bg-[#F0414A]
            transition-all duration-300 group-hover:w-16"
          ></div>

        </article>

      </div>
    </div>
  </section>
</template>
