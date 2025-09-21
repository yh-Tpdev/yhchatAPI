---
title: share
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 分享链接获取群聊信息

POST /v1/share/info

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "key": "9o5UKnYgLk6z", // 分享链接key（来自 https://yhfx.jwznb.com/share?key=9o5UKnYgLk6z&ts=1754730310 内key的值 ）
  "ts": "1754730310" // 创建分享链接时间戳（ts=timestamp）
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "share": {
      "id": 33110, // 第33110个群聊
      "user_id": "114514", // 用户id
      "chat_name": "咸料", // 分享链接会话名称
      "chat_type": 2, // 分享链接会话类型
      "chat_id": "65535", // 会话id
      "key": "123123",  // 分享链接key（来自 https://yhfx.jwznb.com/share?key=123123&ts=123123123 内key的值 ）
      "create_by": "114514", // 分享链接创建者id
      "create_time": 123123123, // 创建分享链接时间戳
      "imageUrl": "share/...", // 分享链接会话头像url
      "imageName": "resources/share_bg/bg1.jpg" // 图片名称
    }
  },
  "msg": "success" // 返回消息
}
```

## 创建分享链接

POST /v1/share/create

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "chatId": "会话id",
  "chatType": 2, // 会话类型，1-用户，2-群聊，3-机器人
  "chatName": "会话名称"
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "imageKey": "share/...", // 图片key
    "key": "123123123", // 分享链接的key
    "shareUrl": "https://yhfx.jwznb.com/", // 分享开头的url
    "ts": 123123123 // 分享链接创建时间戳
  },
  "msg": "success" // 返回消息
}
```
