<script setup lang="ts">
const selected = ref("home");
const options = {
  root: document.querySelector("main-container"),
  rootMargin: "0px",
  threshold: 0.7,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.intersectionRatio > 0.2) {
        selected.value = entry.target.id;
      }
    }
  });
}, options);

onMounted(() => {
  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const info = document.querySelector("#info");
  observer.observe(home!);
  observer.observe(about!);
  observer.observe(info!);
});
</script>

<template>
  <div class="navbar-wrapper flex justify-center">
    <NavBar
      :links="[
        { text: 'Home', url: '#home', selected: selected },
        { text: 'About me', url: '#about', selected: selected },
        { text: 'Useful info', url: '#info', selected: selected },
      ]"
    />
  </div>
  <div
    class="main-container w-full h-full bg-neutral-800 text-gray-200 relative"
  >
    <slot />
  </div>
  <div
    class="error-container hidden justify-center items-center h-full w-full flex-col gap-5"
  >
    <Icon name="ic:baseline-error" class="text-amber-500" size="100px" />
    <h1 class="text-white text-xl font-bold">
      Sorry, we don't support this view yet :(
    </h1>
  </div>
</template>
