<template lang="pug">
section(:class="[$style['form-block'], 'container']")
    div(:class="[$style['form-block__img-wrapper']]")
      img(
        :class="[$style['form-block__img']]",
        src="~assets/images/CTAimage.png",
        alt="subscribe image" loading="lazy"
      )
    form(:class="[$style['form-block__form']]")
      h2(:class="[$style['form-block__title']]")
        | Стань участником проекта
      BaseInput(:class="[$style['form-block__input']]", placeholder="Имя")
      BaseInput(:class="[$style['form-block__input']]", placeholder="Телефон")
      BaseInput(:class="[$style['form-block__input'], $style['form-block__input--last']]", placeholder="Email")
      BaseButtons(:class="[$style['form-block__button']]", label="Присоединиться", color="blue")
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.form-block {
  display: flex;
  padding: 60px;
  gap: 60px;
  background-color: var(--color-text);

  margin-bottom: 150px;

  &__title {
    margin-bottom: 50px;
    color: var(--color-white);
  }

  &__input {
    margin-bottom: 25px;

    &--last {
      margin-bottom: 50px;
    }
  }
}
</style>
