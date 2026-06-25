---
title: menu
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

## 触发快捷菜单事件

POST /v1/menu/event

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求头：

```JSON
{
  "id": 123, // 按钮 id
  "chatId": "114514", // 聊天 id
  "chatType": 2, // 会话类型
  "value": "" // 按钮的值
}
```

响应头：

```JSON
{
  "code": 1,
  "msg": "success"
}
```
