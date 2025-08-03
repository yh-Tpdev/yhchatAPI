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
```JSON
{"chatId": "用户/机器人/群组ID,类型str"}
```

响应体:  
```JSON
{
 "code": 1, // (响应码,1为正常,数字)
 "msg": "success" // (响应信息)
}
```