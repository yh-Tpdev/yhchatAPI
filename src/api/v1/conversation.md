---
title: conversation
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

## 将对话设为已读

POST /v1/conversation/dismiss-notification

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
 "chatId": "123" // 用户/机器人/群组 ID
}
```

响应体:

```JSON
{
 "code": 1,
 "msg": "success"
}
```

## 获取对话列表

POST /v1/conversation/list

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```protobuf
<!-- @include: @src/full.proto#ConversationListRequest-->
```

响应体:

```proto
<!-- @include: @src/full.proto#ConversationListResponse-->
```

## 更改对话排序

POST /v1/conversation/sort-change

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "userId": "123" // 对象 ID
}
```

响应体:

```JSON
{
 "code": 1,
 "msg": "success"
}
```

## 删除对话

POST /v1/conversation/remove

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "chatId": "123" // 对象 ID
}
```

响应体:

```JSON
{
 "code": 1,
 "msg": "success"
}
```
