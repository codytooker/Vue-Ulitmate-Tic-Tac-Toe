<template>
  <div class="flex flex-wrap w-full h-full">
    <span class="board-section board-section--local flex items-center justify-center text-5xl"
      v-for="i in 9"
      :key="i">X</span>
  </div>
</template>

<script>
export default {
  name: 'board-section',
};
</script>
