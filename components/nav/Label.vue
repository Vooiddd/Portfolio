<script setup lang="ts">
const props = defineProps({
  text: { type: String, required: true },
  url: { type: String, required: true },
  isSelected: { type: Boolean, default: false },
});
</script>

<template>
  <a
    :class="
      isSelected
        ? 'no-underline font-semibold transition-all text-shadow text-violet-400 select-none text-xs md:text-sm lg:text-[15px]'
        : 'no-underline font-semibold transition-all hover:text-violet-400 select-none text-xs md:text-sm lg:text-[15px]'
    "
    :href="url"
    >{{ text }}</a
  >
</template>
