<template lang="pug">
figure(:class="[$style['image-block'], 'container']")
  img(
    :class="$style['image-block__image']"
    :src="data.src",
    :alt="data.caption"
  )
</template>

<script setup lang="ts">
import { useArticleStore } from "~/store/articleStore";

// Инициализация хранилища статей
const articleStore = useArticleStore();

const { data } = articleStore.getBlockByType("image_block");

</script>

<style module lang="scss">
.image-block {
  height: 550px;
  margin-bottom: 155px;

  &__image {
    width: 100%;
    height: 100%;
    border-top-right-radius: 200px;
  }
}
</style>
