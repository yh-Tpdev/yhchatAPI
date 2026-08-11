---
title: captcha
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

## 获取滑动验证码

```http request
POST /v1/captcha/get
```

响应体

```JSON
{
  "code": 1,
  "data": {
    "id": "123123123123", // 验证ID
    "master_image": "data:image/jpeg;base64, ...", // 背景图片
    "master_size": {
      "height": 220, // 背景图片组件高度
      "width": 300 // 背景图片组件宽度
    },
    "tile_image": "data:image/png;base64, ...", // 拼图组件图片
    "tile_size": {
      "height": 70, // 拼图组件高度
      "width": 70 // 拼图组件宽度
    },
    "tile_y": 120, // 平台组件初始高度
    "type": "slide" // 验证类别，slide-滑动验证码
  },
  "msg": "success"
}
```
