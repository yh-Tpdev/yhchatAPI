---
title: menu
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 点击消息输入框上面按钮的反馈

POST /v1/menu/event

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求头：

```JSONC
{
  "id": 338, // 按钮id
  "chatId": "114514", // 聊天id
  "chatType": 2, // 会话类型
  "value": "" // 按钮的值
}
```

响应头：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```
