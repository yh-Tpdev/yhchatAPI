---
title: file
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`
没写请求/响应项目表示不需要相关参数.  

## 发送超级文件分享申请

POST /v1/file/send

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  

```JSONC
{
  "userId": "123", // 目标用户ID
  "deviceId": "123", // 目标用户指定分享的设备ID，为空则为发送给目标用户的所有设备
  "fileData": "{}" // 文件分享数据，格式为json转义，json转义准确格式未完成
}
```

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```

## 拒绝超级文件分享

POST /v1/file/reply

请求头:  

|名称|必须|备注|
|-----|-----|-----|
|token|是|无|

请求体:  

```JSONC
{
  "deviceId": "123123123123", // 拒绝请求的设备ID
  "isAccept": "0", // 未知
  "userId": "123", // 拒绝请求的用户ID
  "fileData": "" // 未知
}
```

响应体:  

```JSONC
{
  "code": 1, // 请求状态码，1为正常
  "msg": "success" // 返回消息
}
```
