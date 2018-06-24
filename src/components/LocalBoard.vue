<template>
  <div class="flex flex-wrap w-full h-full">
    <div class="board-section board-section--local" v-for="i in 9" :key="i"></div>
  </div>
</template>

<script>
export default {
  name: 'board-section',
};
</script>
