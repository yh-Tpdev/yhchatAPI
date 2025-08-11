---
title: chat-background
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 设置聊天背景

POST /v1/chat-background/edit

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求头：

```JSONC
{
  "userId": "用户id",
  "chatId": "群聊id", // 如果设置全部背景则填all
  "url": "要设置背景的文件名+拓展名"
}
```

响应头：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 获取背景设置列表

POST /v1/chat-background/list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应头：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "list": [
      {
        "id": 514, // 背景设置的id
        "userId": "114514", // 用户id
        "chatId": "all", // 聊天id，单个群聊就是正常的，如果是全部的那id就是all
        "imgUrl": "https://chat-img.jwznb.com/background9.webp", // 背景图片url
        "createTime": 1754710993, // 创建时间戳
        "delFlag": 0,
        "updateTime": 1754713160 // 更新时间戳
      }
    // ...
    ]
  },
  "msg": "success" // 返回消息
}
```
