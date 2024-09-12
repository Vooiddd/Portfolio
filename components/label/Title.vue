<script setup lang="ts">
const percentage = ref("");
let loadingBar: any;
let parentContainer;

const props = defineProps({
  text: { type: String, required: true },
});

const loadingAnimation = () => {
  setInterval(() => {
    const loadingWidth: any = window
      .getComputedStyle(loadingBar, "::after")
      .width.split("p")[0];
    const parentWidth: any = window
      .getComputedStyle(loadingBar)
      .width.split("p")[0];
    percentage.value = ((loadingWidth / parentWidth) * 100)
      .toString()
      .slice(0, 4);
  }, 100);
};

onMounted(() => {
  loadingBar = document.querySelector(".labelTitle");
  parentContainer = loadingBar.parentElement;

  loadingAnimation();
});
</script>

<template>
  <div>
    <h1
      class="labelTitle title-shadow w-fit relative top-0 right-0 text-xl md:text-3xl lg:text-4xl text-center font-bold uppercase max-w-sm md:max-w-md max-[500px]:max-w-xs bottom-64 select-none py-10 after:content-[''] after:text-[16px] after:text-start after:p-1 after:top-[80px] after:left-0 after:w-full after:absolute after:h-2 after:rounded-md after:md:top-[100px] after:bg-slate-300 after:shadow-lg after:shadow-violet-400"
    >
      {{ text }}
    </h1>
    <h2
      class="text-sm md:text-lg lg:text-xl -mt-3 md:-mt-1 text-left motion-reduce:hidden"
    >
      {{ percentage }}%
    </h2>
  </div>
</template>
