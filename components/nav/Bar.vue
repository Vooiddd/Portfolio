<script setup lang="ts">
const props = defineProps({
  links: {
    type: Array<{
      text: string;
      url: string;
      selected: String;
    }>,
    required: true,
  },
});
</script>

<template>
  <div
    class="h-12 bg-neutral-900 text-gray-200 mt-4 rounded-xl flex items-center justify-around fixed shadow-md w-[300px] md:w-[400px] z-50"
  >
    <NavLabel
      v-for="item in links"
      :text="item.text"
      :url="item.url"
      :isSelected="'#' + item.selected === item.url"
    />
  </div>
</template>
