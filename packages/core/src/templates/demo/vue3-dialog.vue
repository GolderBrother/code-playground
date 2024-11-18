<script lang="ts" setup>
import { ref } from "vue";
import {
  Button,
  Space,
  ProviderConfig,
  Dialog,
} from "@tencent/delta-component";
import "@tencent/delta-component/dist/index.css";

/**
 * 组件库的主题
 */
const COMPONENT_THEME = "das";
// 全局配置
const globalConfig = { custom: { theme: COMPONENT_THEME } };

const visibleNormalDrag = ref(false);
const visibleModal = ref(false);
const visibleModelessDrag = ref(false);
const visibleModeless = ref(false);
</script>
<template>
  <div class="container">
    <ProviderConfig :globalConfig="globalConfig">
      <div>
        <Space>
          <Button theme="primary" @click="visibleNormalDrag = true"
            >普通对话框</Button
          >
          <Button theme="primary" @click="visibleModelessDrag = true"
            >非模态对话框</Button
          >
          <Button theme="primary" @click="visibleModeless = true"
            >非模态对话框-不可拖拽</Button
          >
          <Button theme="primary" @click="visibleModal = true"
            >模态对话框-不可拖拽</Button
          >
        </Space>

        <Dialog
          v-model:visible="visibleNormalDrag"
          header="普通对话框"
          mode="normal"
          draggable
          :on-confirm="() => (visibleNormalDrag = false)"
        >
          <template #body>
            <div>我是内容</div>
            <div>我是内容</div>
          </template>
        </Dialog>
        <Dialog
          v-model:visible="visibleModelessDrag"
          header="非模态对话框"
          mode="modeless"
          draggable
          :on-confirm="() => (visibleModelessDrag = false)"
        >
          <template #body>
            <div>我是内容</div>
            <div>我是内容</div>
            <div>我是内容</div>
          </template>
        </Dialog>
        <Dialog
          v-model:visible="visibleModeless"
          header="非模态对话框-不可拖拽"
          mode="modeless"
          :on-confirm="() => (visibleModeless = false)"
        >
          <template #body>
            <div>我是内容</div>
            <div>我是内容</div>
            <div>我是内容</div>
          </template>
        </Dialog>
        <Dialog
          v-model:visible="visibleModal"
          header="模态对话框"
          mode="modal"
          draggable
          :on-confirm="() => (visibleModal = false)"
        >
          <template #body>
            <div>默认点击蒙层或按ESC可关闭</div>
            <div>我是内容</div>
            <div>我是内容</div>
          </template>
        </Dialog>
      </div>
    </ProviderConfig>
  </div>
</template>

<style lang="less">
.container {
  padding: 16px;
}
</style>
