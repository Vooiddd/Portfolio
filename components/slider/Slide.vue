<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  url: { type: String, required: true },
});
</script>

<template>
  <CardInfo :title="title" :url="url" />
</template>
