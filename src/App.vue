<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
const testFun = () => {
  console.log(1)
}
testFun()
</script>

<template>
  <div>测试格式化</div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;

  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
