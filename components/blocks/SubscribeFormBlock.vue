// форма

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
</script>

<template lang="pug">
section(:class="[$style['subscribe-block'], 'container']")
    h3(:class="[$style['subscribe-block__title']]") Подпишись на рассылку
    div(:class="[$style['subscribe-block__subscribe']]")
      BaseInput(
        v-model:value="email",
        placeholder="Email")
      BaseButtons(
        :class="[$style['subscribe-block__subscribe-button']]",
        color="blue",
        label="Подписаться"
      )
</template>

<style module lang="scss">
@import '../../assets/scss/_mixins/media.scss';

.subscribe-block {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px;
  background-color: var(--color-text);

  &__subscribe {
    display: flex;
    align-items: flex-end;
  }

  &__title {
    color: var(--color-white);
  }

  &__subscribe-button {
    margin-left: 37px;
  }
}

@include media($xl-1200) {
  .subscribe-block {
    flex-direction: column;
gap: 20px;
    padding: 30px;
    background-color: var(--color-text);

    &__subscribe {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }

    &__title {
      color: var(--color-white);
    }

    &__subscribe-button {
      margin-left: 5px;
    }
  }
}
</style>


