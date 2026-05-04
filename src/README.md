---
home: true
icon: house
title: 主页
heroImage: https://theme-hope-assets.vuejs.press/logo.svg
bgImage: /assets/Hiro.avif
bgImageStyle:
  background-attachment: fixed
heroText: ""
tagline: 云湖API文档
actions:
  - text: API文档
    type: primary
    icon: book
    link: ./api/
  
  - text: Github仓库
    link: https://github.com/yh-Tpdev/yhchatAPI

copyright: false
footer: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | CC-BY-SA 4.0
---
<style>
/* 1. 针对背景图容器，创建一个全覆盖的深色遮罩层 */
.vp-hero-mask::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 这里的 rgba(0, 0, 0, 0.6) 表示 60% 透明度的黑色 */
  /* 你可以根据需要调整这个数值，数值越大越暗 */
  background-color: rgba(0, 0, 0, 0.6) !important;
  z-index: 1; /* 确保遮罩在图片之上 */
}

/* 2. (可选) 稍微降低图片自身的对比度，也有助于凸显文字 */
.vp-hero-mask {
  filter: contrast(0.9) !important;
}

/* 3. 重要！必须确保文字和按钮内容在遮罩层之上 */
.vp-hero-info {
  position: relative;
  z-index: 2; /* 确保它在 z-index 1 的遮罩层上面 */
}

/* 4. 优化文字和按钮颜色，使用高对比度的白色 */
.vp-hero-title {
  color: #ffffff !important;
  /* 增加轻微的文字阴影，进一步辅助识别 */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8) !important;
}

#main-description {
  color: #eeeeee !important; /* 描述文字稍微调灰一点点，增加层次感 */
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8) !important;
}

/* 5. 针对你图片中看不清的 "Github仓库" 按钮进行修复 */
.vp-hero-action.default {
  /* 强制设置一个带透明度的灰色背景，防止背景图干扰 */
  background-color: rgba(255, 255, 255, 0.15) !important;
  color: #ffffff !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  backdrop-filter: blur(4px); /* 按钮局部加一点模糊，非常实用 */
}

/* 针对主要按钮（API文档），确保它足够醒目 */
.vp-hero-action.primary {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3) !important;
}
</style>

云湖已发现API及调用的非官方参考文档.目的是方便开发者进行二次开发使用.  
**本文档默认你拥有相关编程基础,不解决过于小白的问题.**  
**所有API信息只做为公开参考**  
**所有API调用请遵循相关法律法规以及云湖的用户协议,本项目仅用于学习研究用途.**  
**由于文档的特殊性,可能会因为某些原因随时停止服务.**
