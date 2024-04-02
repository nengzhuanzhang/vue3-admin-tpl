<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
</script>

<template>
  <h5>测试style</h5>
  <div>测试格式化</div>
  <el-button type="primary" :icon="Edit" circle />
  <el-button type="primary">Primary</el-button>

  <DefSvgIcon name="dingding" width="30px" height="30px"></DefSvgIcon>
</template>

<style scoped lang="scss">
h5 {
  color: $font-color;
}
</style>
