import { MapFile } from '@/constant';
// esm 模块映射文件名
import importMapContent from './vue3/import-map.json?raw'
// app 入口文件名
import AppContent from './vue3/App.vue?raw'
import mainContent from './vue3/main.ts?raw'
// app 模版文件名
import indexHtmlContent from './index.html?raw'

// app 文件名
export const APP_COMPONENT_FILE_NAME = 'App.vue'
// app 模版文件名
export const APP_INDEX_HTML_FILE_NAME = 'index.html'
// esm 模块映射文件名
export const IMPORT_MAP_FILE_NAME = 'import-map.json'
// app 入口文件名
export const ENTRY_FILE_NAME = 'main.ts'

const indexHtml = indexHtmlContent.trim();
const mainTs = mainContent.trim();
const appVue = AppContent.trim();
const importMap = importMapContent.trim();

export const Vue3Template = {
  [APP_INDEX_HTML_FILE_NAME]: indexHtml,
  [ENTRY_FILE_NAME]: mainTs,
  [APP_COMPONENT_FILE_NAME]: appVue,
  [MapFile]: importMap,
};