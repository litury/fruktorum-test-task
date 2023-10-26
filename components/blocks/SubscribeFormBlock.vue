// форма

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
</script>

<template lang="pug">
div(:class="[$style['subscribe-block']]")
    h3(:class="[$style['subscribe-block__title']]") Подпишись на рассылку
    span(:class="[$style['subscribe-block__subscribe']]")
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
</style>
