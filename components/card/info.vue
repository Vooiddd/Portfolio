<script setup lang="ts">
import { useAsset } from "@/composables/ImageLoader";

const props = defineProps({
  title: { type: String, required: true },
  text: { type: String, required: false },
  url: { type: String, required: true },
});

const imageUrl = ref(useAsset(props.url));
</script>

<template>
  <div
    class="flex flex-col justify-center items-center h-64 w-72 bg-neutral-900 rounded-xl md:hover:border-2 md:hover:border-white md:hover:border-solid shadow-md"
  >
    <div class="w-28 h-28 flex items-center p-1 rounded-md">
      <img
        class="w-28 rounded-md z-10 selected-none text-white"
        :src="imageUrl"
        :alt="title"
      />
    </div>
    <h1 class="pt-5 font-semibold text-md md:text-lg xl:text-lg select-none">
      {{ title }}
    </h1>
    <h2 class="px-3 text-xs md:text-sm xl:text-md selected-none">{{ text }}</h2>
  </div>
</template>
