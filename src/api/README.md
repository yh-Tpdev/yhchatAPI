---
title: API
---
## 目录

::: warning

- 音频路由:
- `https://chat-audio1.jwznb.com/`
- 文件路由:
- `https://chat-file.jwznb.com/`
- `https://chat-storage1.jwznb.com/`(有签名校验,无 referer 限制)
- `https://chat-file-oss.jwznb.com/`(无 referer 限制,一般 chat-file 的大文件会被重定向到这里)
- 图片路由:
- `https://chat-img.jwznb.com/`
- `https://chat-img2.jwznb.com/`
- `https://chat-img3.jwznb.com/`
- 视频路由:
- `https://chat-video1.jwznb.com/`
  
云湖数据床地址需要请求头加上 `Referer: http://myapp.jwznb.com` 才可正常获取内容，否则会403.
:::

<Catalog />
