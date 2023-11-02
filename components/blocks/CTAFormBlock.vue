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
      BaseInput(
        v-model:value="phone",
        :class="[$style['form-block__input']]", placeholder="Имя")
      BaseInput(
        v-model:value="name",
        :class="[$style['form-block__input']]", placeholder="Телефон")
      BaseInput(
        v-model:value="email",
        :class="[$style['form-block__input'], $style['form-block__input--last']]",
        placeholder="Email")
      BaseButtons(:class="[$style['form-block__button']]", label="Присоединиться", color="blue")
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const name = ref("");
const phone = ref("");

</script>

<style module lang="scss">
@import '../../assets/scss/_mixins/media.scss';

.form-block {
  display: flex;
  padding: 60px;
  gap: 60px;
  background-color: var(--color-text);


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

@include media($xl-1200) {

  .form-block {

    display: flex;
    padding: 10px;
    gap: 60px;
    background-color: var(--color-text);

    &__form {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }

    &__title {
      margin-bottom: 50px;
      color: var(--color-white);
    }

    &__img-wrapper{
      display: none;
    }

    &__input {
      margin-bottom: 25px;

      &--last {
        margin-bottom: 50px;
      }
    }
  }
}
</style>
