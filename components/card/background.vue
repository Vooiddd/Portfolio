<script setup lang="ts">
const alertVisible = ref(false);
const alertText = ref("Copied to Clipboard!");

const props = defineProps({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  bg: { type: String, required: true },
  url: { type: String, required: false, default: "" },
  desktopOnly: { type: Boolean, required: false, default: false },
});

const copyText = async () => {
  try {
    await navigator.clipboard.writeText(props.title);
    alertVisible.value = true;
    setTimeout(() => {
      alertVisible.value = false;
    }, 2500);
  } catch {
    alertText.value = "Couldn't copy to Clipboard!";
    alertVisible.value = true;
    setTimeout(() => {
      alertVisible.value = false;
    }, 2500);
  }
};
</script>

<template>
  <div
    class="relative rounded-xl shadow-md hover:shadow-white transition-all border-4 border-white border-solid w-full h-[200px] md:h-full z-10"
  >
    <div
      :class="
        'absolute justify-self-center self-center rounded-xl h-full w-full bg-cover blur-sm bg-right z-10 opacity-20' +
        ' ' +
        bg
      "
    ></div>
    <button
      v-if="url === ''"
      class="tooltip relative flex justify-center items-center rounded-md w-7 h-7 md:w-10 md:h-10 hover:bg-gray-900 hover:bg-opacity-50 hover:transition-colors ml-auto m-2 z-30"
      @click="copyText"
      @touchstart="copyText"
    >
      <Icon
        name="ic:outline-content-copy"
        size="20px"
        class="text-white p-2 md:p-3"
      />
      <WrapperTooltip>Copy to Clipboard</WrapperTooltip>
    </button>
    <a
      v-if="url !== ''"
      class="tooltip relative flex justify-center items-center rounded-md w-7 h-7 md:w-10 md:h-10 hover:bg-gray-900 hover:bg-opacity-50 hover:transition-colors ml-auto m-2 z-30"
      :href="url"
    >
      <Icon
        name="ic:round-open-in-new"
        size="20px"
        class="text-white p-2 md:p-3"
      />
      <WrapperTooltip>Open link</WrapperTooltip>
    </a>
    <h1
      class="relative py-5 labelTitle px-4 text-sm sm:text-md md:text-lg lg:text-xl font-bold text-white"
    >
      {{ title }}
    </h1>
    <h2
      class="relative pb-10 px-4 font-semibold italic text-xs sm:text-sm md:text-lg xl:text-lg max-w-lg text-gray-300"
    >
      {{ desc }}
    </h2>
  </div>
  <AlertTimed :text="alertText" :visible="alertVisible" />
</template>
