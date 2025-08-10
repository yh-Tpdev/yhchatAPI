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
