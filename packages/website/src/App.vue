<template>
  <CodePlayground :options="options" class="codeplayground-container"></CodePlayground>
</template>

<script setup lang="ts">
import CodePlayground, { CodePlaygroundOptions } from 'codeplayground';
// app 入口文件名
import AppContent from './template/vue3/App.vue?raw'

const options: CodePlaygroundOptions = {
  appType: 'vue3',
  code: AppContent,
  activeFile: 'App.vue'
};
</script>

<style scoped lang="less">
.codeplayground-container {
  max-height: 100vh;
  height: 100vh;
}
</style>
