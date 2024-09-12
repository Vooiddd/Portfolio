<script setup lang="ts">
const props = defineProps({
  visible: { type: Boolean, required: true, default: false },
});

const visible = ref(false);

watch(props, () => {
  if (props.visible) {
    visible.value = true;
    setTimeout(() => {
      resetVisibility();
    }, 2000);
  }
});

const resetVisibility = () => {
  visible.value = false;
};
</script>

<template>
  <div
    v-if="visible"
    class="loading-bar overflow-hidden h-12 bg-neutral-950 text-gray-200 font-bold m-4 rounded-xl flex items-center fixed shadow-md w-[250px] md:w-[300px] lg:w-[400px] z-50 bottom-3 md:bottom-10 right-3"
  >
    <h1 class="px-5 text-xs md:text-md">Copied to Clipboard!</h1>
    <button
      class="px-5 ml-auto z-40"
      @click="resetVisibility"
      @touchend="resetVisibility"
    >
      <Icon
        name="ic:round-close"
        size="20px"
        class="text-white hover:text-violet-400"
      />
    </button>
  </div>
</template>
