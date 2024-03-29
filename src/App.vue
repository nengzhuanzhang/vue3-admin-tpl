<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { Edit } from '@element-plus/icons-vue'
</script>

<template>
  <div>测试格式化</div>
  <HelloWorld msg="Vite + Vue" />
  <el-button type="primary" :icon="Edit" circle />
  <el-button type="primary">Primary</el-button>

  <svg>
    <use xlink:href="#icon-dingding"></use>
  </svg>
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
