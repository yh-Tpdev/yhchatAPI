---
title: live
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.  

## 获取语音频道进入token

POST /v1/live/add

请求头:  

|名称|必须|备注|
|-----|------|-----|
|token|是|无|

请求体：

```JSONC
{
  "roomId": "123123123123", // 目标语音频道ID
  "chatId": "123" // 目标语言频道所处对象ID
}
```

响应头:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "joinToken: ": "123123123123123123", // 语音频道进入token
  },
  "msg": "success" // 返回消息 
}
```

## 关闭语音频道

POST /v1/live/close

请求头:  

|名称|必须|备注|
|-----|------|-----|
|token|是|语音频道管理员token|

请求体：

```JSONC
{
  "roomId": "123123123123", // 目标语音频道ID
}
```

响应头:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息 
}
```

## 挂断语音频道

POST /v1/live/hang_up

请求头:  

|名称|必须|备注|
|-----|------|-----|
|token|是|无|

请求体：

```JSONC
{
  "roomId": "123123123123", // 目标语音频道ID
}
```

响应头:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {},
  "msg": "success" // 返回消息 
}
```

## 获取语音频道信息

POST /v1/live/room-info

请求头:  

|名称|必须|备注|
|-----|------|-----|
|token|是|无|

请求体：

```JSONC
{
  "roomId": "123123123123", // 目标语音频道ID
}
```

响应头:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "data": {
    "room": {
      "id": 18658,
      "userId": "123", // 房间管理员用户ID
      "roomId": "ef8beba697c84a5f889af45211b449a1", // 房间ID
      "recvIds": "", // 未知
      "chatId": "872440499", // 房间ID所属对象
      "title": "测试频道", // 房间ID标题
      "chatType": 2, // 房间ID所属对象类别
      "status": 0, //房间状态
      "duration": 0, // 未知
      "typ": 2, // 未知
      "createBy": "8264925", // 房间创建用户名称
      "createTime": 1754454550, // 房间创建时间戳 
      "updateBy": "8264925", // 房间更新用户名称
      "updateTime": 1754455159 // 房间创建时间戳
    }
  },
  "msg": "success" // 返回消息 
}
```

## 编辑语音频道标题

POST /v1/live/title-edit

请求头:  

|名称|必须|备注|
|-----|------|-----|
|token|是|语音频道管理员token|

请求体：

```JSONC
{
  "roomId": "123123123123", // 目标语音频道ID
  "title": "测试语音频道名称" //目标语音频道名称
}
```

响应头:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息 
}
```
