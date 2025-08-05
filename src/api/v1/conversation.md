---
title: conversation
---

## 将对话设为已读  

POST /v1/conversation/dismiss-notification

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  
```JSONC
{
 "chatId": "123" // 用户/机器人/群组ID
}
```

响应体:  
```JSONC
{
 "code": 1, // 返回状态码,1为正常
 "msg": "success" // 返回信息
}
```
