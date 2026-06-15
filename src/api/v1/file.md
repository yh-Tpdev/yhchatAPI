---
title: file
---

未特别说明情况下请求域名均为 `https://chat-go.jwzhd.com`  
没写请求/响应项目表示不需要相关参数.

## 发送超级文件分享申请

POST /v1/file/send

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "userId": "123", // 目标用户 ID
  "deviceId": "123", // 目标用户指定分享的设备 ID，为空则为发送给目标用户的所有设备
  "fileData": "{}" // 文件分享数据，格式为 json 转义
}
```

::: fileData属性，json数据格式

```JSON
{
  "path": "C:\\Windows\\test.exe", // 文件原始目录
  "size": 5774088, // 文件大小
  "name": "test.exe", // 文件名称
  "isDirectory": 0, // 未知
  "count": 1, // 未知
  "current": 1, // 未知
  "uuid": "123123123123123123" // 文件分享 uuid，应该是随机的，可以随便写
}
```

:::

响应体:

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 拒绝超级文件分享

POST /v1/file/reply

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "deviceId": "123123123123", // 拒绝请求的设备 ID
  "isAccept": "0", // 未知
  "userId": "123", // 拒绝请求的用户 ID
  "fileData": "" // 未知
}
```

响应体:

```JSON
{
  "code": 1,
  "msg": "success"
}
```

## 建立超级文件分享

POST /v1/file/offer

请求头:

| 名称  | 必须 | 备注 |
| ----- | ---- | ---- |
| token | 是   | 无   |

请求体:

```JSON
{
  "deviceId": "123", // 目标用户指定分享的设备 ID
  "description": "{}", // 连接协议，为 json 格式数据转义，未完成
  "userId": "123", //目标用户ID
  "sessionId": "123123123123123123123" // 连接请求标识 ID，应该是随机的，可以随便写
}
```

响应体:

```JSON
{
  "code": 1,
  "msg": "success"
}
```
