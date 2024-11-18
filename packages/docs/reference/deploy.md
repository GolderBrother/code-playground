# 组件式使用

codeplayground 本身是一个 vue3 组件，因此支持在 vue3 项目中以组件的方式使用，以便于进入进行私有化部署。

## 安装

选择一个你喜欢的包管理器进行安装:

```sh
npm i codeplayground
# or
yarn add codeplayground
# or
pnpm add codeplayground
```

## 使用

如下代码是一个引入 `codeplayground` 并使用的示例：

::: code-group

```html [App.vue]
<template>
  <CodePlayground :options="options" class="codeplayground-container"></CodePlayground>
</template>

<script setup lang="ts">
  import CodePlayground, { CodePlaygroundOptions } from 'codeplayground';

  const options: CodePlaygroundOptions = {
    appType: 'vue3',
  };
</script>

<style scoped>
  .codeplayground-container {
    max-height: 100vh;
    height: 100vh;
  }
</style>
```

```ts [main.ts]
import { createApp } from 'vue';
import 'codeplayground/dist/style.css';

import App from './App.vue';

const app = createApp(App);
app.mount('#app');
```

:::

## 配置

可以通过 `options` 参数对 `codeplayground` 进行配置，`options` 参数的属性同[指南-配置](/guide/config) 一节。
