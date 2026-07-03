---
title: chat-ws-go.jwzhd.com
---

> 本文章下所有 wss 请求地址均为 `wss://chat-ws-go.jwzhd.com/ws`

没写 请求/响应项目 表示不需要相关参数，使用以下功能前必须先链接 wss 并 **登录云湖账号** 。

如果登录失败或未登录直接发送数据，会返回"数据不合法"或其二进制格式或无任何响应。

本教程中未特别说明情况下 proto 的 WsInfo 均为以下部分:

```protobuf
<!-- @include: @src/full.proto#WsInfo -->
```

::: warning
请先在 proto 文件中添加 `import "google/protobuf/any.proto";` 以支持 Any 类型.  
此处使用的是 Protobuf 的 Wrapper,解析时请务必注意!Wrapper 结构如下:  

```protobuf
<!-- @include: @src/full.proto#WsWrapper -->
```

下述 ws 的 proto 结构均为均为不带 Wrapper 的结构.

:::

## 登录云湖账号

发送数据

```JSON
{
  "seq": "123123123123123123123", // 请求标识码，可以随便写
  "cmd": "login", // 为login，代表登录
  "data": {
    "userId": "123", // 登录用户ID
    "token": "nj104901-****-****-****-************",
    "platform": "windows", // 登录平台，只能为 windows，Web 等特定值,乱写云湖不认
    "deviceId": "123" //设备识别码，可随便写
  }
}
```

允许的平台

注：**大小写敏感，填写错误会导致登录失败**.

- `windows`
- `macos`
- `android`
- `linux`
- `ios`
- `fuchsia`
- `Web`

## 发送心跳包

发送数据

```JSON
{
  "seq": "123123123123123123123", // 请求标识码，可以随便写
  "cmd": "heartbeat", // 为heartbeat，代表心跳包
  "data": {}
}
```

返回数据

```protobuf
// 心跳包返回信息
<!-- @include: @src/full.proto#HeartbeatAckResponse -->
```

## 草稿同步

发送草稿同步

```JSON
{
  "seq": "123123123123123123123", // 请求标识码，可以随便写
  "cmd": "inputInfo", // 为inputInfo，代表发送草稿同步
  "data": {
    "chatId": "872440499", // 对象 ID
    "input": "测试草稿同步", // 草稿同步内容,会直接覆盖原有的草稿
    "deviceId": "123" // 设备 ID
  }
}
```

接收草稿同步

```protobuf
// 接收草稿同步
<!-- @include: @src/full.proto#MsgInput -->
```

## 推送消息

返回数据

```protobuf
<!-- @include: @src/full.proto#PushMessage -->
```

## 编辑消息接收

!!和推送消息可以共用.!!

返回数据

```protobuf
<!-- @include: @src/full.proto#PushMessage -->
```

<!-- ## 推送超级文件分享

返回数据

```ProtoBuf
info {
  seq: "1234567abcd" // 请求标识码
  cmd: "file_send_message" // 推送超级文件分享
}

data {
  any: "type.googleapis.com/proto.PushMessage" // ProtoBuf 的 any 字段
  file_send: {
      send_user_id: "123" // 分享者用户ID
      user_id: "123" // 接收者用户ID
      temp_code: 1 // 未知
      send_type: "candidate" // 分享类别区分文本
      data: "{}" // 经过转义义的json格式发送数据
      send_deviceId: "123123123123" // 发送者设备唯一标识符
    }
}
```

::: details ProtoBuf数据结构

```proto
// 超级文件分享
message file_send_message {
  INFO info = 1;
  Data data = 2;

  message Data {
    string any = 1;
    Sender sender = 2;

    message Sender {
      string send_user_id = 1; // 分享者用户ID
      string user_id = 2; // 接收者用户ID
      uint64 temp_code = 3; // 未知
      string send_type = 4; // 分享类别区分文本
      string data = 5; // 经过转义后的json格式发送数据
      string send_deviceId = 6; // 发送者设备唯一标识符
    }
  }
}
```

::: -->

## 接受邀请消息

::: tip 提示
本项只提供了“有人邀请我”的这种状态，并没有提供相关信息，如邀请人、群聊 ID 等，建议配合邀请列表进行使用。
:::

返回数据

```protobuf
<!-- @include: @src/full.proto#InviteApplyResponse -->
```

## 流式消息

::: tip
流式消息第一个推送是 push_message,后续才是 stream_message,需要将 content 里面的内容追加到消息内容后面.
:::

返回数据

```protobuf
<!-- @include: @src/full.proto#StreamMessage -->
```

## 用户挂断语音

返回数据

```protobuf
<!-- @include: @src/full.proto#LiveMessage -->
```

## 机器人看板更新推送

返回数据

```protobuf
<!-- @include: @src/full.proto#BotBoardMessage -->
```
