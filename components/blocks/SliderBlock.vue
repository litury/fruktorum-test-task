<template>
  <div class="slider-block container">
    <swiper-container
      effect="fade"
      :navigation="navigationConfig"
      :pagination="paginationConfig"
    >
      <swiper-slide v-for="slide in data">
        <img :src="slide" alt="test" />
      </swiper-slide>
    </swiper-container>

    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script setup lang="ts">
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
import { useArticleStore } from "~/store/articleStore";

// Инициализация хранилища статей
const articleStore = useArticleStore();

// Получение данных для блока введения статьи
const { data } = articleStore.getBlockByType("slider_block");

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

<style lang="scss">
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
