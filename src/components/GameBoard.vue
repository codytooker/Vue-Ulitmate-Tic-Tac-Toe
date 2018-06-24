<template>
  <div class="flex flex-wrap bg-white w-700 h-700">
    <div v-for="i in 9" :key="i">{{ i }}</div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.game-board {
  width: 700px;
  height: 700px;
}

.game-board > div {
  width: 33.333333333%;
  border-bottom: 4px solid red;
  border-right: 4px solid red;
}

.game-board > div:nth-last-child(-n+3) {
  border-bottom: none;
}

.game-board > div:nth-child(3n) {
  border-right: none;
}
</style>
