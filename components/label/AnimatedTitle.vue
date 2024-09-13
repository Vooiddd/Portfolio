<script setup lang="ts">
const props = defineProps({
  quote: { type: String, required: true },
});

const { quote } = props;
const currentQuote = ref('"');
const firstChar = ref(quote[0]);
let currentLetter = 1;

const startAnimation = () => {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const interval = setInterval(() => {
      if (currentLetter < quote.length) {
        currentQuote.value += quote[currentLetter];
        currentLetter++;
      } else {
        clearInterval(interval);
      }
    }, 125);
    currentQuote.value = firstChar.value;
    currentLetter = 1;
  } else {
    currentQuote.value = quote;
  }
};

onMounted(() => {
  startAnimation();
});
</script>

<template>
  <h1
    class="title-shadow text-gray-300 absolute text-xl md:text-2xl lg:text-3xl text-center font-bold uppercase max-w-72 sm:max-w-sm md:max-w-lg bottom-64 h-1/5 select-none z-10"
  >
    {{ currentQuote }}
  </h1>
</template>
