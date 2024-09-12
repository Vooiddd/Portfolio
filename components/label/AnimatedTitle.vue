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
    setInterval(() => {
      if (currentLetter < quote.length) {
        currentQuote.value += quote[currentLetter];
        currentLetter++;
      } else {
        currentLetter = 1;
        currentQuote.value = firstChar.value;
      }
    }, 175);
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
    class="title-shadow text-gray-300 absolute text-xl md:text-3xl lg:text-4xl text-center font-bold uppercase max-w-sm md:max-w-md max-[500px]:max-w-xs bottom-64 h-1/5 select-none z-10"
  >
    {{ currentQuote }}
  </h1>
</template>
