---
title: live
---

未特别说明情况下请求域名均为 https://chat-go.jwzhd.com
没写请求/响应项目表示不需要相关参数.  

## 获取指定语音频道进入token

POST /v1/live/add

请求头:  
|名称|必须|备注|
|-----|------|-----|
|token|是|无|

请求体：
```JSONC
{
roomId: "123123123123", // 目标群语音频道ID
chatId: "123" // 目标语言频道所处对象ID
}
```

响应头:  
```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "joinToken: ": "123123123123123123", // 语音频道进入token
  },
  "msg": "success" // 返回消息 
}
```
