<template lang="pug">
section.slider-block.container
    swiper-container(
      effect="fade"
      :navigation="navigationConfig"
      :pagination="paginationConfig"
      :data-pagination="props.newId"
      :id="props.newId"
    )
      swiper-slide(v-for="slide in props.data" :key="props.newId")
        img(:src="slide" alt="test")

      div(
        :id="'swiper-button-next-' + props.newId"
        :class="'swiper-button-next'"
      )
      div(
        :id="'swiper-button-prev-' + props.newId"
        :class="'swiper-button-prev'"
      )

      div(
      :id="'swiper-pagination-' + props.newId"
      :class="'swiper-pagination'"
      )

</template>

<script setup lang="ts">
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import Swiper from "swiper";

import { defineComponent } from "vue";

defineOptions({
  inheritAttrs: false,
});

// register Swiper custom elements
register();

const props = defineProps<{
  data: {};
  newId: string;
}>();

console.log(props.data);


const navigationConfig = {
  nextEl: "#swiper-button-next-" + props.newId,
  prevEl: "#swiper-button-prev-" + props.newId,
};

const paginationConfig = {
  el: "#swiper-pagination-" + props.newId,
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
  margin-bottom: 50px;
}

.swiper-pagination {
 bottom: 0;
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