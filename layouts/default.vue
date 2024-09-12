<script setup lang="ts">
useSeoMeta({
  title: "Leonardo Milanesi | Frontend Developer",
  description:
    "Hi, I'm Leonardo Milanesi, a passionate junior frontend developer with a love for creating sleek and user-friendly web interfaces. I'm always learning and striving to build functional and aesthetically pleasing digital solutions.",
  ogTitle: "Leonardo Milanesi | Frontend Developer",
  ogDescription:
    "Hi, I'm Leonardo Milanesi, a passionate junior frontend developer...",
  ogImage: "@/assets/personal-pic.jpg",
});
useHead({
  link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
});
</script>

<template>
  <slot />
</template>
