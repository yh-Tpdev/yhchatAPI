---
title: chat-ws-go.jwzhd.com
---

本文章下所有wss请求域名均为 wss://chat-ws-go.jwzhd.com
没写请求/响应项目表示不需要相关参数,使用以下功能前必须先链接wss并 **登录云湖账号**.  

## 登录云湖账号

发送数据:  
```JSONC
{
  "seq": "123123123123123123123", // 请求标识码，可以随便写
  "cmd": "login", // 为login，代表登录
  "data": {
    "userId": "123", // 登录用户ID
    "token": "nj104901-****-****-****-************",
    "platform": "windows", // 登录平台，只能为windows，web等
    "deviceId": "123" //设备识别码，可随便写
  }
}
```

## 发送心跳包

发送数据:  
```JSONC
{
  "seq": "123123123123123123123", // 请求标识码，可以随便写
  "cmd": "heartbeat", // 为heartbeat，代表心跳包
  "data": {}
}
```

返回数据:  
```ProtoBuf
data: {
  seq: "123123123123123123123", // 请求标识码
  cmd: "heartbeat_ack" // 为heartbeat_ack，代表心跳包的返回
}
```
::: details ProtoBuf数据结构
```proto
// 心跳包返回信息
message heartbeat_ack_info {
    Data data = 1; //数据
    message Data {
        string id = seq; // 请求标识码，可以随便写
        string cmd = 2; // 为heartbeat，代表心跳包
    }
}
```
:::

## 发送笔记同步

发送数据:  
```JSONC
{
  "seq": "123123123123123123123", // 请求标识码，可以随便写
  "cmd": "inputInfo", // 为inputInfo，代表发送笔记同步
  "data": {
    "chatId": "872440499", // 用户ID
    "input": "测试笔记同步", // 笔记同步内容
    "deviceId": "123" // 设备唯一识别码
  }
}
```
