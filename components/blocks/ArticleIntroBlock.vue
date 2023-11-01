<template lang="pug">

// Корневой контейнер компонента
div(:class="[$style['intro'], 'container']")

    // Контейнер для изображения
    figure(:class="$style['intro__image-wrapper']")
      img(
        :class="$style['intro__image']"
        :src="props.data.image"
      )

    // Контейнер для информации
    div(:class="$style['intro__info']")

      // Заголовок статьи
      h1(:class="$style['intro__title']")
        | {{props.data.title}}

      // Время чтения статьи
      span(:class="$style['intro__time']")
        nuxt-icon(:class="$style['intro__icon']" name="clock" filled)
        | {{props.data.reading_time}} мин время чтения

      // Количество просмотров статьи
      span(:class="$style['intro__views']")
        nuxt-icon(:class="$style['intro__icon']" name="eye" filled)
        | {{props.data.views_count}} прочитали статью

      // Краткое описание статьи
      p(:class="$style['intro__description']")
        | {{props.data.short_description}}
</template>

<script setup lang="ts">
const props = defineProps<{
  data: {
    src: string;
    caption: string;
  };
}>();
</script>

<style module lang="scss">
.intro {
  display: flex;
  gap: 30px;
  margin-bottom: 100px;

  // Стили для контейнера изображения
  &__image-wrapper {
    width: 541px;
    height: 580px;
    flex-shrink: 0;
  }

  // Стили для изображения
  &__image {
    width: 100%;
    height: 100%;
    border-top-right-radius: 200px;
  }

  // Стили для контейнера информации
  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: auto;
  }

  // Стили для заголовка
  &__title {
    margin-bottom: 30px;
  }

  // Стили для иконки (общие)
  &__icon {
    margin-right: 8px;
  }

  // Стили для svg иконки
  &__icon svg {
    width: 16px;
    height: 16px;
  }

  // Стили для отображения времени чтения
  &__time {
    color: var(--color-gray);
  }

  // Стили для отображения количества просмотров
  &__views {
    color: var(--color-gray);
    margin-bottom: 50px;
  }
}
</style>
