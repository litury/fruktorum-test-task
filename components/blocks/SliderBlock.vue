<template lang="pug">
section.slider-block.container
    swiper-container(
      effect="fade"
      :navigation="navigationConfig"
      :pagination="paginationConfig"
    )
      swiper-slide(v-for="slide in props.data" :key="props.id")
        img(:src="slide" alt="test")
    div.swiper-pagination
    div.swiper-button-next
    div.swiper-button-prev
</template>

<script setup lang="ts">
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

const props = defineProps<{
  data: { };
  id: string;
}>();

console.log(props.id);

const navigationConfig = {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
};

const paginationConfig = {
  el: ".swiper-pagination",
  clickable: true,
  type: "fraction",
};



</script>

<style lang="scss" scoped>
.slider-block {
  margin-bottom: 100px;
  position: relative;
}

.swiper-slide img {
  width: auto;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.swiper-pagination {
  bottom: -40px;
}

.swiper-button-next {
  background: none;
  right: 50px;
}

.swiper-button-prev {
  background: none;
  left: 50px;
}

.swiper-button-prev::after {
  content: url("../../assets/icons/prev.svg");
}

.swiper-button-next::after {
  content: url("../../assets/icons/next.svg");
}
</style>
