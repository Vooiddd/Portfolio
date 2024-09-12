<script setup lang="ts">
import { slides } from "@/composables/Images";
</script>

<template>
  <Swiper
    class="flex w-72 min-[500px]:w-full col-span-2 overflow-visible justify-center items-center md:mt-20"
    :modules="[SwiperAutoplay, SwiperFreeMode]"
    :loop="true"
    :allowTouchMove="false"
    :centeredSlides="true"
    :centeredSlidesBounds="true"
    :slidesPerView="'auto'"
    :spaceBetween="20"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <SliderSlide
        :title="slide.title"
        :text="slide.description"
        :url="slide.url"
      />
    </SwiperSlide>
  </Swiper>
</template>

<style>
.swiper-slide {
  text-align: center;
  width: auto;
}
</style>
