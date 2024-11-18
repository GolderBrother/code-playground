<template>
  <CodePlayground :options="options" class="codeplayground-container"></CodePlayground>
</template>

<script setup lang="ts">
// import CodePlayground, { CodePlaygroundOptions } from '../../core/src/index';
import CodePlayground, { CodePlaygroundOptions } from '../../core';

const options: CodePlaygroundOptions = {
  appType: 'vue3',
};
</script>

<style scoped lang="less">
.codeplayground-container {
  max-height: 100vh;
  height: 100vh;
}
</style>
