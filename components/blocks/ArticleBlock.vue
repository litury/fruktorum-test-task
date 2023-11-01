<template lang="pug">
div(:class="$style['block']")
    img(
      :class="$style['block__image']"
      :src="props.image",
      alt="article image"
      loading="lazy"
    )
    h3(:class="$style['block__title']") {{ props.title }}
    NuxtLink(:class="$style['block__link']" :to="props.link")
      BaseButtons(color="black", label="Читать")
</template>

<script setup lang="ts">
interface IProps {
  image: string;
  title: string;
  link: string;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" module>
.block {
  display: flex;
  flex-direction: column;

  min-width: 300px;
  height: 476px;
  gap: 20px;

  &__image {
    width: 100%;
    height: 320px;
  }

  &__title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 10px;
  }

  &__button {
    margin-top: auto;
  }
}
</style>
```
