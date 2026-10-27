<script setup>
import { ref, onBeforeUnmount } from 'vue'
import heroImage from '../../assets/images/hero-image-transparent.webp'

const isSpeaking = ref(false)
const isPaused = ref(false)

const story =
  "Hello, and welcome to Jodiez Delight! We're delighted to have you here. We believe every special moment deserves a little sweetness. From beautifully crafted cakes and delicious pastries to thoughtful money bouquets, we're here to add something special to your celebrations. Take a look around, discover your favourites, and let Jodiez Delight make your moments even sweeter!"

let utterance = null
let voicesChangeHandler = null

const feminineVoicePattern =
  /female|woman|samantha|serena|ava|zira/i

function getAvailableVoices() {
  return window.speechSynthesis.getVoices()
}

function selectVoice(voices) {
  // First, try a likely feminine British English voice.
  const britishFeminine = voices.find(
    (voice) =>
      voice.lang.toLowerCase().startsWith('en-gb') &&
      feminineVoicePattern.test(voice.name),
  )

  if (britishFeminine) return britishFeminine

  // Otherwise, try a likely feminine English voice from another locale.
  const otherFeminineEnglish = voices.find(
    (voice) =>
      voice.lang.toLowerCase().startsWith('en') &&
      feminineVoicePattern.test(voice.name),
  )

  if (otherFeminineEnglish) return otherFeminineEnglish

  // Next, prefer any available British English voice.
  const britishVoice = voices.find((voice) =>
    voice.lang.toLowerCase().startsWith('en-gb'),
  )

  if (britishVoice) return britishVoice

  // Final fallback: any English voice available on the device.
  return voices.find((voice) =>
    voice.lang.toLowerCase().startsWith('en'),
  ) || null
}

function resetPlayback() {
  isSpeaking.value = false
  isPaused.value = false
  utterance = null
}

function listenToStory() {
  if (!('speechSynthesis' in window)) {
    window.alert(
      'Sorry, your browser does not support voice playback.',
    )
    return
  }

  if (isSpeaking.value && !isPaused.value) {
    window.speechSynthesis.pause()
    isPaused.value = true
    return
  }

  if (isPaused.value) {
    window.speechSynthesis.resume()
    isPaused.value = false
    return
  }

  window.speechSynthesis.cancel()
  resetPlayback()

  const voices = getAvailableVoices()
  const selectedVoice = selectVoice(voices)

  utterance = new SpeechSynthesisUtterance(story)

  utterance.lang = selectedVoice?.lang || 'en-GB'
  utterance.rate = 0.9
  utterance.pitch = 1.15
  utterance.volume = 1

  if (selectedVoice) {
    utterance.voice = selectedVoice
  }

  utterance.onstart = () => {
    isSpeaking.value = true
    isPaused.value = false
  }

  utterance.onend = () => {
    resetPlayback()
  }

  utterance.onerror = (event) => {
    // Ignore cancellation errors caused by stopping or restarting speech.
    if (event.error !== 'canceled' && event.error !== 'interrupted') {
      console.error('Voice playback error:', event.error)
    }

    resetPlayback()
  }

  window.speechSynthesis.speak(utterance)
}

function stopStory() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }

  resetPlayback()
}

function handleVoicesChanged() {
  // Refresh available voices when the browser finishes loading them.
  // Selection is performed when playback starts.
  getAvailableVoices()
}

if ('speechSynthesis' in window) {
  voicesChangeHandler = handleVoicesChanged

  window.speechSynthesis.addEventListener(
    'voiceschanged',
    voicesChangeHandler,
  )
}

onBeforeUnmount(() => {
  stopStory()

  if (
    voicesChangeHandler &&
    'speechSynthesis' in window
  ) {
    window.speechSynthesis.removeEventListener(
      'voiceschanged',
      voicesChangeHandler,
    )
  }
})
</script>

<template>
  <section
    id="about"
    class="overflow-hidden bg-[#FFF8F1] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
  >
    <div
      class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20"
    >
      <!-- Image -->
      <div class="relative mx-auto w-full max-w-lg">
        <div
          class="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-[#D4A72C] sm:-left-6 sm:-top-6"
        ></div>

        <div
          class="relative overflow-hidden rounded-[2rem] bg-[#F9E6D9]"
        >
          <img
            :src="heroImage"
            alt="A beautifully decorated cake from Jodiez Delight"
            class="h-[360px] w-full object-cover sm:h-[440px]"
            loading="lazy"
          />

          <div
            class="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-3 shadow-lg"
          >
            <p class="text-sm font-semibold text-[#4A1D0C]">
              Made with love
            </p>

            <p class="text-xs text-[#8B5E4A]">
              Sweetness in every bite
            </p>
          </div>
        </div>
      </div>

      <!-- About content -->
      <div class="relative z-10">
        <p
          class="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#F0414A]"
        >
          Get to know us
        </p>

        <h2
          class="mb-6 text-4xl font-bold leading-tight text-[#4A1D0C] sm:text-5xl"
        >
          A Little Bit About
          <span class="text-[#F0414A]">
            Jodiez Delight
          </span>
        </h2>

        <p
          class="mb-5 text-base leading-8 text-[#765447] sm:text-lg"
        >
          Every celebration deserves something special. At
          Jodiez Delight, we bring sweetness, creativity, and
          thoughtful details together to make your memorable
          moments even more delightful.
        </p>

        <p
          class="mb-8 text-base leading-8 text-[#765447] sm:text-lg"
        >
          From delightful cakes and pastries to creative money
          bouquets, we're here to help you celebrate life's
          beautiful moments, one special treat at a time.
        </p>

        <!-- Voice introduction -->
        <div
          class="rounded-3xl border border-[#F1D9C5] bg-white p-5 shadow-sm sm:p-6"
        >
          <div class="mb-4 flex items-center gap-3">
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0E8] text-[#F0414A]"
            >
              <span class="material-symbols-outlined text-2xl">
                record_voice_over
              </span>
            </div>

            <div>
              <h3 class="font-bold text-[#4A1D0C]">
                Hear Our Story
              </h3>

              <p class="text-sm text-[#8B746A]">
                Let us tell you a little about us.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <button
              type="button"
              @click="listenToStory"
              class="inline-flex items-center gap-2 rounded-full bg-[#F0414A] px-6 py-3 font-semibold text-white transition hover:bg-[#D92F39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0414A]"
              :aria-label="
                isPaused
                  ? 'Resume our story'
                  : isSpeaking
                    ? 'Pause our story'
                    : 'Listen to our story'
              "
            >
              <span class="material-symbols-outlined">
                {{
                  isPaused
                    ? 'play_arrow'
                    : isSpeaking
                      ? 'pause'
                      : 'play_arrow'
                }}
              </span>

              {{
                isPaused
                  ? 'Resume Story'
                  : isSpeaking
                    ? 'Pause Story'
                    : 'Listen to Our Story'
              }}
            </button>

            <button
              v-if="isSpeaking || isPaused"
              type="button"
              @click="stopStory"
              class="inline-flex items-center gap-2 rounded-full border border-[#E8D4C9] px-5 py-3 font-semibold text-[#4A1D0C] transition hover:bg-[#FFF8F1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A1D0C]"
            >
              <span class="material-symbols-outlined">
                stop
              </span>

              Stop
            </button>
          </div>

          <p
            class="mt-3 text-xs leading-5 text-[#8B746A]"
            aria-live="polite"
          >
            {{
              isPaused
                ? 'Your story is paused.'
                : isSpeaking
                  ? 'Enjoy our story. You can pause or stop anytime.'
                  : 'Tap to hear our introduction. Voice options depend on your device.'
            }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>