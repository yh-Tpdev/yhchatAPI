---
title: report
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 提交举报

POST /v1/report/create

请求体：

```JSONC
{
  "chatId": "123", // 对象id
  "chatType": 2, // 对象类型，1-用户，2-群聊，3-机器人
  "chatName": "测试会话名称", // 对象名称
  "content": "测试举报内容", // 举报内容
  "url": "https://..." // 举报提交的图片
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```
