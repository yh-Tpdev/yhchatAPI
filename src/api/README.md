---
title: API
---
## 目录

* 1

> **[v1](./v1/)**  
> -云湖v1版本API已记录的所有API文档

* 2

> **[wss](./wss/)**  
> -云湖wss连接已记录的所有连接文档

* 3

> **[web](./web/)**  
> -云湖网页版API已记录的所有API文档

* 4

> **[bpt](./bot/)**  
> -云湖bot/机器人已记录的所有API文档

::: warning
* `https://chat-audio1.jwznb.com/` 音频路由
* `https://chat-file.jwznb.com/` 文件路由
* `https://chat-img.jwznb.com/` 图片路由
* `https://chat-video1.jwznb.com/` 视频路由
  
云湖数据床地址需要请求头加上 `referer: http://myapp.jwznb.com` 才可正常获取内容，否则会403.

当发送的文件体积过大时， `chat-file.jwznb.com` 文件路由请求下载时会重定向到 `chat-file-oss.jwznb.com` 这个路由不需要referer.
:::

<Catalog />
