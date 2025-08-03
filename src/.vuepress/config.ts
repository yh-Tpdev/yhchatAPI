import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "云湖 API 文档",
  description: "云湖聊天 API 文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
