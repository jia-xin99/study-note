import { defineUserConfig } from 'vuepress';
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  lang: 'zh-CN',
  title: '学习笔记',
  base: 'study-note',
  description: '这是我的第一个 VuePress 站点',
  theme: hopeTheme({
    // 此处放置主题配置
  }),
})