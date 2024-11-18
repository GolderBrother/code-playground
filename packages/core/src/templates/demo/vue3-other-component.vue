<script lang="ts" setup>
import { Button as DeltaButton, ProviderConfig } from '@tencent/delta-component'
import '@tencent/delta-component/dist/index.css';
// import { Button as AntdVueButton } from 'ant-design-vue'
/**
 * 组件库的主题
 */
const COMPONENT_THEME = 'das';
// 全局配置
const globalConfig = { custom: { theme: COMPONENT_THEME } };
</script>
<template>
  <div class="container">
  	<ProviderConfig :globalConfig="globalConfig">
      <DeltaButton>DeltaButton11111</DeltaButton>
    </ProviderConfig>
    <a-space>
      <a-button type="primary">Primary</a-button>
      <a-button>Secondary</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="outline">Outline</a-button>
      <a-button type="text">Text</a-button>
    </a-space>
  </div>
</template>

<style lang="less">
.container {
  padding: 16px;
}
</style>