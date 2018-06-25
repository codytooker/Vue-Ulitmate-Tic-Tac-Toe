<template>
  <span class="flex items-center justify-center bg-white text-5xl select-none" v-text="value" />
</template>

<script>
export default {
  props: [
    'value',
  ],
};
</script>
