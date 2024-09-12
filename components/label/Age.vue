<script setup lang="ts">
const date = new Date();
const dateInfo = { month: 10, day: 18 };
const years = ref(0);

onMounted(() => {
  if (date.getMonth() - dateInfo.month > 0) {
    years.value = date.getFullYear() - 2006;
  } else if (
    date.getMonth() - dateInfo.month === 0 &&
    date.getDate() - dateInfo.day >= 0
  ) {
    years.value = date.getFullYear() - 2006;
  } else {
    years.value = date.getFullYear() - 2007;
  }
});
</script>

<template>
  <span>{{ years }}</span>
</template>
