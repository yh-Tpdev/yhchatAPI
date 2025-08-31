---
title: search
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

## 群聊首页搜索

POST /v1/search/home-search

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "word": "114514" // 搜索关键词
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "list": [
      {
        "title": "用户", // 类型标题
        "list": null // 搜索用户，没有就显示null
      },
      {
        "title": "群组", // 类型标题
        "list": [
          {
            "friendId": "114514", // 群聊id
            "friendType": 2,  // 识别对象类别，1-用户，2-群聊，3-机器人
            "nickname": "114514", // 群聊名字
            "name": "",
            "avatarUrl": "https://chat-img.jwznb.com/ba7631819aaff2fc5799bbf6f279c606.jpg", // 群聊头像url
            "hit": 1 
          }
        ]
      },
      {
        "title": "机器人", // 类型标题
        "list": null // 搜索机器人，没有就显示null
      }
    ]
  },
  "msg": "success" // 返回消息
}
```

## 聊天记录搜索

POST /v1/search/chat-search

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "word": "3598257", // 搜索词
  "chatId": "test", // 对象ID
  "chatType": 2, // 对象类别
  "type": "all", // 信息类别，1-文本，3-markdown，4-文件，6-文章，7-表情包，8-html
  "size": 30, // 
  "time": 9999999999999, // 涵盖信息时间戳，只返回此时间戳内的信息
  "direction":1 // 未知
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "list": [
      {
        "id": "123", // 信息ID
        "sequence": 123, // 第几条信息
        "chatId": "123", // 信息所处对象ID
        "chatType": 0, // 未知，不是信息所处对象类别
        "name": "测试发送者名称", // 发送者名称
        "avatarUrl": "https://...",
        "content": "测试信息文本", // 信息文本
        "type": "1", // 信息类别，1-文本，3-markdown，4-文件，6-文章，7-表情包，8-html
        "time": 123123123123, // 发送时间
        "timeText": "1231-23-12 31:23:00" // 发送时间戳
      }
      // ...
     ]
  },
  "msg": "success" // 返回消息
}
```
