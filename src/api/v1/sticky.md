---
title: sticky
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 首页置顶信息获取

POST /v1/sticky/list

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "sticky": [
      {
        "id": 8977, // 置顶ID
        "chatType": 2, // 会话对象类别，1-用户，2-群聊，3-机器人
        "chatId": "114514", // 会话对象id
        "chatName": "example", // 会话对象名字
        "sort": 1751616217, // 不知道，跟群聊创建时间戳一样（?
        "avatarUrl": "https://chat-img.jwznb.com/xxxxxxxxxxxxxxx.jpg", // 群聊头像地址
        "createTime": 1751616217, // 会话对象创建时间戳
        "delFlag": 0,
        "userId": "1234567", // 用户id
        "certificationLevel": 0 // 识别是否为官方出品，1为官方出品，0则不是
      }
      // ...
    ]
  },
  "msg": "success" // 返回消息
}
```

## 置顶会话

POST /v1/sticky/add

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "chatId": "430084557", // 会话id
  "chatType": 2 // 会话类型，1-用户，2-群聊，3-机器人
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 取消置顶会话

POST /v1/sticky/delete

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "chatId": "430084557", // 会话id
  "chatType": 2 // 会话类型，1-用户，2-群聊，3-机器人
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```

## 把其中一个已置顶会话移到最前

POST /v1/sticky/topping

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体：

```JSONC
{
  "id": 5753 // 置顶id
}
```

响应体：

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回状态消息
}
```
