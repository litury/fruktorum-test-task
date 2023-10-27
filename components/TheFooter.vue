<template lang="pug">
footer(:class="[$style['footer'], 'container']")

    // - Обертка
    div(:class="[$style['footer__wrapper']]")

      // - Инфо
      div(:class="$style['footer__content']")
        AppLogo(:class="$style['footer__logo']")
        p(:class="$style['footer__description']")
          | Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности

      // - Контакты
      div(:class="$style['footer__subscribe']")
        p(:class="$style['footer__subscribe-title']")
          | email
        p(:class="$style['footer__subscribe-text']")
          | testblogsupport@gmail.com

        //- Социальные линки
        div(:class="$style['footer__social']")
          nuxt-icon(:class="$style['footer__social-icon']" name="facebook" filled)
          nuxt-icon(:class="$style['footer__social-icon']" name="VK" filled)
          nuxt-icon(:class="$style['footer__social-icon']" name="instagram" filled)
          nuxt-icon(:class="$style['footer__social-icon']" name="telegram" filled)

      //- Подписка
    SubscribeFormBlock
</template>

<script setup>
import { ref } from "vue";

let email = ref("");
</script>

<style module lang="scss">
.footer {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 70px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 426px;
  }

  &__description {
    color: var(--color-gray);
  }

  &__subscribe-title {
    font-size: var(--font-size-body-2);
    line-height: var(--line-height-body-2);
    color: var(--color-gray);
  }

  &__subscribe-text {
    font-family: Ubuntu-Regular, sans-serif;
    margin-bottom: 24px;
  }

  &__social {
    display: flex;
    gap: 20px;
  }

  &__social-icon svg {
    width: 30px;
    height: 30px;
  }
}
</style>
