<template lang="pug">
button(
    :class="[$style.button, $style[`button--${props.color}`]]",
    @click="emit('click')"
  ) {{props.label}}
</template>

<script setup lang="ts">
interface IProps {
  label: string;
  color: string;
}

const props = withDefaults(defineProps<IProps>(), {
  color: "blue",
});

const emit = defineEmits<{
  (event: "click"): void;
}>();
</script>

<style module lang="scss">
.button {
  color: var(--color-white);
  padding: 10px 50px;

  &--blue {
    background-color: var(--color-blue);
    border: 1px solid transparent;
  }

  &--blue:hover {
    background-color: transparent;
    border: 1px solid var(--color-blue);
  }

  &--black {
    background-color: var(--color-text);
  }

  &--black:hover {
    background-color: var(--color-text);
  }
}
</style>
