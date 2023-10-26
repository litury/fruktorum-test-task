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
        Icon(name="IconFacebook" )
        Icon(name="IconVK" )
        Icon(name="IcoInstagram" )
        Icon(name="IconTelegram" )

    //- Подписка
  SubscribeFormBlock
</template>

<script setup>
import { ref } from "vue";

let email = ref("");
</script>

<style module lang="scss">
.footer  {

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

  &__social {
    display: flex;
    gap: 20px;
  }
}
</style>
