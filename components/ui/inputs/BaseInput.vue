<template lang="pug">
input(
    :class="[$style['input']]"
    v-model="valueData"
    :placeholder="props.placeholder"
    type="text"
    )
</template>

<script setup lang="ts">
import { computed } from "vue";

interface IProps {
  value: string;
  placeholder: string;
}

const props = defineProps<IProps>();

const emit = defineEmits<{
  (event: "update:value", value: string): void;
}>();

const valueData = computed({
  get() {
    return props.value;
  },
  set(value: string) {
    emit("update:value", value);
  },
});
</script>

<style lang="scss" module>
@import '../../../assets/scss/_mixins/media.scss';

.input {
  border-bottom: 1px solid var(--color-gray);
  outline: none;
  background-color: inherit;

  color: var(--color-white);
  width: 353px;

  &::placeholder {
    color: var(--color-gray);
  }

  &:focus {
    border-bottom-color: var(--color-blue);
  }
}

@include media($xl-1200) {
  .input {
    width: 100%;
  }
}
</style>
